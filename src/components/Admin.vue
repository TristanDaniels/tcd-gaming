<template>
  <div v-if="active" class="mod">
    <form @submit.prevent="editproducts(product.id)">
      <div>GAME NAME</div>
      <input type="text" v-model="product.title" />
      <div>CATEGORY</div>
      <input type="text" v-model="product.category" />
      <div>DESCRIPTION</div>
      <input type="text" v-model="product.description" />
      <div>IMGURL</div>
      <input type="text" v-model="product.imgURL" />
      <div>PRICE</div>
      <input type="number" v-model="product.price" />
      <div>QUANTITY</div>
      <input type="text" v-model="product.quantity" />
      <br />
      <button type="submit">Save</button>
      <button type="button" @click="toggleModal">Close</button>
    </form>
  </div>
</template>
<script>
export default {
  props: ["product"],
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggleModal() {
      this.active = !this.active;
    },
    editproducts() {
      this.$store.dispatch("editproducts", this.product);
    },
  },
};
</script>
<style scoped>
.mod {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 30px;
  border: 5px solid black;
  z-index: 100;
}
#edit {
  font-size: 20px;
  font-weight: 900;
  color: cornflowerblue;
}
</style>
