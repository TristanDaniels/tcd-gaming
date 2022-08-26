<template>
  <section id="admin">
    <Navbar />
    <div class="heading">
      <h1>PRODUCTS ADMIN PAGE</h1>
    </div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-outline-light"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Add Product
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
            <h5 class="modal-title" id="exampleModalLabel">Create A New Car</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="createproduct" id="modal-form" class="p-2">
              <input
                type="text"
                id="title-add"
                placeholder="Car Name"
                v-model="title"
              />
              <input
                type="text"
                id="address-add"
                placeholder="Car Name"
                v-model="category"
              />
              <input
                type="url"
                placeholder="https://picsum.photos/300/400"
                id="imageURL-add"
                v-model="imgURL"
              />
              <div>
                <input
                  type="number"
                  id="price-add"
                  placeholder="Price"
                  v-model="price"
                />
              </div>

              <input
                v-model="quantity"
                class="form form-sm"
                aria-label=".form-sm example"
                id="quantity-add"
              />
              <textarea
                name="description"
                id="description"
                cols="57"
                rows="10"
                placeholder="Description of your car"
                v-model="description"
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
                @click="createproduct"
              >
                Create Car
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <table class="table dark text-secondary">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">TITLE</th>
          <th scope="col">CATEGORY</th>
          <th scope="col">DESCRIPTION</th>
          <th scope="col">IMG</th>
          <th scope="col">PRICE</th>
          <th scope="col">QTY</th>
          <th scope="col">EDIT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <div v-if="Products"></div>
          <div v-for="product in Products" :key="product.product_id">
            <div class="row">
              <td scope="col-1">{{ product.id }}</td>
              <td scope="col-1">{{ product.title }}</td>
              <td scope="col-1">{{ product.category }}</td>
              <td scope="col-1">{{ product.description }}</td>
              <td scope="col-1">{{ product.imgURL }}</td>
              <td scope="col-1">{{ product.price }}</td>
              <td scope="col-1">{{ product.qauntity }}</td>
              <td scope="col-1">{{ product.category }}</td>
              <td scope="col-1">
                <button type="btn">
                  <i
                    title="Edit"
                    class="bi bi-pencil-square"
                    id="edit"
                    @click="toggleModal"
                  ></i>
                </button>
                <button type="btn" @click="deleteproduct">
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </div>
          </div>
        </tr>
      </tbody>
    </table>
    <Footer />
  </section>
</template>
<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Admin from "../components/Admin.vue";
export default {
  components: {
    Footer,
    Navbar,
    Admin,
  },
  computed: {
    Products() {
      return this.$store.state.products;
    },
  },
  data() {
    return {
      title: "",
      category: "",
      description: "",
      imgURL: "",
      price: "",
      quantity: "",
    };
  },
  methods: {
    createproduct() {
      return this.$store.dispatch("createproduct", {
        title: this.title,
        category: this.category,
        description: this.description,
        imgURL: this.imgURL,
        price: this.price,
        quantity: this.quantity,
      });
      // console.log("products")
    },
    product() {
      return this.$store.state.product;
    },
    editproduct(id) {
      return this.$store.dispatch("editproduct", id);
    },

    deleteproduct(id) {
      return this.$store.dispatch("deleteproduct", id);
    },
  },
  mounted() {
    return this.$store.dispatch("getproducts");
  },
};
</script>
<style scoped>
#admin {
  background-color: #0a0908;
  color: white;
}
.heading {
  padding-top: 4rem;
  padding-bottom: 2rem;
  border: 1px 1px 1px 1px white;
}
</style>
