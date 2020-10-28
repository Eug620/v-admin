import defaultSettings from '@/settings'

const { showSettings, title, navbarTheme, headerTheme, tagsView, fixedHeader, sidebarLogo, collapsed } = defaultSettings

const state = {
  showSettings: showSettings,
  title: title,
  navbarTheme: navbarTheme,
  headerTheme: headerTheme,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
  collapsed: collapsed
}
const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (Object.prototype.hasOwnProperty.call(state, key)) {
      state[key] = value
    }
  }
}
const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default { state, mutations, actions }
