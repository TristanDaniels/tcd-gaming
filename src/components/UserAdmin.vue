<template>
  <section id="admin">
    <div class="heading">
      <h2 class="heading2 fw-bold">USERS ADMIN PAGE</h2>
    </div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-outline-light fw-bold"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add user
    </button>

    <!-- Add Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content p-2">
          <div class="modal-header">
            <h5 class="modal-fullname" id="exampleModalLabel">
              Create A New user
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createuser" id="modal-form" class="p-2">
              <input
                type="text"
                id="fullname-add"
                placeholder="user Name"
                v-model="fullname"
              />
              <input
                type="text"
                id="address-add"
                placeholder="user email"
                v-model="email"
              />
              <input
                type="url"
                placeholder="Image URL"
                id="imageURL-add"
                v-model="userRole"
              />
              <div>
                <input
                  type="number"
                  id="joinDate-add"
                  placeholder="joinDate"
                  v-model="joinDate"
                />
              </div>

              <input
                v-model="cart"
                class="form form-sm"
                placeholder="cart"
                aria-label=".form-sm example"
                id="cart-add"
              />
              <textarea
                name="password"
                id="password"
                cols="52"
                rows="10"
                placeholder="password of your user"
                v-model="password"
              ></textarea>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="btn"
                class="btn btn-outline-dark"
                @click="createuser"
              >
                Create user
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Modal -->
    <div
      class="modal fade"
      id="exampleModal2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel2"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content p-2">
          <div class="modal-header">
            <h5 class="modal-fullname" id="exampleModalLabel2">Edit user</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="edituser" id="modal-form" class="p-2">
              <input
                type="text"
                id="fullname-add"
                placeholder="user Name"
                v-model="fullname"
              />
              <input
                type="text"
                id="address-add"
                placeholder="user email"
                v-model="email"
              />
              <input
                type="url"
                placeholder="Image URL"
                id="imageURL-add"
                v-model="userRole"
              />
              <div>
                <input
                  type="number"
                  id="joinDate-add"
                  placeholder="joinDate"
                  v-model="joinDate"
                />
              </div>

              <input
                v-model="cart"
                class="form form-sm"
                placeholder="cart"
                aria-label=".form-sm example"
                id="cart-add"
              />
              <textarea
                name="password"
                id="password"
                cols="52"
                rows="10"
                placeholder="password of your user"
                v-model="password"
              ></textarea>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="btn" class="btn btn-outline-dark" @click="edituser">
                Edit user
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <table class="table dark text-white fw-bold">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">fullname</th>
          <th scope="col">email</th>
          <th scope="col">password</th>
          <th scope="col">IMG</th>
          <th scope="col">joinDate</th>
          <th scope="col">QTY</th>
          <th scope="col">EDIT</th>
          <th scope="col">DELETE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td scope="col-1">{{ user.id }}</td>
          <td scope="col-1">{{ user.fullname }}</td>
          <td scope="col-1">{{ user.email }}</td>
          <td scope="col-1">{{ user.password }}</td>
          <td scope="col-1">{{ user.userRole }}</td>
          <td scope="col-1">{{ user.joinDate }}</td>
          <td scope="col-1">{{ user.cart }}</td>
          <td scope="col-1">
            <button
              type="button"
              class="btn btn-outline-light fw-bold"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
          </td>
          <td>
            <button
              type="btn"
              class="btn btn-outline-light fw-bold"
              @click="deleteuser(user.id)"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<script>
import UserAdmin from "./UserAdmin.vue";
export default {
  components: {
    UserAdmin,
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    // user() {
    //   return this.$store.state.user;
    // },
  },
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      userRole: "",
      joinDate: "",
      cart: "",
    };
  },
  methods: {
    createuser() {
      return this.$store.dispatch("createuser", {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        userRole: this.userRole,
        joinDate: this.joinDate,
        cart: this.cart,
      });
      // console.log("users")
    },
    user() {
      return this.$store.state.user;
    },
    edituser(id) {
      return this.$store.dispatch("edituser", id, {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        userRole: this.userRole,
        joinDate: this.joinDate,
        cart: this.cart,
      });
    },

    deleteuser(id) {
      return this.$store.dispatch("deleteuser", id);
    },
  },
  mounted() {
    return this.$store.dispatch("getusers");
  },
};
</script>
<style scoped>
#admin {
  background-color: #26272b;
  color: white;
  margin-bottom: -20px;
}
.heading {
  padding-top: 4rem;
  padding-bottom: 2rem;
  border: 1px 1px 1px 1px white;
}
.heading2 {
  margin-top: 4rem;
}
</style>
