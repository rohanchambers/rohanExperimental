<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Phone Req | Unlock</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,600,300' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/animations.css"/>
    <link rel="stylesheet" href="css/styles.css"/>
    <link rel="stylesheet" type="text/css" href="css/keyframes.css" data-skrollr-stylesheet />    
    <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
</head>
<body id="page-repair" class="iphone-repair">
<!--[if lt IE 7]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->
    
<header id="header">
    <div class="container">    
        <div id="logo"><a href="index.php">Phone Resq</a></div>
        <nav id="nav-main" class="nav-global">
            <ul>
                <li id="dropdown"><a href="/#services">Services<i class="fa fa-caret-down fa-lg"></i></a>
                    <ul id="subnav">
                        <li><a href="iphone-repair.php">iPhone repair</a><span></span></li>
                        <li><a href="ipad-repair.php">iPad repair</a><span></span></li>
                        <li><a href="#">iPod repair</a><span></span></li>
                        <li><a href="#">Android repair</a><span></span></li>
                        <li><a href="#">Laptop &amp; Desktop repair</a><span></span></li>
                        <li><a href="#">Cell Phone Unlocks</a><span></span></li>
                    </ul>
                </li>
                <li><a href="/#about">About</a></li>
                <li id="nav-sell"><a href="/#sell">Sell your device</a></li>
                <li><a href="/#contact">Contact us</a></li>
            </ul>
        </nav>
        <nav id="social-links" class="nav-global">
            <ul>
                <li><a href="#" title="Facebook share"><i class="fa fa-facebook fa-lg btn-animate"></i></a></li>
                <li><a href="#" title="Twitter share"><i class="fa fa-twitter fa-lg btn-animate"></i></a></li>
                <li><a href="#" title="Instagram share"><i class="fa fa-instagram fa-lg btn-animate"></i></a></li>
                <li><a href="#" title="RSS share"><i class="fa fa-rss fa-lg btn-animate"></i></a></li>
            </ul>
        </nav>
        <nav id="nav-cta" class="nav-global">
            <ul>
                <li><a href="#contact" class="btn-nav btn-animate"><i class="fa fa-wrench fa-lg"></i>Request repair</a></li>
                <li><a href="tel:9043100059" class="btn-nav btn-animate"><i class="fa fa-phone fa-lg"></i>(904) 310-0059</a></li>
            </ul>
        </nav>
        <div id="nav-hamburger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>

</header><!-- End of Header -->


<!-- iPhone repair -->
<section id="repair">
    <div class="container">
        <div class="row row-intro">
            <header>
                <article class="intro">
                    <h1>Cellphone Unlock<span></span></h1>
                    <p>If you have an Apple or Android device and you want to switch carriers or providers, you can with our special jailbreaking services. For example, you’ll be able to use your ATT-based iPhone with a Verizon, Sprint or T-Mobile account. <a href="#contact">Contact us</a> today for a free estimate! Or stop by our store for more information.</p>
                </article>
            </header>
        </div>

        <div class="row">            
            <div class="two-col">
                <form id="filter-model">
                    <div>
                        <select class="filter-model btn-animate">
                            <option value="reset">Filter model</option>
                            <option value="iphone4">iPhone 4</option>
                            <option value="iphone4s">iPhone 4s</option>
                            <option value="iphone5">iPhone 5</option>
                            <option value="iphone5c">iPhone 5s</option>
                            <option value="iphone5c">iPhone 5c</option>
                            <option value="iphone6">iPhone 6</option>
                            <option value="iphone6s">iPhone 6s</option>
                        </select>
                        <i class="fa fa-caret-down fa-lg"></i>
                    </div>

                    <div>
                        <select class="filter-model btn-animate" name="menu" onChange="top.location.href=this.options[this.selectedIndex].value;" value="GO">
                            <option>Change brand</option>
                            <option value="iphone-repair.php">iPhone</option>
                            <option value="ipad-repair.php">iPad</option>
                            <option>iPod</option>
                            <option>Android</option>
                            <option>Laptop</option>
                            <option>Unlocks</option>
                        </select>
                        <i class="fa fa-caret-down fa-lg"></i>
                    </div>
                </form>         
            </div>
            <div class="two-col"></div>
        </div>
            
        <div class="row-container">    
            <div class="row animatedParent">
                <div class="two-col filter iphone6s">
                    <div class="img-holder animated fadeInLeft"><img src="img/page-repair/unlock/unlock.png" alt="Cellphone unlock" /></div>
                    <h2>Cellphone unlock</h2>
                    <p>Prices are coming soon but please <a href="#contact">contact us</a> for a quote!</p>
                </div>
            </div>
        </div><!-- End of row container -->
    </div>
</div>    
</section><!-- End of Repair section-->


