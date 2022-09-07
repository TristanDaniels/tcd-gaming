<template>
  <div v-if="user">
    <div class="fullname">
      {{ user.fullname }}
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style scoped>
.fullname {
  padding-top: 5.5rem;
}
</style>
