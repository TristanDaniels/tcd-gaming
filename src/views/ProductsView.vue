<template>
  <Products v-for="product in Products" :key="product.id" :product="product" />
</template>
<script>
import Products from "../components/Products.vue";
export default {
  components: { Products },
  data() {
    return {
      Products: [],
    };
  },
  mounted() {
    fetch("https://tcd-gaming.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => (this.Properties = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style></style>
