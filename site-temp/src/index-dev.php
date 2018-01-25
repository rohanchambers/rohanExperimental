<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Site template</title>
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
    <!-- <script src="../assets/js/vendor/modernizr-custom.js"></script> -->
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
    <section id="infinite-scroll">
        <div class="container">
                <div id="test"></div>
                <ul class="grid"></ul>
                <div id="instafeed"></div>
                <button id="load-more">Load more</button>
            </div>
        </div><!-- End of container -->
    </section>
    <!--(if target dev)><!-->
    <script src="../bower_components/jquery/dist/jquery.js"></script>
    <script src="../assets/js/vendor/lightbox.min.js"></script>
    <!-- <script src="../assets/js/vendor/instafeed.min.js"></script> -->
    <script src="../bower_components/isotope/dist/isotope.pkgd.min.js"></script>
    <script src="https://unpkg.com/imagesloaded@4.1/imagesloaded.pkgd.min.js"></script>
    <script src="../bower_components/mustache.js/mustache.min.js"></script>
    <script src="../assets/js/main.js"></script>
    <!--<!(endif)-->
    <!--(if target dist)>
    <script src="../assets/js/compiled.min.js?{{rlsdate}}"></script>
    <!(endif)-->
</body>
</html>