<section id="contact">
    <div class="container">
        <div class="row">
            <article class="intro">
                <header>
                    <h1>Contact us<span></span></h1>
                </header>
                <?php
                    //if "email" variable is filled out, send email
                      if (isset($_REQUEST['email']))  {
                      
                      //Email information
                      $admin_email = "rohanchambers888@gmail.com";
                      $email = $_REQUEST['email'];
                      $subject = "Phone Resq. message: " . $_REQUEST['subject'];
                      $comment = $_REQUEST['comment'].$phone;
                      $phone = $_REQUEST['phone'];
                      $comment_phone = $comment . "\n\n Phone: ".$phone;

                      //send email
                      mail($admin_email, "$subject", "Comment: \n" . $comment_phone, "From:" . $email);
                      
                      //Email response
                      echo "<p>Thank you, your message has been sent successfully! We will be in touch with your very soon.</p>";
                      }
                      
                      //if "email" variable is not filled out, display the form
                      else  {
                    ?>

                    <form id="contact-form" method="post" action="index.php#contact">
                        <fieldset>
                            <legend>Please fill in all the fields below to send us a message online.</legend>
                            <p>
                                <input type="text" placeholder="Name" name="subject" id="resqFullname" required>
                                <span></span>
                                <label for="resqFullname"></label>
                            </p>
                            <p>
                                <input type="email" placeholder="Email" name="email" id="resqEmail" required>
                                <span></span>
                                <label for="resqEmail"></label>
                            </p>
                            <p>
                                <input type="numbers" placeholder="Phone number (optional)" name="phone" id="resqPhone">
                                <span></span>
                                <label for="resqPhone"></label>
                            </p>        
                            <p id="textarea">
                                <textarea placeholder="Your message" name="comment" id="resqMessage" required></textarea>
                                <span></span>
                                <label for="resqMessage"></label>
                            </p>
                            <p>
                                <button type="submit" id="btn-submit" class="btn-animate">Send</button>
                            </p>
                        </fieldset>       
                    </form>
                <?php
                  }
                ?>
            </article>
        </div>
                
        <div class="row"> 
            <hr />  
            <div id="google-map" class="two-col">
                <div id="map"></div>
            </div>

            <div id="get-in-touch" class="two-col">
                <article class="intro">
                    <h1>Get in touch<span></span></h1>
                
                    <p>Contact us today! Stop by the store during normal business hours or call us at<br> 
                    (904) 310-0059.</p>

                    <p>We look forward to hearing from you!</p>

                    <p>1001 Atlantic Avenue,<br> 
                    Suite B,<br> 
                    Fernandina Beach,<br>
                    Florida, 32034</p>

                    <p>Email: <a href="mailto:info@phoneresq.com">info@phoneresq.com</a><br>
                    Hours: 10:00AM to 5:00 PM <br>
                    (Monday-Saturday)</p>
                </article>    
            </div>
        </div>            
    </div>
    
</section><!-- End of contact -->


<section id="clients">
    <div class="container">
        <div class="row">
            <ul id="client-list">
                <li class="client"><img src="img/clients/samsung.png" alt="Samsung" /></li>
                <li class="client"><img src="img/clients/apple.png" alt="Apple" /></li>
                <li class="client"><img src="img/clients/htc.png" alt="HTC" /></li>
                <li class="client"><img src="img/clients/android.png" alt="Android" /></li>
                <li class="client"><img src="img/clients/motorola.png" alt="Motorola" /></li>
                <li class="client"><img src="img/clients/blackberry.png" alt="Blackberry" /></li>
            </ul>
        </div>
    </div>
</section><!-- End of clients -->

<footer>
    <div class="container">
        <div class="row">
            <div id="company-details" class="two-col">
                <a href="/home.php"><img src="img/footer/logo.png" alt="Phone Resq." /></a>
                <p>(904) 310-0059</p>
                <p><a href="mailto:info@phoneresq.com">info@phoneresq.com</a></p>
                <p>1001 Atlantic Avenue Suite<br>
                Fernandina Beach Florida<br>
                32034</p>
                
                <nav id="footer-social-links" class="nav-global">
                    <ul>
                        <li><a href="#" title="Facebook share"><i class="fa fa-facebook fa-lg btn-animate"></i></a></li>
                        <li><a href="#" title="Twitter share"><i class="fa fa-twitter fa-lg btn-animate"></i></a></li>
                        <li><a href="#" title="Instagram share"><i class="fa fa-instagram fa-lg btn-animate"></i></a></li>
                    </ul>
                </nav>
            </div>
            <div id="footer-links" class="two-col">
                <a href="#header" id="back-top"></a>
                <p><a href="#services">Services</a></p> 
                <p><a href="#">iPhone Repair</a></p>
                <p><a href="#">iPod Repair</a></p>
                <p><a href="#">iPad Repair</a></p>
                <p><a href="#">Android Repair</a></p>
                <p id="copyright">&copy;2016 Phone Resq. All Rights Reserved.</p>
            </div>
        </div>
    </div>    
</footer> 
<!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script> -->
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.0.min.js"><\/script>')</script>
<!-- Replace the API Key with your own -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBAnlujjc073E2Ku0_K_HyCtbRDC-HjFgk&callback=initMap" async defer></script>
<script src="js/vendor/css3-animate-it.js"></script>
<script src="js/vendor/jquery.validate.min.js"></script>
<script src="js/vendor/skrollr.stylesheets.min.js"></script>
<script src="js/vendor/skrollr.min.js"></script>
<script src="js/main.js"></script>

<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<script>
    // (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
    // function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new    ;
    // e=o.createElement(i);r=o.getElementsByTagName(i)[0];
    // e.src='//www.google-analytics.com/analytics.js';
    // r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
    // ga('create','UA-XXXXX-X');ga('send','pageview');
</script>
</body>
</html>