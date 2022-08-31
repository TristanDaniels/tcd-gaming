<template>
  <div class="products">
    <div class="filters">
      <button class="form-control btn mb-3 me-3 btn-sm" @click="sortByPrice">
        Sort By Price
      </button>
      <select v-model="category">
        <option value="All" selected>All</option>
        <option value="Action">Action</option>
        <option value="Adventure">Adventure</option>
        <option value="Dessert">Dessert</option>
        <option value="Drinks">Drink</option>
        <option value="Sides">Side</option>
      </select>
      <input
        type="text"
        class="form-control"
        placeholder="Search..."
        v-model="search"
      />
    </div>
    <div class="products-container container-fluid pb-4 pt-4">
      <Products
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div
      v-if="filteredItems"
      class="products-container container-fluid pb-4 pt-4"
    >
      <Products
        v-for="product in filteredproducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
<script>
import Products from "../components/Products.vue";
export default {
  data() {
    return {
      search: "",
      category: "All",
    };
  },
  props: ["product"],
  components: { Products },

  mounted() {
    this.$store.dispatch("getproducts");
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
    filteredItems() {
      return this.$store.state.items?.filter((item) => {
        let isMatch = true;
        if (!item.name?.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (this.category !== "All" && item.category !== this.category)
          isMatch = false;
        return isMatch;
      });
    },
  },

  methods: {
    sortByPrice() {
      //gives function a name (does not need to be the same as the name given in the store)
      this.$store.commit("sortByPrice"); //runs the function in the store
    },
  },
};
</script>
<style>
.products {
  background-image: url(https://i.postimg.cc/RhnQnR6t/Products.jpg);
}
.products-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}
.form-control {
  width: 30%;
}
@media screen and (max-width: 826px) {
  .products-container {
    flex-direction: column;
  }
}
</style>
