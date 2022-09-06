<template>
  <div class="cart" v-if="product">
    <div v-for="product of product" :key="product.id" :product="product">
      <div>
        <img
          :src="product.imgURL"
          class="productIMG mb-2"
          alt="Picture of product"
        />
        <h5 class="fw-bold">{{ product.title }}</h5>
        <p class="fw-bold">
          {{ product.category }}
        </p>
        <p class="description">{{ product.description }}</p>
        <p>R{{ product.price }}</p>
        <button @click="addToCart(product)" class="btn mb-3">
          <i class="fa-solid fa-cart-arrow-down"></i>
          <span class="btn-sm">Add</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit("updateCart", product);
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    this.$store.dispatch("getSingleproduct", this.$route.params.id);
  },
};
</script>
<style scoped>
.cart {
  background-color: #26272b;
  color: white;
  font-weight: bold;
}
.description {
  padding-left: 20px;
  padding-right: 20px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.productIMG {
  width: 300px;
  height: 300px;
  object-fit: cover;
  padding-top: 20px;
}
a {
  text-decoration: none;
}
.btn {
  color: white;
  font-weight: bold;
  background-color: #737373;
}
.btn:hover {
  background-color: rgb(219, 0, 219);
}
.card {
  color: black;
  width: 30%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.card p {
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#products {
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
}
@media screen and (max-width: 800px) {
  .card {
    width: 100%;
    margin-bottom: 40px;
  }
}
</style>
