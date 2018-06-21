<template lang="pug">
  section#chat
    h2 Chat {{name}}
</template>

<script>
export default {
  name: 'Chat',
  props: {
    name: String
  }
}
</script>

<style lang="stylus" scoped>

</style>
