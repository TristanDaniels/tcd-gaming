<template>
  <!-- Edit Modal -->
  <div
    class="modal fade"
    :id="'eUserModal' + user.id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel4"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content p-2">
        <div class="modal-header">
          <h5 class="modal-fullname" id="exampleModalLabel4">Edit user</h5>
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
              v-model="user.fullname"
            />
            <input
              type="text"
              id="address-add"
              placeholder="user email"
              v-model="user.email"
            />
            <input
              type="text"
              placeholder="userRole"
              id="userRole-add"
              v-model="user.userRole"
            />
            <div>
              <input
                type="date"
                id="joinDate-add"
                placeholder="joinDate"
                v-model="user.joinDate"
              />
            </div>

            <input
              v-model="user.phonenumber"
              class="form form-sm"
              placeholder="phonenumber"
              aria-label=".form-sm example"
              id="phonenumber-add"
            />
            <textarea
              name="text"
              id="cart-add"
              placeholder="cart"
              v-model="user.cart"
            ></textarea>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              data-bs-dismiss="modal"
              type="btn"
              class="btn btn-outline-dark"
              @click="edit"
            >
              Edit user
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["user"],
  methods: {
    edit() {
      return this.$store.dispatch("edituser", this.user);
    },
  },
};
</script>
