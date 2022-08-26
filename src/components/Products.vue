<template>
  <div class="card bg-dark text-light p-3 m-3 shadow-lg">
    <div class="img-conatiner">
      <router-link :to="{ name: 'productDetails', params: { id: product.id } }">
        <img id="img" v-bind:src="product.img" />
      </router-link>
    </div>

    <h2>{{ product.title }}</h2>
    <h2>
      <i class="fa-solid fa-hand-holding-dollar p-1"></i>{{ product.price }}
    </h2>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style>
.card {
  padding: 10px;
  border-radius: 0 !important;
}
#img {
  width: 20rem;
  height: auto;
}
#property-text {
  padding: 0.5rem;
}
</style>
