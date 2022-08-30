<template>
  <Products v-for="product in products" :key="product.id" :product="product" />
</template>
<script>
import Products from "../components/Products.vue";
import store from "../store";
export default {
  components: { Products },
  data() {
    return {
      products: [],
    };
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },

  mounted() {
    this.$store.dispatch("getproducts");
  },
};
</script>
<style></style>
