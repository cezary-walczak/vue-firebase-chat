<template lang="pug">
  section#welcome
    h2 Welcome
    form(@submit.prevent="enterChat")
      label(for="name")
      input(type="text" name="name" v-model="name")
      button Enter chat
      p(v-if="feedback") {{feedback}}
</template>

<script>
export default {
  name: 'Welcome',
  data() {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.feedback = null
        this.$router.push({ name: 'Chat', params: { name: this.name } })
      } else {
        this.feedback = 'You must enter a name to join'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
