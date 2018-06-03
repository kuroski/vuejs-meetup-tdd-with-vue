<script>
import { mapState } from 'vuex'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'

export default {
  name: 'user-view',
  components: {
    VUserSearchForm,
    VUserProfile,
  },
  computed: {
    ...mapState({
      user: 'user'
    })
  },
  methods: {
    searchUser(username) {
      this.$store.dispatch('SEARCH_USER', { username })
    }
  }
}
</script>

<template>
  <div>
    <VUserSearchForm :search="searchUser" />
    <VUserProfile :user="user" />
  </div>
</template>

