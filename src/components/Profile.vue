<template>
  <div class="profile" v-if="user">
    <div class="fullname">
      {{ user.fullname }}
    </div>
    <div class="field">
      {{ user.userRole }}
    </div>
    <div class="field">
      {{ user.phonenumber }}
    </div>
    <div class="field">
      {{ user.joinDate }}
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    mounted() {
      return this.$store.dispatch("getusers");
    },
  },
};
</script>
<style scoped>
.profile {
  background-color: #26272b;
}
.fullname {
  padding-top: 5.5rem;
  color: white;
  font-weight: bold;
}
.field {
  font-weight: bold;
  color: white;
}
</style>
