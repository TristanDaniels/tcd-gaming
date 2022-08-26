<template>
  <div id="products">
    <Navbar />
    <div>
      <h1>Check out our finest car selection:</h1>
    </div>
    <div v-if="Products"></div>
    <div class="row p-5">
      <div
        v-for="product in Products"
        :key="product.product_id"
        class="product col-sm-4 p-5"
      >
        <router-link
          id="product-link"
          :to="{ name: 'productDetails', params: { id: product.id } }"
        >
          <div class="card">
            <img class="car-image" v-bind:src="product.imgURL" alt="" />
            <div class="button">
              <a> See more </a>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import Products from "../components/Products.vue";
export default {
  name: "Products",
  data() {
    return {
      products: null,
    };
  },
  components: {
    Footer,
    Navbar,
    Products,
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
