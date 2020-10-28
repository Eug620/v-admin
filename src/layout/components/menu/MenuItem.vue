<template>
  <a-menu-item :key="routeChildren.fullPath" @click="handleLink">
    <item :icon="routeChildren.meta.icon" :title="routeChildren.meta.title" :tag="routeChildren.meta.tag" />
  </a-menu-item>
</template>

<script>
import { isExternal } from '@/utils/validate'
import item from './Item'
export default {
  name: 'MenuItem',
  components: { item },
  props: {
    item: {
      type: Object,
      default() {
        return null
      }
    },
    routeChildren: {
      type: Object,
      default: () => null
    }
  },
  methods: {
    handleLink() {
      const routePath = this.routeChildren.fullPath
      const target = this.routeChildren.meta.target
      if (target === '_blank') {
        if (isExternal(routePath)) window.open(routePath)
        else if (this.$route.path !== routePath) window.open(routePath.href)
      } else {
        if (isExternal(routePath)) window.location.href = routePath
        else if (this.$route.path !== routePath) this.$router.push(routePath)
      }
    }
  }
}
</script>
