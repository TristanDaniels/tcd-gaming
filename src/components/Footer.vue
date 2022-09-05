<template>
  <div id="footer">
    <!-- Site footer -->
    <footer class="footer fw-bold">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6 class="fw-bold">About US</h6>
            <p class="text-justify">
              This is TCD Gaming. The place that provides you with the best
              games.
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6 class="fw-bold">Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/about">About us</a></li>
              <li>Check out our <a href="/products">Products</a></li>
              <li>
                Don't have an account? Register <a href="/register">here</a>
              </li>
            </ul>
          </div>
          <div class="col-xs-6 col-md-3">
            <h6 class="fw-bold">Contact Us</h6>
            <ul class="footer-links">
              <li>Send us a <a href="/contact">message</a></li>
              <li>
                Send us an <a href="mailto: tcdgaming@gmail.com">email</a>
              </li>
              <li>Give us a <a href="tel:065-863-4549"> call</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; 2022 All Rights Reserved by
              <a href="/about">TCD Gaming</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li>
                <a
                  href="https://za.pinterest.com/therealtcdgaming/"
                  target="_blank"
                  ><i class="fa-brands fa-pinterest"></i
                ></a>
              </li>
              <li>
                <a
                  href="https://github.com/TristanDaniels/tcd-gaming"
                  target="_blank"
                  ><i class="fa-brands fa-github"></i
                ></a>
              </li>
              <li>
                <a href="https://twitter.com/realtcdgaming" target="_blank"
                  ><i class="fa-brands fa-twitter"></i
                ></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/therealtcdgaming/"
                  target="_blank"
                  ><i class="fa-brands fa-instagram"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.footer {
  background-color: #26272b;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}
.footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
.footer hr.small {
  margin: 20px 0;
}
.footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.footer a {
  color: #737373;
}
.footer a:hover {
  color: rgb(219, 0, 219);
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  display: block;
}
.footer-links a {
  color: #737373;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: rgb(219, 0, 219);
  text-decoration: none;
}
.footer-links.inline li {
  display: inline-block;
}
.footer .social-icons {
  text-align: right;
}
.footer .social-icons a {
  width: 40px;
  height: 40px;
  line-height: 40px;
  margin-left: 6px;
  margin-right: 0;
  border-radius: 100%;
  background-color: #33353d;
}
.copyright-text {
  margin: 0;
}
@media (max-width: 991px) {
  .footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .footer {
    padding-bottom: 0;
  }
  .footer .copyright-text,
  .footer .social-icons {
    text-align: center;
  }
}
.social-icons {
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.social-icons li {
  display: inline-block;
  margin-bottom: 4px;
}
.social-icons li.title {
  margin-right: 15px;
  text-transform: uppercase;
  color: #96a2b2;
  font-weight: 700;
  font-size: 13px;
}
.social-icons a {
  background-color: #eceeef;
  color: #818a91;
  font-size: 16px;
  display: inline-block;
  line-height: 44px;
  width: 44px;
  height: 44px;
  text-align: center;
  margin-right: 8px;
  border-radius: 100%;
  -webkit-transition: all 0.2s linear;
  -o-transition: all 0.2s linear;
  transition: all 0.2s linear;
}
.social-icons a:active,
.social-icons a:focus,
.social-icons a:hover {
  color: rgb(0, 0, 0);
  background-color: rgb(219, 0, 219);
}
.social-icons.size-sm a {
  line-height: 34px;
  height: 34px;
  width: 34px;
  font-size: 14px;
}
.social-icons a.linkedin:hover {
  background-color: #3b5998;
}
.social-icons a.codepen:hover {
  background-color: #00aced;
}
.social-icons a.github:hover {
  background-color: #007bb6;
}
.social-icons a.instagram:hover {
  background-color: #ea4c89;
}
@media (max-width: 767px) {
  .social-icons li.title {
    display: block;
    margin-right: 0;
    font-weight: 600;
  }
}
</style>
