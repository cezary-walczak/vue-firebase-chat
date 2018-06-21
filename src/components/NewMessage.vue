<template lang="pug">
  section#new-message
    form(@submit.prevent="addMessage")
      label(for="new-message") New Message (enter to add)
      input(type="text" name="new-message" v-model="newMessage")
</template>

<script>
export default {
  name: 'NewMessage',
  props: {
    name: String
  },
  data() {
    return {
      newMessage: null
    }
  },
  methods: {
    addMessage() {
      console.log(this.newMessage, this.name, Date.now())
    }
  }
}
</script>

