<template>
  <Products v-for="product in Products" :key="product.id" :product="product" />
</template>
<script>
import Products from "../components/Products.vue";
export default {
  name: "Products",
  components: { Products },
  data() {
    return {
      Products: [],
    };
  },
  mounted() {
    this.$store.dispatch("getproducts");
  },
  computed: {
    Products() {
      return this.$store.state.products;
    },
  },
};
</script>
<style scoped>
#products {
  background-color: #0a0908;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  display: none;
}

#product-info {
  display: none;
}
.card {
  background-color: #f3f3f3;
  justify-content: center;
  align-content: center;
  gap: 30px;
  width: 500px;
  height: auto;
  border-radius: 0 !important;
  border: none;
  box-shadow: 5px 5px 4px rgb(80, 43, 117);
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}
.card:hover {
  background-color: #f3f3f3;
  justify-content: center;
  align-content: center;
  gap: 30px;
  width: 500px;
  height: auto;
  border-radius: 0 !important;
  border: none;
  box-shadow: 5px 5px 4px rgb(80, 43, 117);
  opacity: 0.4;
  transition-duration: 0.5s;
}

.button {
  position: absolute;
  width: 500px;
  left: 0;
  top: 180px;
  text-align: center;
  opacity: 0;
  transition: opacity 0.35s ease;
}

.button a {
  width: 5%;
  padding: 12px 48px;
  text-align: center;
  color: white !important;
  border: solid 2px white;
  z-index: 1;
}

.card:hover .button {
  opacity: 1;
}
.car-image {
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
}
</style>
