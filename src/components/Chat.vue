<template lang="pug">
  section#chat
    h2 Chat
    ul
      li
        span name
        span message
        span time
    NewMessage(:name="name")
</template>

<script>
import NewMessage from '@/components/NewMessage'

export default {
  name: 'Chat',
  props: {
    name: String
  },
  components: {
    NewMessage
  }
}
</script>

<style lang="stylus" scoped>
  section#chat
    ul
      li
        span
          display block
</style>
