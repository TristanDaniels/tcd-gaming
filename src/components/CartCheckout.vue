<template>
  <div class="checkout">
    <h3>Thank you for your purchase.</h3>
    <h5>Your items will arrive shortly!</h5>
  </div>
</template>
<script>
export default {
  name: "CartCheckout",
};
</script>
<style scoped>
.checkout {
  background-color: #26272b;
  color: white;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h3 {
  padding-top: 6rem;
  font-weight: bold;
}
h5 {
  font-weight: bold;
}
</style>
