<template>
  <form id="formData" class="mt-4 ps-4 pe-4 mb-4">
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
    <div class="mb-3 btn-container d-flex justify-content-center"></div>
    <button type="submit" class="btn btn-primary mb-3">Sign up</button>
  </form>
</template>
<script>
export default {};
</script>
<style></style>
