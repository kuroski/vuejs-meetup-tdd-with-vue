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
    <input type="text" v-model="term" />
    <button type="submit">Pesquisar</button>
  </form>
</template>
