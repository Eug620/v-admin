<template>
  <a-layout id="layout">
    <a-layout-header class="header" :class="headerTheme">
      <Navbar />
    </a-layout-header>
    <a-layout>
      <a-layout-sider
        width="220"
        style="overflow-y: scroll"
        :class="navbarTheme"
        v-model:collapsed="collapsed"
        :trigger="null"
      >
        <Menu />
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <tagView v-if="needTagsView" />
        <a-layout-content class="layout-content">
          <app-main />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import { defineComponent, computed } from 'vue'
import tagView from './components/tagview/index'
import Menu from './components/menu/index'
import Navbar from './components/navbar/index'
import AppMain from './components/AppMain'
import { useStore } from 'vuex'
export default defineComponent({
  setup(props, ctx) {
    const store = useStore()
    const collapsed = computed(() => store.state.settings.collapsed)
    const needTagsView = computed(() => store.state.settings.tagsView)
    const headerTheme = computed(() => store.state.settings.headerTheme)
    const navbarTheme = computed(() => store.state.settings.navbarTheme)
    return {
      collapsed,
      needTagsView,
      headerTheme,
      navbarTheme
    }
  },
  components: {
    Menu,
    tagView,
    AppMain,
    Navbar
  }
})
</script>

<style scoped lang="less">
#layout {
  height: 100%;
  width: 100%;
  .header {
    padding: 0 20px;
  }
  .dark {
    background-color: #001529;
    color: white;
  }
  .light {
    background-color: white;
    color: #001529;
  }
  .breadcrumb-box {
    display: flex;
    align-items: center;
    .app-breadcrumb {
      position: relative;
      bottom: 2px;
    }
    .trigger {
      font-size: 18px;
      line-height: 34px;
      padding-right: 10px;
      cursor: pointer;
      transition: color 0.3s;

      &:hover {
        color: #1890ff;
      }
    }
  }
  .layout-content {
    margin: 0;
    margin-top: 60px;
  }
}
</style>
