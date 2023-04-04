   
 let y =  document.getElementById("header-js")
 y.innerHTML =  `    <div class="unhideden container-fluid">
<nav class="navbar navbar-expand-lg navbar-light fs-5">
    <!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>-->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-solid fa-house"></i>&nbsp;&nbsp;Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-solid fa-address-card"></i>&nbsp;&nbsp;About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-regular fa-envelope"></i>&nbsp;&nbsp;Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-solid fa-square-question"></i>&nbsp;&nbsp;FAQ</a>
        </li>
      </ul>
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">🇬🇧 English</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-regular fa-dollar-sign"></i>&nbsp;&nbsp;US doller</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-regular fa-user"></i>Main Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-solid fa-truck"></i>&nbsp;&nbsp;Delivery</a>
        </li>
      </ul>
    </div>
  </nav>
  
</div>   <div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" href="#"><i class="fa-solid fa-house"></i>&nbsp;&nbsp;Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><i class="fa-solid fa-address-card"></i>&nbsp;&nbsp;About us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><i class="fa-regular fa-envelope"></i>&nbsp;&nbsp;Contact</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><i class="fa-solid fa-square-question"></i>&nbsp;&nbsp;FAQ</a>
    </li>
  </ul>
  <ul class="navbar-nav mx-auto">
    <li class="nav-item">
      <a class="nav-link" href="#">🇬🇧 English</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><i class="fa-regular fa-dollar-sign"></i>&nbsp;&nbsp;US doller</a>
    </li>
  </ul>
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link" href="#"><i class="fa-regular fa-user"></i>Main Menu</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#"><i class="fa-solid fa-truck"></i>&nbsp;&nbsp;Delivery</a>
    </li>
  </ul>
</div>
</nav>

</div>


<!--creating navbar footer-->
<section class="bg-light navbar_new mt-4">
<div class="container-fluid con">
<div class="row align-items-center top-nav">
  <div class="col-md-2">
    <div class="logo mt-2">
      <h1><b>JOURNAL</b></h1>
    </div>
  </div>
  <div class="col-md-4 mt-3">
    <div class="search-box">
      <div class="input-group">
        <div class="dropdown">
          <button  class="btn  p-3 btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            All
          </button>
        </div>
        <input type="text" class="form-control" placeholder="Search..." id="search-box">
        <div class="input-group-append">
          <button type="submit" class="btn btn-primary"><i class="fa fa-search fa-2x"></i></button>
        </div>
      </div>
      <ul id="search-results"></ul>
    </div>
  </div>
  
  <div class="col-md-3 iconcls mt-4">
    <div class="login-wishlist">
      <a id="login-id">
        
        
        <button class="none mb-3" id="myBtn"><i class="fa-solid fa-user"></i>Login </button>

           <div id="myModal" class="modal_lgsp">
             <div class="modal-content_lgsp">
              <span class="close">&times;</span>
              <p id="login"><form id="login-form">
                <h2>Login</h2>
                <label for="username">Username</label>
                <input type="text" id="login-username" required>
                <label for="password">Password</label>
                <input type="password" id="login-password" required>
                <button type="submit">Login</button>
                </form></p>
               </div>
        </div>

      
    </a>
    <a id="register-id">
      
        
        <button class="none mb-3" id="myBtn2"><i class="fa-solid fa-pencil"></i>Register</button>

           <div id="myModal2" class="modal_lgsp">
             <div class="modal-content_lgsp">
              <span class="close2">&times;</span>
              <p id="register"><form id="register-form">
                <h2>Register</h2>
                <label for="username">Username</label>
                <input type="text" id="username-reg" required>
                <label for="password">Password</label>
                <input type="password" id="password-reg" required>
                <button type="submit">Register</button>
               </form></p>
               </div>
        </div>
    </a>

    <a id="username-display" style="display: none;"></a>
    <button id="logout-button" style="display: none;">Logout</button>
       
        <a id="wishlist-link">
          <i class="fa-regular fa-heart"></i>
          <p>Wishlist</p>
      </a>
      
      <div id="wishlist-modal" class="modal">
          <div class="modal-content">
              <span class="close">&times;</span>
              <h2>Wishlist</h2>
              <p id ="Wishlist-item">Your wishlist items go here.</p>
          </div>
      </div>
               
      <a>
        <i class="fa-solid fa-arrow-right-arrow-left"></i>
        <p>Compare</p>
      </a>
    </div>
  </div>

  <!-- 4.cart and price detils -->

  <div class=" col-md-3 cart-price">
      <a id="item-counter"> $ 0 -</a>
      <div>
          
      </div>
      <div id="currency-name">$</div>
      <div id="total-cart-price">0.00</div>
      <div class="cart-icon">
          <a><div id="additems"></div>
            <a href="#cart" class="btn btn-primary mb-8 btncart" data-bs-toggle="modal" data-bs-target="#cartModal">
                
               <div class="fa-solid fa-cart-shopping"></div>
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
            
              
          </a>
      </div>
  </div>
</div>
</div>
</section>



<div id=" container fixed-bottom-navbar mr-4">
<div class="bottom-navbar-menu-container ">
<!-- 1. menu  -->

<div class="nav-menu-container">
  <div>
    <a class="left-menu-icon-container">
      <div class="hamburgur"><i class="fa-solid fa-bars"></i></div>
      <p>All departments</p>
      <div class="sale-container">Sale</div>
    </a>
  </div>
  <div>
    <a>
      <p>multilevel</p>
    </a>
  </div>

  <div class="mega-menu-container">
    <a>
      <p>Mega Menu</p>
      <div class="new-container">New</div>
    </a>
  </div>
  <div>
    <a>
      <p>custom </p>
    </a>
  </div>
</div>

<!-- 2. contact and blog button  -->

<div class="contact-number-blog-container">
  <a href="">
    <div class="contact-number-container">
      <i class="fa-solid fa-phone-volume mb-3" ></i>
      <p>1.800.555.6789</p>
    </div></a>
  <div class="blog-container">
    <i class="fa-solid fa-blog"></i>
    <p>BLOG</p>
  </div>
</div>
</div>
</div>



</header>


<!-- NAVBAR 1 -->
<!-- NAVBAR-MOBILE-VIEW -->
<div class=" navbar-expand-lg  plr bg-primary hidenav" >

<div class=" d-flex justify-content-between topA py-2">
  <div class="left d-flex">
      <div class="d-flex ">
          <div class="nav-item">
              <a class="nav-link" href="#">
                  <i class="fa-solid fa-user"></i>
                  Login
              </a>
          </div>
          <div class="nav-item">
              
              <a class="nav-link " href="#">
                  <i class="fa-solid fa-pen"></i>
                  Register
              </a>
          </div>
      </div>
  </div>
  <div class="right d-flex ">
      <div class="d-flex">
          <div class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  $ Dollar
              </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">₹ Rupees</a></li>
                  <li><a class="dropdown-item" href="#">€ Pound</a></li>
              </ul>
          </div>
          <div class="nav-item dropdown ">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  🏴 English
              </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">🇯🇵 Japanese</a></li>
                  <li><a class="dropdown-item" href="#">🇮🇳 Hindi</a></li>
              </ul>
          </div>
          
      </div>
  </div>

</div>
</div>

<!-- NAVBAR-MOBILE-VIEW -->

<!-- NAVBAR 2 -->
<div class="container-fluid">
<div class="row">
<div class="col-12">
<nav class="navbar hidenav-2 navbar-expand-lg bg-body-tertiary plr nb2" id="nav2">
  <div class="container-fluid d-flex justify-content-between">
    <div>
      <a class="navbar-brand" href="#" id="journal">Journal</a>
    </div>
    <div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="searchbar"
        aria-controls="searchbar" aria-expanded="false" aria-label="Toggle navigation" order="2">
        <span"><i class="fas fa-search"></i></span>
      </button>
      <div class="collapse navbar-collapse" id="searchbar" id="search_here">
        <form class="d-flex" role="search">
          <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            All
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
          <input class="form-control me-2" type="search" placeholder="Search here..." aria-label="Search">
          <button class="btn btn-primary" type="search"><i class="fas fa-search"></i></button>
        </form>
      </div>
    </div>
    <div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false"
        aria-label="Toggle navigation" order="1">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent1">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="icons">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-user"></i>
              <h6>Login</h6>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fa-solid fa-pencil"></i>
              <h6>Register</h6>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="far fa-heart"></i>
              <h6>Wishlist</h6>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-repeat"></i>
              <h6>Compare</h6>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#cart"
        aria-controls="#cart" aria-expanded="false" aria-label="Toggle navigation" order="1">
        <span><i class="fa-solid fa-cart-shopping"></i></span>
      </button>
    </div>
  </div>
</div>
`