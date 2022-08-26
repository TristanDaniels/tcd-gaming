import router from "@/router";
import { createStore } from "vuex";
export default createStore({
  // State is where the data is
  state: {
    //Best to for the data name to be a single version of the array (properties = property)
    products: null,
    user: null,
    cart: [],
    product: null,
    products: null,
    user: null,
    asc: true,
  },
  // Mutations are used to update state
  mutations: {
    setproducts: (state, products) => {
      state.products = products;
    },
    setSingleproduct: (state, product) => {
      state.product = product;
    },
    updateCart: (state, product) => {
      state.cart.push(product);
    },
    setUser: (state, user) => {
      state.user = user;
    },
    removeFromCart: (state, cart) => {
      state.cart = cart;
    },
    sortByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price; //like vanilla javascript, this is how you make a sort function
      });
      if (!state.asc) {
        //if the asc is not true, it reverses the current order of the list
        state.products.reverse(); // reverts the order
      }
      state.asc = !state.asc; //states that when the function is run, asc becomes false instead of true
    },
  },
  // Actions are for ASYNC / Fetch calls
  actions: {
    login: async (context, payload) => {
      const { email, password } = payload;
      const response = await fetch(
        `https://tcd-gaming.herokuapp.com/users?email=${email}&password=${password}` //the ${} is tha payload, and will compare the inputs to the original array
      );
      const userData = await response.json();
      console.log(
        `https://tcd-gaming.herokuapp.com/users?email=${email}&password=${password}`
      );
      if (!userData.length) return alert("No user found with these details"); //Lets the user know that if the information put inside does not match the array, an alert will appear
      context.commit("setUser", userData[0]);
      // const isAdmin = userData[0].isAdmin;
      // if (isAdmin === true) {
      //   // router.push('')
      // } else {
      //   router.push("/");
      // }
      // console.log(userData);
    },
    getproducts: async (context) => {
      //async (context) must ALWAYS be in
      fetch("https://tcd-gaming.herokuapp.com/products")
        .then((res) => res.json())
        .then((products) => {
          context.commit("setproducts", products);
        }); //sends the changes to the array
    },
    getUser: async (context) => {
      fetch("https://tcd-gaming.herokuapp.com/users")
        .then((res) => res.json())
        .then((user) => context.commit("setUser", user));
    },
    getSingleproduct: async (context, id) => {
      fetch("https://tcd-gaming.herokuapp.com/products" + id)
        .then((res) => res.json())
        .then((product) => context.commit("setSingleproduct", product));
    },
    createproduct: async (context, product) => {
      fetch("https://tcd-gaming.herokuapp.com/products", {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
          context.dispatch("getproducts", product);
        });
    },
    editproduct: async (context, product) => {
      fetch("https://tcd-gaming.herokuapp.com/products" + id, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
          context.dispatch("getproducts", product);
        });
    },
    deleteproduct: async (context, id) => {
      fetch("https://tcd-gaming.herokuapp.com/products" + id, {
        method: "DELETE",
      }).then(() => {
        context.dispatch("getproducts");
      });
    },
    addToCart: async (context, id) => {
      this.state.cart.product.push(id);
      context.dispatch("updateCart", this.state.cart);
    },
    deleteFromCart: async (context, id) => {
      const newCart = context.state.cart.filter((product) => product.id != id);
      context.commit("removeFromCart", newCart);
    },
  },
});
