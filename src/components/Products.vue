<template>
  <div class="card shadow fw-bold">
    <img
      :src="product.imgURL"
      class="img mb-4 img-fluid"
      alt="Picture of product"
    />
    <h5 class="fw-bold">{{ product.title }}</h5>
    <p>R{{ product.price }}</p>
    <p>{{ product.category }}</p>
    <router-link
      :to="{ name: 'SingleCardView', params: { id: product.id } }"
      class="link"
      ><button type="submit" class="button btn fw-bold">
        View product
      </button></router-link
    >
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style scoped>
.card {
  color: white;
  width: 30%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 1px 1px 8px black;
  text-align: center;
  background-color: #26272b;
}
.button:hover {
  transform: scale(1.02);
}
.link {
  width: 100%;
}
.card p {
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.button:hover {
  background-color: rgb(219, 0, 219);
  border-color: rgb(219, 0, 219);
  text-decoration: none;
}
.button {
  background-color: #737373;
  border-color: #737373;
  color: white;
  margin-bottom: 20px;
  transition: all 0.4s ease;
}
.img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
@media screen and (max-width: 826px) {
  .card {
    width: 50%;
  }
}
@media screen and (max-width: 770px) {
  .card {
    width: 100%;
  }
}
</style>
