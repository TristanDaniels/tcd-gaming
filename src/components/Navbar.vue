<template>
  <section>
    <nav id="Navbar" class="navbar navbar-expand-md">
      <div class="container-lg">
        <!-- navbar brand / title -->
        <a class="navbar-brand" href="#intro">
          <span class="fw-bold"> TCD Gaming </span>
        </a>
        <!-- toggle button for mobile nav -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"
            ><i class="fa-solid fa-bars"></i
          ></span>
        </button>
        <!-- navbar links -->
        <div
          class="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <router-link class="me-2" to="/">Home</router-link>
          <router-link class="me-2" to="/about">About</router-link>
          <router-link class="me-2" to="/products">Products</router-link>
          <router-link class="me-2" to="/contact">Contact</router-link>
          <router-link class="me-2" v-if="!user" to="/register"
            >Register</router-link
          >
          <router-link class="me-2" v-if="!user" to="/login">Login</router-link>
          <router-link class="me-2" v-if="user" to="/cart"
            ><i class="fa-solid fa-cart-shopping"></i
          ></router-link>
          <router-link class="me-2" v-if="user" to="/profile"
            ><i class="fa-solid fa-user"></i
          ></router-link>
          <router-link class="me-2" v-if="user" to="/productadmin"
            >Product Admin</router-link
          >
          <router-link class="me-2" v-if="user" to="/useradmin"
            >User Admin</router-link
          >
        </div>
      </div>
    </nav>
  </section>
</template>
<script>
export default {
  name: "Navbar",
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
<style scoped>
#Navbar {
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 0;
  color: white;
  background-color: #26272b;
  position: fixed;
  width: 100%;
  z-index: 100;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(219, 0, 219);
}
.me-2:hover {
  color: rgb(219, 0, 219);
  text-decoration: none;
}
.navbar-toggler-icon {
  color: white;
}
@media screen and (max-width: 768px) {
  nav a {
    display: flex;
    flex-direction: column;
  }
}
</style>
