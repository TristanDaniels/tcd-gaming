<template>
  <section id="login">
    <h2 class="fw-bold pt-4">Login</h2>
    <form id="formData" class="pt-2 ps-4 pe-4 pb-4 fw-bold">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" />
      </div>
      <div id="button" class="mb-3 btn-container d-flex justify-content-center">
        <button type="submit" class="button btn fw-bold">Login</button>
      </div>
    </form>
  </section>
</template>
<script>
export default {};
</script>
<style>
#login {
  background-image: url(https://i.postimg.cc/PqjpPX2L/Login.jpg);
  color: white;
  text-shadow: 1px 4px 8px black;
  background-attachment: fixed;
  height: 60vh;
  background-size: cover;
}
#formData {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}
#emailHelp {
  color: rgb(194, 189, 189);
}
.btn {
  background-color: #737373;
  border-color: #737373;
  color: white;
}
#button button:hover {
  background-color: rgb(219, 0, 219);
  border-color: rgb(219, 0, 219);
  text-decoration: none;
}
</style>
