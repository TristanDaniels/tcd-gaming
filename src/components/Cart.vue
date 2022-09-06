<template>
  <body>
    <h2 class="fw-bold pt-4">Shopping Cart</h2>
    <div class="content">
      <div v-for="product of cartItems" :key="product.id">
        <img
          :src="product.imgURL"
          class="image mb-2 mt-2 ms-2 me-2"
          alt="picture of game"
        />
        <h3 class="fw-bold">{{ product.title }}</h3>
        <p class="fw-bold">{{ product.category }}</p>
        <p class="d-flex justify-content">
          <span class="fw-bold ps-5">Subtotal: R{{ product.price }}</span>
        </p>
        <button @click="deleteFromCart(product.id)" class="btn fw-bold">
          <span class="btn-sm pe-2"
            ><i class="fa fa-trash ps-2 pe-2"></i>Remove</span
          >
        </button>
      </div>
    </div>
    <p class="namecart fw-bold">
      <span>Grand Total:</span> <span>R{{ calculatePrice }}</span>
    </p>
    <router-link class="router-link" to="/checkout"
      ><button class="checkout btn mb-2 fw-bold">Checkout</button></router-link
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
  background-color: black;
}
.project {
  display: flex;
  flex-direction: row;
}
.image {
  width: 250px;
  height: 250px;
  object-fit: cover;
}
.btn-sm {
  background-color: #33353d;
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
@media screen and (max-width: 700px) {
  .content h3 {
    margin-bottom: 15px;
  }
  .content h4 {
    margin-bottom: 20px;
  }
  .btn2 {
    display: none;
  }
  .box {
    height: 150px;
  }
  .box img {
    height: 150px;
    width: 200px;
  }
}
@media screen and (max-width: 900px) {
  .project {
    flex-direction: column;
  }
}
@media screen and (max-width: 125px) {
  .wrapper {
    max-width: 95%;
  }
}
</style>
