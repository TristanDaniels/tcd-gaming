<template>
  <div class="products-container pb-4 pt-4">
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
<style>
.products-container {
  background-image: url(https://i.postimg.cc/RhnQnR6t/Products.jpg);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}
</style>
