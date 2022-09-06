<template>
  <div class="products">
    <div class="filters pt-4">
      <button class="sort" @click="sortByPrice">Sort By Price</button>
      <select class="categories" v-model="category">
        <option class="category" value="All" selected>All</option>
        <option class="category" value="Action">Action</option>
        <option class="category" value="Adventure">Adventure</option>
        <option class="category" value="Sport">Sport</option>
        <option class="category" value="Racing">Racing</option>
      </select>
      <input
        type="text"
        class="search fw-bold"
        placeholder="Search..."
        v-model="search"
      />
    </div>
    <div
      v-if="filteredproducts"
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
    filteredproducts() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (!product.title?.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;
        if (this.category !== "All" && product.category !== this.category)
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
<style scoped>
.filters {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 30px;
}
.sort {
  font-weight: bold;
  color: white;
  background-color: #33353d;
  border-color: black;
  transition: all 0.6s ease;
}
.sort:hover {
  background-color: rgb(219, 0, 219);
}
.search {
  font-weight: bold;
  color: white;
  background-color: #33353d;
  border-color: black;
}
.categories {
  font-weight: bold;
  color: white;
  background-color: #33353d;
  border-color: black;
}
.products {
  background-image: url(https://i.postimg.cc/RhnQnR6t/Products.jpg);
  object-fit: cover;
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
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
@media screen and (max-width: 550px) {
  .filters {
    flex-direction: column;
    justify-content: center;
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>
