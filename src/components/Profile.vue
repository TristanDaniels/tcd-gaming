<template>
  <div v-if="user">
    <div>
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
<style></style>
