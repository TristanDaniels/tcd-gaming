<template>
  <Profile v-if="user" />
</template>

<script>
import Profile from "../components/Profile.vue";

export default {
  name: "ProfileView",
  components: {
    Profile,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
