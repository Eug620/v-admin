<template>
  <div :class="{ show: show }" class="header-search">
    <SearchOutlined class="nav-icon" @click.stop="click" />
    <a-select
      ref="headerSearchSelect"
      class="header-search-select"
      show-search
      v-model:value="search"
      placeholder="Search"
      :default-active-first-option="false"
      :show-arrow="false"
      :filter-option="false"
      :not-found-content="null"
      :autofocus="true"
      @search="querySearch"
      @change="change"
    >
      <a-select-option v-for="item in options" :key="item.item.path">
        {{ item.item.title.join('>') }}
      </a-select-option>
    </a-select>
  </div>
</template>
<script>
import { SearchOutlined } from '@ant-design/icons-vue'
import {
  computed,
  defineComponent,
  getCurrentInstance,
  onMounted,
  ref,
  watch,
  nextTick
} from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Fuse from 'fuse.js'
import path from 'path'
export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const ctx = getCurrentInstance()
    const search = ref('')
    const options = ref([])
    const searchPool = ref([])
    const show = ref(false)
    let fuse
    const routes = computed(() => store.getters.permission_routes)
    const click = () => {
      show.value = !show.value
      if (show.value) {
        console.log(ctx.refs.headerSearchSelect)
        ctx.refs.headerSearchSelect && ctx.refs.headerSearchSelect.focus()
      }
    }
    const close = () => {
      ctx.refs.headerSearchSelect && ctx.refs.headerSearchSelect.blur()
      options.value = []
      show.value = false
    }
    const change = async(path) => {
      router.push(path)
      search.value = ''
      options.value = []
      await nextTick()
      show.value = false
    }
    const initFuse = (list) => {
      fuse = new Fuse(list, {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [
          {
            name: 'title',
            weight: 0.7
          },
          {
            name: 'path',
            weight: 0.3
          }
        ]
      })
    }
    const generateRoutes = (routes, basePath = '/', prefixTitle = []) => {
      let res = []

      for (const router of routes) {
        if (router.hidden) {
          continue
        }

        const data = {
          path: path.resolve(basePath, router.path),
          title: [...prefixTitle]
        }

        if (router.meta && router.meta.title) {
          data.title = [...data.title, router.meta.title]

          if (router.redirect !== 'noRedirect') {
            res.push(data)
          }
        }

        if (router.children) {
          const tempRoutes = generateRoutes(
            router.children,
            data.path,
            data.title
          )
          if (tempRoutes.length >= 1) {
            res = [...res, ...tempRoutes]
          }
        }
      }
      return res
    }
    const querySearch = (query) => {
      if (query !== '') {
        options.value = fuse.search(query)
      } else {
        options.value = []
      }
    }
    watch(searchPool, (list) => {
      initFuse(list)
    })
    watch(routes, () => {
      searchPool.value = generateRoutes(routes.value)
    })
    watch(show, (value) => {
      if (value) {
        document.body.addEventListener('click', close)
      } else {
        document.body.removeEventListener('click', close)
      }
    })
    onMounted(() => {
      searchPool.value = generateRoutes(routes.value)
    })
    return {
      search,
      options,
      searchPool,
      show,
      click,
      close,
      change,
      querySearch
    }
  },
  components: { SearchOutlined }
})
</script>
<style lang="less" scoped>
.header-search {
  font-size: 0 !important;

  .nav-icon {
    cursor: pointer;
    font-size: 20px;
    margin: 0 10px;
    vertical-align: middle;
  }

  ::v-deep .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .ant-select-selection {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    ::v-deep .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
