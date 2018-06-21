<template lang="pug">
  section#welcome
    h2 Welcome
    form(@submit.prevent="enterChat")
      label(for="name")
      input(type="text" name="name" v-model="name")
      button Enter chat
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: null
    }
  },
  methods: {
    enterChat() {

    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
