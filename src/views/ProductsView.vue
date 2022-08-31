<template>
  <div>
    <Products
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<script>
import Products from "../components/Products.vue";
export default {
  props: ["product"],
  components: { Products },

  mounted() {
    this.$store.dispatch("getproducts");
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
  },
};
</script>
<style></style>
