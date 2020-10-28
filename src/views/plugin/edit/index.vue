<template>
  <div ref="edit" />
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import E from 'wangeditor'

export default defineComponent({
  setup() {
    const edit = ref()
    onMounted(() => {
      const content = new E(edit.value)
      content.config.placeholder = '自定义 placeholder 提示文字'
      content.create()
    })
    return {
      edit
    }
  }
})
</script>

<style lang="less" scoped>

</style>
