<script>
export default {
  name: 'user-search-form',
  props: {
    search: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      term: '',
    }
  },
}
</script>

<template>
  <form @submit.prevent="search(term)">
    <el-input
      placeholder="Pesquise o usuário"
      v-model="term"
      class="input-with-select"
    >
      <el-button
        class="submit"
        native-type="submit"
        slot="append"
        icon="el-icon-search"></el-button>
    </el-input>
  </form>
</template>
