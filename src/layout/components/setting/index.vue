 <template>
  <a-drawer
    placement="right"
    :closable="false"
    @close="onClose"
    v-model:visible="isVisible"
    :zIndex="99999"
  >
    <div class="drawer-container">
      <h3 class="drawer-title">主题风格设置</h3>
      <div class="drawer-item">
        <div
          class="item-radio"
          :class="navbarTheme === 'dark' ? 'active' : ''"
          @click="handleToChangeNavbarTheme('dark')"
        >
          <a-tooltip>
            <template v-slot:title>暗色侧边栏</template>
            <img src="../../../assets/img/nav-theme-dark.svg" />
          </a-tooltip>
        </div>
        <div
          class="item-radio"
          :class="navbarTheme === 'light' ? 'active' : ''"
          @click="handleToChangeNavbarTheme('light')"
        >
          <a-tooltip>
            <template v-slot:title>亮色侧边栏</template>
            <img src="../../../assets/img/nav-theme-light.svg" />
          </a-tooltip>
        </div>
      </div>
      <div class="drawer-item">
        <div
          class="item-radio"
          :class="headerTheme === 'light' ? 'active' : ''"
          @click="handleToChangeHeaderTheme('light')"
        >
          <a-tooltip>
            <template v-slot:title>亮色顶栏</template>
            <img src="../../../assets/img/nav-theme-dark.svg" />
          </a-tooltip>
        </div>
        <div
          class="item-radio"
          :class="headerTheme === 'dark' ? 'active' : ''"
          @click="handleToChangeHeaderTheme('dark')"
        >
          <a-tooltip>
            <template v-slot:title>暗色顶栏</template>
            <img src="../../../assets/img/header-theme-dark.svg" />
          </a-tooltip>
        </div>
      </div>
      <h3 class="drawer-title">导航设置</h3>
      <div class="drawer-item">
        <span>开启多页签</span>
        <a-switch v-model:checked="tagsView" class="drawer-switch" />
      </div>
      <div class="drawer-item">
        <span>固定头部</span>
        <a-switch v-model:checked="fixedHeader" class="drawer-switch" />
      </div>
      <div class="drawer-item">
        <span>导航栏Logo</span>
        <a-switch v-model:checked="sidebarLogo" class="drawer-switch" />
      </div>
    </div>
  </a-drawer>
</template>

<script>
import { defineComponent, watch, ref, computed } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close-settings'],
  setup(props, { emit }) {
    const store = useStore()
    const isVisible = ref(false)
    const navbarTheme = computed({
      get: () => store.state.settings.navbarTheme,
      set: (val) => {
        store.dispatch('settings/changeSetting', {
          key: 'navbarTheme',
          value: val
        })
      }
    })
    const headerTheme = computed({
      get: () => store.state.settings.headerTheme,
      set: (val) => {
        store.dispatch('settings/changeSetting', {
          key: 'headerTheme',
          value: val
        })
      }
    })
    const tagsView = computed({
      get: () => store.state.settings.tagsView,
      set: (val) => {
        store.dispatch('settings/changeSetting', {
          key: 'tagsView',
          value: val
        })
      }
    })
    const fixedHeader = computed({
      get: () => store.state.settings.fixedHeader,
      set: (val) => {
        store.dispatch('settings/changeSetting', {
          key: 'fixedHeader',
          value: val
        })
      }
    })
    const sidebarLogo = computed({
      get: () => store.state.settings.sidebarLogo,
      set: (val) => {
        store.dispatch('settings/changeSetting', {
          key: 'sidebarLogo',
          value: val
        })
      }
    })
    const handleToChangeNavbarTheme = (theme) => {
      if (navbarTheme.value !== theme) {
        navbarTheme.value = theme
      }
    }
    const handleToChangeHeaderTheme = (theme) => {
      if (headerTheme.value !== theme) {
        headerTheme.value = theme
      }
    }
    watch(
      () => props.visible,
      (val) => {
        isVisible.value = val
      }
    )
    const onClose = () => {
      emit('close-settings', false)
    }
    return {
      isVisible,
      onClose,
      tagsView,
      fixedHeader,
      sidebarLogo,
      navbarTheme,
      headerTheme,
      handleToChangeNavbarTheme,
      handleToChangeHeaderTheme
    }
  }
})
</script>

<style lang="less" scoped>
.drawer-container {
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 12px 0;
    .item-radio {
      margin-right: 10px;
      cursor: pointer;
      display: inline-block;
      &:after {
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 6px;
        background: transparent;
        margin: 0 auto;
      }
    }
    .active {
      &:after {
        background-color: #19be6b;
      }
    }
  }

  .drawer-switch {
    float: right;
  }
}
</style>
