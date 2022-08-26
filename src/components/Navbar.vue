<template>
  <nav class="navbar">
    <div class="navbar-container container">
      <input type="checkbox" name="" id="" />
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <ul class="menu-items">
        <nav class="nav-links">
          <router-link to="/">Home </router-link>
          <router-link to="/products">Products </router-link>
          <router-link to="/contact">Contact </router-link>
          <router-link to="/login">Login </router-link>
          <router-link to="/register">Register </router-link>
          <router-link to="/admin">Admin </router-link>
          <router-link to="/cart"
            ><i class="fa-solid fa-cart-shopping"></i>
          </router-link>
          <router-link to="/account"
            ><i class="fa-regular fa-user"></i>
          </router-link>
        </nav>
      </ul>
      <h1 class="logo">
        <a href="/"><i class="fa-solid fa-dharmachakra"></i></a>
      </h1>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
.navbar input[type="checkbox"],
.navbar .hamburger-lines {
  display: none;
}

.container {
  max-width: 1200px;
  width: 90%;
  margin: auto;
}
.nav-links {
  padding: 20px;
  background-color: #000000;
  justify-content: space-around;
  background: transparent;
}
/* .nav-links:active {
  padding: 20px;
  background-color: #000000;
  justify-content: space-around;
  background:transparent;
} */
.navbar {
  position: sticky;
  width: 100%;
  background: #000000;
  /* background:transparent; */
  color: white;
  /* color: #000; */
  opacity: 0.4;
  z-index: 1;
}
nav a {
  font-weight: bold;
  color: rgb(255, 255, 255);
  /* color: #a89ab9; */
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
}

.menu-items {
  order: 2;
  display: flex;
}
.logo {
  order: 1;
  font-size: 2.3rem;
}

.menu-items li {
  list-style: none;
  margin-left: 1.5rem;
  font-size: 1.3rem;
}

.navbar a {
  /* color: rgb(168, 168, 168); */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;
}

.navbar a:hover,
.nav a:active {
  color: #8b00db;
}

@media (max-width: 768px) {
  .navbar {
    opacity: 0.95;
  }

  .navbar-container input[type="checkbox"],
  .navbar-container .hamburger-lines {
    display: block;
  }

  .navbar-container {
    display: block;
    position: relative;
    height: 64px;
  }

  .navbar-container input[type="checkbox"] {
    position: absolute;
    display: block;
    height: 32px;
    width: 30px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  .navbar-container .hamburger-lines {
    display: block;
    height: 28px;
    width: 35px;
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .navbar-container .hamburger-lines .line {
    display: block;
    height: 4px;
    width: 100%;
    border-radius: 10px;
    background: rgb(255, 255, 255);
  }

  .navbar-container .hamburger-lines .line1 {
    transform-origin: 0% 0%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar-container .hamburger-lines .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .navbar-container .hamburger-lines .line3 {
    transform-origin: 0% 100%;
    transition: transform 0.3s ease-in-out;
  }

  .navbar .menu-items {
    padding-top: 100px;
    background: #000000;
    height: 100vh;
    width: 600px;
    transform: translate(-150%);
    display: flex;
    flex-direction: column;
    margin-left: -40px;
    padding-left: 40px;
    transition: transform 0.5s ease-in-out;
    /* box-shadow: 5px 0px 10px 0px #aaa; */
    overflow: scroll;
  }

  .navbar .menu-items li {
    margin-bottom: 1.8rem;
    font-size: 1.1rem;
    font-weight: 500;
  }

  .logo {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 2.5rem;
  }

  .navbar-container input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
    transform: rotate(45deg);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
    transform: scaleY(0);
  }

  .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
    transform: rotate(-45deg);
  }
  /* #landing {
    background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
      url(/asesets/landing.jpg);
    min-height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;
    font-family: "Yuji Mai", serif;
    aspect-ratio: 1;
    object-fit: contain;
  } */
  .nav-links {
    display: flex;
    flex-direction: column;
  }
}
@media (max-width: 500px) {
  .navbar-container input[type="checkbox"]:checked ~ .logo {
    display: none;
    height: 100%;
  }
  .nav-links {
    z-index: 100;
    position: fixed;
    top: -150%;
    left: 0;
    right: 0;
    height: 105vh;
    background-color: black;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    transition: top 0.3s linear;
  }
  .nav-links.active {
    top: 0;
  }
}
</style>
