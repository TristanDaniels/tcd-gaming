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
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style>
.card {
  color: white;
  width: 30%;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 1px 1px 8px black;
  text-align: center;
  background-color: #26272b;
  transition: all 0.6s ease;
}
.card:hover {
  transform: scale(1.02);
}

.card p {
  font-family: sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.card:hover {
  color: rgb(219, 0, 219);
  text-decoration: none;
}
.img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
@media screen and (max-width: 826px) {
  .card {
    width: 100%;
  }
}
</style>
