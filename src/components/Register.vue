<template>
  <section id="register">
    <h2 class="fw-bold pt-4">Register</h2>
    <form id="formData" class="pt-2 ps-4 pe-4 pb-4 fw-bold">
      <div class="mb-3">
        <label for="fullname" class="form-label">Full name</label>
        <input type="fullname" class="form-control" id="fullname" />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" />
      </div>
      <div class="mb-3">
        <label for="phonenumber" class="form-label">Phone number</label>
        <input type="phonenumber" class="form-control" id="phonenumber" />
      </div>
      <div class="mb-3">
        <label for="joinDate" class="form-label">Join date</label>
        <input type="date" class="form-control" id="joinDate" />
      </div>
      <div id="button" class="mb-3 btn-container d-flex justify-content-center">
        <button type="submit" class="button btn fw-bold">Sign up</button>
      </div>
    </form>
  </section>
</template>
<script>
export default {};
</script>
<style>
#register {
  background-image: url(https://i.postimg.cc/PqqSn9SL/Register.jpg);
  color: white;
  text-shadow: 1px 4px 8px black;
  background-attachment: fixed;
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
