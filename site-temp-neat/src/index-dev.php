<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Site template Neat Smooth Sate - Home</title>
    <meta name="title" content="">
    <meta name="author" content="">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
    <!--(if target dev)><!-->
    <link rel="stylesheet" href="../bower_components/normalize-css/normalize.css">
    <link rel="stylesheet" href="../assets/css/styles.css">
    <!--<!(endif)-->
    <!--(if target dist)>
    <link rel="stylesheet" href="../assets/css/compiled.min.css?{{rlsdate}}">
    <!(endif)-->
    <!--(if target dev)><!-->
    <script src="../assets/js/vendor/modernizr-custom.js"></script>
    <!--<!(endif)-->

    <!-- Open graph tags -->
    <meta property="og:image"           content="">
    <meta property="og:title"           content="">
    <meta property="og:description"     content="">
    <meta property="og:url"             content="">
    <meta property="og:image:width"     content="600">
    <meta property="og:image:height"    content="600">
    <meta property="og:image:type"      content="image/jpg">
    <meta property="fb:app_id"          content="">

    <meta name="twitter:card"           content="summary">
    <meta name="twitter:site"           content="">
    <meta name="twitter:title"          content="">
    <meta name="twitter:description"    content="">
    <meta name="twitter:creator"        content="">
    <meta name="twitter:image:src"      content="">
    <meta name="twitter:domain"         content="">
</head>

<body>
    <div id="main" class="page">
        <a href="index-dev.php">Home</a>
        <a href="about-dev.php">About</a>
        <a href="services-dev.php">Services</a>

        <!-- The overlay -->
        <div id="myNav" class="overlay">
            <!-- Overlay content -->
            <div class="overlay-content">
                <a href="about-dev.php">About</a>
                <a href="services-dev.php">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        </div>   
        
        <div class="scene scene--fadeinleft">
            <div class="container">
                <button class="hamburger hamburger--squeeze" type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>

            <section id="section-1" class="container">
                <article id="element-1">Third column</article>
                <article id="element-2">Third column</article>
                <article id="element-3">Third column</article>
            </section>

            <section id="section-2" class="container">
                <article id="element-4">Third column</article>
                <article id="element-5">Third column</article>
            </section>

            <section id="section-3">
                <div class="container">
                    <article id="element-6">Third column</article>
                </div>
            </section>

            <section id="section-4">
                <div class="full-container">
                    <article id="element-7">
                        <div class="container">
                            <div>Third column</div>
                        </div>
                    </article>
                    <article id="element-8"></article>
                </div>
            </section>

            <section id="section-5">
                <div class="full-container">
                    <article id="element-8"></article>
                    <article id="element-7">
                        <div class="container">
                            <div>Third column</div>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    </div>
    <!--(if target dev)><!-->
    <script src="../bower_components/jquery/dist/jquery.js"></script>
    <script src="../assets/js/vendor/jquery.smoothState.min.js"></script>
    <script src="../assets/js/main.js"></script>
    <!--<!(endif)-->
    <!--(if target dist)>
    <script src="../assets/js/compiled.min.js?{{rlsdate}}"></script>
    <!(endif)-->
</body>
</html>