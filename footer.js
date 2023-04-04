let x = document.getElementById("footer");
x.innerHTML = `<!--social media icons-->
<section class="social">
  <p>
      <a ><i class="fa-brands fa-facebook"></i></a>
      <a ><i class="fa-brands fa-twitter"></i></a>
      <a ><i class="fa-brands fa-instagram"></i></a>
      <a > <i class="fa-brands fa-linkedin"></i></a>
      <a > <i class="fa-brands fa-youtube"></i></a>
      <a > <i class="fa-brands fa-skype"></i></a>
      <a > <i class="fa-brands fa-google-plus-g"></i></a>

  </p>
</section>



    <!-- Footer  -->

    <footer class="body-spacer">
<div class="container">
  <div class="row">
      <div class="col-md-3">
          <h2>About Us</h2>
          
          <ul>
              <li><a >About Us</a></li>
              <li><a >Delivery</a></li>
              <li><a >Privacy Policy</a></li>
              <li><a >Terms & Condition</a></li>
              <li><a >Custom Links</a></li>
          </ul>
      </div>


      <div class="col-md-3">
          <h2>Customer Service</h2>
         
          <ul>
              <li><a >Contact</a></li>
              <li><a >Returns</a></li>
              <li><a >Site Map</a></li>
              <li><a >Brands</a></li>
              <li><a >Unlimited Links</a></li>
          </ul>
      </div>



      <div class="col-md-3">
          <h2>My Account</h2>
          
          <ul>
              <li><a >My Account</a></li>
              <li><a >Order History</a></li>
              <li><a >Affiliats</a></li>
              <li><a >Newslatter</a></li>
              <li><a >Gifts Certificates</a></li>
          </ul>
      </div>

      <div class="col-md-3">
          <h2>Newsletter</h2>
          
          <p class="para">Stay up to date with news and promotions by signing up for promotions</p>

          <div class="input-container"> <input type="email" placeholder="Your email">
              <button><i class="fa-regular fa-envelope"></i> Send</button>
          </div>
          <p> <input type="checkbox" name="" id=""> I have read and aggry to the <a >Privacy Policy</a></p>
      </div>

    </div>
  </div>
  </footer>
</div>

  <!-- Cart anchor tag with badge -->
<!-- Button to trigger the modal -->
<a href="#cart" class="btn btn-primary cart-anchor position-fixed" data-bs-toggle="modal" data-bs-target="#cartModal">
   
  <div id="view_prod">
   View Product
    <div id="additems" class="totalItem"></div>
  </div>
  </a>
  
  <!-- Modal -->
  <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-end">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="cartModalLabel">Product Cart</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- Cart items and details will go here -->
          <div id="product-add-to-cart"></div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="container-fluid mt-4 copyrightcls">
<div class="row">
  <div class="col-md-6">
  <h4 class="copy-store">Copyright © 2012,Your Store </h4>
 </div>
    <div class="col-md-6">
    <ul class="payment ">
      <li><img src="img/fashion.jpeg" width="100px"></li>
      <li><img src="img/logo-givve.png" width="100px"></li>
      <li><img src="img/phone.jpg" width="100px"></li>
    </ul>
</div>
</div>
</div>
  </div>
      </div>
     `;