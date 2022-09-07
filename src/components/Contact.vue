<template>
  <section id="contact">
    <div class="form ps-4 pe-4 pt-4 pb-4 fw-bold">
      <h2 class="heading fw-bold pb-2">Contact us</h2>
      <form class="form" action="https://formspree.io/f/xjvlagle" method="POST">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" name="name" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
          />
          <div class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">Date</label>
          <input type="date" class="form-control" name="date" />
        </div>
        <div class="mb-3">
          <label class="form-label">Message</label>
          <textarea class="form-control"></textarea>
        </div>
        <div id="btn" class="btn-container d-flex justify-content-center">
          <button type="submit" class="button btn fw-bold">Submit</button>
        </div>
      </form>
    </div>
    <div class="text-container ps-4 pe-4 fw-bold">
      <div>
        <h2 class="heading2 fw-bold">Get in touch</h2>
        <p>
          Feel free to contact us with the information provided below. We will
          try to respond to queries as fast as possible. Happy Gaming!
        </p>
      </div>
      <diV class="communication pb-3">
        <ul>
          <li><i class="fa-solid fa-location-dot pe-2"></i>Cape Town</li>
          <li>
            <a href="tel:065-863-4549"
              ><i class="fa-solid fa-phone pe-2"></i>+27 65 863 4549</a
            >
          </li>
          <li>
            <a href="mailto: tcdgaming@gmail.com">
              <i class="fa-solid fa-envelope pe-2"></i>tcdgaming@gmail.com
            </a>
          </li>
        </ul>
      </diV>
      <div class="socials">
        <ul>
          <li class="icons">
            <a
              href="https://www.instagram.com/therealtcdgaming/"
              target="_blank"
              ><i class="fa-brands fa-instagram"></i
            ></a>
          </li>
          <li class="icons">
            <a href="https://github.com/TristanDaniels/tcd-gaming"
              ><i class="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Contact",
};
</script>
<style scoped>
#contact {
  background-image: url(https://i.postimg.cc/7LFW5ZDg/Contact.jpg);
  color: white;
  text-shadow: 1px 4px 8px black;
  background-attachment: fixed;
  background-size: cover;
}
#contact {
  display: flex;
  flex-direction: row;
  gap: 30px;
}
.heading {
  padding-top: 4.5rem;
}
.heading2 {
  padding-top: 6rem;
}
.form {
  width: 100%;
}
.form-text {
  color: rgb(194, 189, 189);
}
#contact h2 {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.label {
  display: flex;
  flex-direction: column;
  color: black;
  font-family: sans-serif;
}
.submit {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: sans-serif;
  width: 100%;
}
.button {
  background-color: #737373;
  border-color: #737373;
  color: white;
}
#btn button:hover {
  background-color: rgb(219, 0, 219);
  border-color: rgb(219, 0, 219);
  text-decoration: none;
}
.text-container {
  width: 100%;
}
.text-container h2 {
  padding-bottom: 10px;
}
.text-container p {
  color: white;
  font-family: sans-serif;
}
.communication {
  margin-top: 40px;
  font-family: sans-serif;
}
.socials {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: white;
}
a:hover {
  color: rgb(219, 0, 219);
}
.icons {
  display: inline;
  padding: 10px;
  font-size: 30px;
}
.icons i:hover {
  color: rgb(219, 0, 219);
}
.fa-brands {
  color: white;
}
@media screen and (max-width: 700px) {
  #contact {
    display: flex;
    flex-direction: column;
  }
}
</style>
