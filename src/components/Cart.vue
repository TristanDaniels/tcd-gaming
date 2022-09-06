<template>
  <body>
    <h2 class="fw-bold pt-4 pb-2">Shopping Cart</h2>
    <div
      class="card shadow fw-bold mb-2 mt-2"
      v-for="product of cartItems"
      :key="product.id"
    >
      <img
        :src="product.imgURL"
        class="img mb-4 img-fluid"
        alt="Picture of product"
      />
      <h5 class="fw-bold">{{ product.title }}</h5>
      <p class="d-flex justify-content-center">
        <span class="fw-bold pb-2">Subtotal: R{{ product.price }}</span>
      </p>
      <button @click="deleteFromCart(product.id)" class="btn mb-4">
        <span class="btn-sm pe-2 fw-bold"
          ><i class="button fa fa-trash ps-2 pe-2"></i>Remove</span
        >
      </button>
    </div>
    <!-- <div class="content">
      <div v-for="product of cartItems" :key="product.id">
        <img
          :src="product.imgURL"
          class="image mb-2 mt-2 ms-2 me-2"
          alt="picture of game"
        />
        <h3 class="fw-bold">{{ product.title }}</h3>
        <button @click="deleteFromCart(product.id)" class="btn mt-2">
          <span class="btn-sm pe-2 fw-bold"
            ><i class="button fa fa-trash ps-2 pe-2"></i>Remove</span
          >
        </button>
        <p class="d-flex justify-content">
          <span class="fw-bold ps-5">Subtotal: R{{ product.price }}</span>
        </p>
      </div>
    </div> -->
    <p class="namecart fw-bold">
      <span>Grand Total:</span> <span>R{{ calculatePrice }}</span>
    </p>
    <router-link class="router-link" to="/checkout"
      ><button
        class="checkout button btn btn-lg mb-2 fw-bold mb-2 mt-2 pt-2 pb-2"
      >
        Checkout
      </button></router-link
    >
  </body>
</template>
<script>
export default {
  data() {
    return {
      total: "",
    };
  },
  methods: {
    deleteFromCart(id) {
      return this.$store.dispatch("deleteFromCart", id);
    },
  },

  computed: {
    calculatePrice() {
      return this.$store.state.cart.reduce((accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.price);
      }, 0);
    },
    cartItems() {
      return this.$store.state.cart;
    },
    item() {
      return this.$store.state.item;
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: url(https://i.postimg.cc/vms3Th6N/Cart.jpg);
  color: white;
  object-fit: cover;
  background-size: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.project {
  display: flex;
  flex-direction: row;
}
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
.btn-sm {
  background-color: #737373;
  color: white;
}
.btn-sm:hover {
  background-color: rgb(219, 0, 219);
  color: white;
}
.unit input {
  width: 50px;
  padding: 8px;
  text-align: center;
}
.btn-area i {
  margin-right: 5px;
}
.checkout {
  background-color: #33353d;
  color: white;
}
.checkout:hover {
  background-color: rgb(219, 0, 219);
  color: white;
}

span {
  font-size: 25px;
}

a {
  font-size: 20px;
}
.router-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
.router-link:hover {
  color: rgb(219, 0, 219);
}
@media (max-width: 700px) {
  .card {
    width: 70%;
  }
}
</style>
