<template lang="pug">
  section#chat
    h2 Chat
    ul(v-chat-scroll)
      li(v-for="message in messages")
        span {{message.name}}
        span {{message.content}}
        span {{message.timestamp}}
    NewMessage(:name="name")
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
  props: {
    name: String
  },
  components: {
    NewMessage,
  },
  data() {
    return {
      messages: []
    }
  },
  created() {
    db.collection('messages').orderBy('timestamp').onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == 'added') {
          this.messages.push({
            id: change.doc.id,
            name: change.doc.data().name,
            content: change.doc.data().content,
            timestamp: moment(change.doc.data().timestamp).locale('pl').format('L' + ' ' + 'LTS')
          })
        }
      })
    })
  }
}
</script>

<style lang="stylus" scoped>
  section#chat
    ul
      max-height 300px
      overflow auto
      li
        span
          display block
</style>
