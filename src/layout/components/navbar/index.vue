<template>
  <div class="header-box">
    <div class="logo-box" v-if="needLogo">
      <img v-if="logo" :src="logo" class="sidebar-logo" />
      <div v-show="!collapsed" class="logo">{{ title }}</div>
    </div>
    <div class="breadcrumb-box">
      <menu-unfold-outlined
        class="trigger"
        v-if="collapsed"
        @click="toggleCollapsed"
      />
      <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed" />
      <RedoOutlined class="trigger" @click="handleToRefresh" />
      <Breadcrumb />
    </div>
    <div class="nav-box">
      <span class="nav-item">
        <HeaderSearch />
      </span>
      <span class="nav-item" @click="clickToErrorLog">
        <a-badge
          :count="errorLogs.length"
          :numberStyle="{ 'box-shadow': 'none' }"
          :offset="[-6, 0]"
        >
          <BugOutlined class="nav-icon" />
        </a-badge>
      </span>
      <span class="nav-item">
        <LockOutlined class="nav-icon" />
      </span>
      <span class="nav-item" @click="toggleFullScreen">
        <CompressOutlined v-if="ifFullScreen" class="nav-icon" />
        <ExpandOutlined v-else class="nav-icon" />
      </span>
      <a-dropdown :trigger="['click']" placement="bottomCenter">
        <span class="nav-item">
          <a-badge
            count="5"
            :numberStyle="{ 'box-shadow': 'none' }"
            :offset="[-6, 0]"
          >
            <BellOutlined class="nav-icon" />
          </a-badge>
        </span>
        <template v-slot:overlay>
          <a-menu>
            <a-menu-item key="1"> Message 1 </a-menu-item>
            <a-menu-item key="2"> Message 2 </a-menu-item>
            <a-menu-item key="3"> Message 3 </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <a-dropdown>
        <div class="avatar-box">
          <a-avatar shape="circle" size="large" :src="avatar.src"> </a-avatar>
          <span>{{ avatar.value }}</span>
        </div>
        <template v-slot:overlay>
          <a-menu>
            <a-menu-item>
              <div @click="handleToUsercenter">
                <UserOutlined />
                <span style="margin-left: 10px">个人中心</span>
              </div>
            </a-menu-item>
            <a-menu-item>
              <div @click="handleToSettings">
                <ToolOutlined />
                <span style="margin-left: 10px">设置</span>
              </div>
            </a-menu-item>
            <a-menu-item>
              <div @click="handleToLogout">
                <ImportOutlined />
                <span style="margin-left: 10px">退出</span>
              </div>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
      <span class="nav-item" @click="showDrawer">
        <MoreOutlined class="nav-icon" />
      </span>
    </div>
  </div>
  <setting :visible="visible" @close-settings="closeSettings" />
</template>
<script>
import {
  defineComponent,
  reactive,
  ref,
  onMounted,
  onUnmounted,
  computed
} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb'
import HeaderSearch from '@/components/HeaderSearch'
import setting from '../setting'
import { useStore } from 'vuex'
import {
  UserOutlined,
  ImportOutlined,
  ToolOutlined,
  MoreOutlined,
  ExpandOutlined,
  CompressOutlined,
  BellOutlined,
  BugOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  RedoOutlined,
  LockOutlined
} from '@ant-design/icons-vue'
import screenfull from 'screenfull'
export default defineComponent({
  setup(props, { emit }) {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const avatar = reactive({
      value: store.getters.name,
      src: store.getters.avatar
    })
    const title = computed(() => store.state.settings.title)
    const logo = ref(
      'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
    )
    const needLogo = computed(() => store.state.settings.sidebarLogo)
    const collapsed = computed(() => store.state.settings.collapsed)
    const toggleCollapsed = () => {
      store.dispatch('settings/changeSetting', {
        key: 'collapsed',
        value: !store.state.settings.collapsed
      })
    }
    const ifFullScreen = ref(false)
    const toggleFullScreen = () => {
      if (!screenfull.isEnabled) {
        return false
      }
      screenfull.toggle()
    }
    const change = () => {
      ifFullScreen.value = screenfull.isFullscreen
    }
    const handleToLogout = async() => {
      await store.dispatch('user/logout')
      router.push(`/login?redirect=${route.fullPath}`)
    }
    const visible = ref(false)
    const showDrawer = () => {
      visible.value = !visible.value
    }
    const closeSettings = (val) => {
      visible.value = val
    }
    const messageList = ref([
      {
        title: 'Ant Design Title 1'
      },
      {
        title: 'Ant Design Title 2'
      },
      {
        title: 'Ant Design Title 3'
      },
      {
        title: 'Ant Design Title 4'
      }
    ])
    const handleToRefresh = () => {
      location.reload()
    }
    const handleToUsercenter = () => {
      router.push('/setting/user')
    }
    const handleToSettings = () => {
      router.push('/setting/account')
    }
    const clickToErrorLog = () => {
      router.push('/error-log/index')
    }
    const errorLogs = computed(() => store.getters.errorLogs)
    onMounted(() => {
      if (screenfull.isEnabled) {
        screenfull.on('change', change)
      }
    })
    onUnmounted(() => {
      if (screenfull.isEnabled) {
        screenfull.off('change', change)
      }
    })
    return {
      avatar,
      collapsed,
      toggleCollapsed,
      ifFullScreen,
      toggleFullScreen,
      handleToLogout,
      visible,
      showDrawer,
      closeSettings,
      title,
      logo,
      needLogo,
      messageList,
      handleToRefresh,
      handleToUsercenter,
      handleToSettings,
      clickToErrorLog,
      errorLogs
    }
  },
  components: {
    UserOutlined,
    ImportOutlined,
    ToolOutlined,
    MoreOutlined,
    ExpandOutlined,
    CompressOutlined,
    BellOutlined,
    BugOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    RedoOutlined,
    LockOutlined,
    Breadcrumb,
    setting,
    HeaderSearch
  }
})
</script>

<style lang="less" scoped>
.header-box {
  overflow: hidden;
  .logo-box {
    float: left;
    height: 40px;
    .sidebar-logo {
      height: 80%;
      vertical-align: middle;
      margin-right: 10px;
    }
    .logo {
      display: inline-block;
      margin-right: 10px;
      font-weight: 600;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }
  .breadcrumb-box {
    float: left;
    display: flex;
    align-items: center;
    height: 64px;
    .trigger {
      cursor: pointer;
      font-size: 20px;
      margin: 0 10px;
    }
  }
  .nav-box {
    float: right;
    justify-content: flex-end;
    height: 64px;
    display: flex;
    align-items: center;
    .nav-item {
      padding: 0 4px;
      cursor: pointer;
      .nav-icon {
        font-size: 20px;
        margin: 0 10px;
      }
    }
    .avatar-box {
      display: flex;
      align-items: center;
      margin: 0 10px;
      .ant-avatar {
        margin-right: 10px;
      }
    }
  }
}
</style>
