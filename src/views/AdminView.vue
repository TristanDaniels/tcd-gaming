<template>
  <section id="admin">
    <div class="heading">
      <h2 class="heading2 fw-bold">PRODUCTS ADMIN PAGE</h2>
    </div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-outline-light fw-bold"
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
            <h5 class="modal-title" id="exampleModalLabel">
              Create A New Product
            </h5>
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
                placeholder="Product Name"
                v-model="title"
              />
              <input
                type="text"
                id="address-add"
                placeholder="Product Category"
                v-model="category"
              />
              <input
                type="url"
                placeholder="Image URL"
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
                placeholder="Quantity"
                aria-label=".form-sm example"
                id="quantity-add"
              />
              <textarea
                name="description"
                id="description"
                cols="52"
                rows="10"
                placeholder="Description of your product"
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
                Create Product
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
            <h5 class="modal-title" id="exampleModalLabel2">
              Create A New Product
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="editproduct" id="modal-form" class="p-2">
              <input
                type="text"
                id="title-add"
                placeholder="Product Name"
                v-model="title"
              />
              <input
                type="text"
                id="address-add"
                placeholder="Product Category"
                v-model="category"
              />
              <input
                type="url"
                placeholder="Image URL"
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
                placeholder="Quantity"
                aria-label=".form-sm example"
                id="quantity-add"
              />
              <textarea
                name="description"
                id="description"
                cols="52"
                rows="10"
                placeholder="Description of your product"
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
                @click="editproduct"
              >
                Edit Product
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
          <th scope="col">TITLE</th>
          <th scope="col">CATEGORY</th>
          <th scope="col">DESCRIPTION</th>
          <th scope="col">IMG</th>
          <th scope="col">PRICE</th>
          <th scope="col">QTY</th>
          <th scope="col">EDIT</th>
          <th scope="col">DELETE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in Products" :key="product.id">
          <td scope="col-1">{{ product.id }}</td>
          <td scope="col-1">{{ product.title }}</td>
          <td scope="col-1">{{ product.category }}</td>
          <td scope="col-1">{{ product.description }}</td>
          <td scope="col-1">{{ product.imgURL }}</td>
          <td scope="col-1">{{ product.price }}</td>
          <td scope="col-1">{{ product.quantity }}</td>
          <td scope="col-1">
            <!-- <button type="btn" @click="toggleModal">
              <i class="fa-solid fa-pen-to-square"></i>
            </button> -->
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
              @click="deleteproduct(product.id)"
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
import Admin from "../components/Admin.vue";
export default {
  components: {
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
      return this.$store.dispatch("editproduct", id, {
        title: this.title,
        category: this.category,
        description: this.description,
        imgURL: this.imgURL,
        price: this.price,
        quantity: this.quantity,
      });
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
