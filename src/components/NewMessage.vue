<template lang="pug">
  section#new-message
    form(@submit.prevent="addMessage")
      label(for="new-message") New Message (enter to add)
      input(type="text" name="new-message" v-model="newMessage")
      p(v-if="feedback") {{feedback}}
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'NewMessage',
  props: {
    name: String
  },
  data() {
    return {
      newMessage: null,
      feedback: null
    }
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection('messages').add({
          name: this.name,
          content: this.newMessage,
          timestamp: Date.now()
        })
        .catch(error => { console.log(error) })
        this.newMessage = null
        this.feedback = null
      } else {
        this.feedback = 'You must enter a message in order to send one'
      }
    }
  }
}
</script>

