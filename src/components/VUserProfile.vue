<script>
export default {
  name: 'user-profile',
  props: {
    user: {
      type: Object,
      required: true,
    }
  }
}
</script>

<template>
  <div>
    <img :src="user.avatar_url" />
    <div class="name">
      {{ user.name }}
    </div>
  </div>
</template>

