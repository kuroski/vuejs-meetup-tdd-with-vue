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
  <el-card class="box-card">
    <div slot="header">
      <VUserSearchForm :search="searchUser" />
    </div>

    <div>
      <VUserProfile :user="user" />
    </div>
  </el-card>
</template>

<style scoped>
.box-card {
  flex: 1;
}
</style>
