<template>
  <div class="card shadow mb-4">
    <img
      :src="product.imgURL"
      class="car-img mb-4 img-fluid"
      alt="Picture of product"
    />
    <h5 class="text-black">{{ product.title }}</h5>
    <p>{{ product.price }}</p>
    <p class="mt-2">{{ product.category }}</p>
  </div>
</template>
<script>
import store from "../store";
export default {
  name: "Products",
  props: ["product"],

  computed: {
    Products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("getproducts");
  },
};
</script>
<style>
.card {
  color: black;
  width: 30%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 1px 1px 8px black;
  text-align: center;
}

.card p {
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
