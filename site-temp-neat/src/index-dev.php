<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Site template Neat 2.1 | Scroll magic 2.0.5 | GSAP 2</title>
    <meta name="title" content="">
    <meta name="author" content="">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="" type="image/x-icon">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
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
</head>

<body>
    <!-- <div class="spacer s0"></div> -->
    <div id="parallax1" class="parallaxParent">
        <div class="image"></div>
        <div id="element-1" class="element">
            <h2>Lorem Ipsum (Slide 1)</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus libero nec nibh rhoncus, nec hendrerit turpis cursus. Nullam mollis tempus purus, eu rhoncus lacus accumsan sit amet. </p>
            <a href="#parallax2">Next slide</a>
        </div>        
    </div>

    <div id="parallax2" class="parallaxParent">
        <div class="content">
            <h2>Lorem Ipsum  (Slide 2)</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus libero nec nibh rhoncus, nec hendrerit turpis cursus.</p>
            <a href="#parallax3">Next slide</a>
        </div>   
        <div class="image"></div>

        <div id="element-2" class="element">
            <h2>Lorem Ipsum 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus libero nec nibh rhoncus, nec hendrerit turpis cursus.</p>
        </div>   

        <div id="element-3" class="element">
            <h2>Lorem Ipsum 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus libero nec nibh rhoncus, nec hendrerit turpis cursus.</p>
        </div>   

        <div id="element-4" class="element">
            <h2>Lorem Ipsum 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus libero nec nibh rhoncus, nec hendrerit turpis cursus.</p>
        </div>                           
    </div>

    <div id="parallax3" class="parallaxParent">    
        <div id="element-5" class="element">
            <h2>Lorem Ipsum (Slide 3)</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus libero nec nibh rhoncus, nec hendrerit turpis cursus.</p>
            <span class="cta-element-8">Next slide</span>
        </div>   

        <div id="element-6" class="element"></div>           
        <div class="image"></div>
    </div>

    <div id="parallax4" class="parallaxParent">
        <div id="element-7" class="element">
            <h2>(Slide 4)</h2>
        </div>  

        <div id="element-8" class="element">
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus libero nec nibh rhoncus, nec hendrerit turpis cursus. Nullam mollis tempus purus, eu rhoncus lacus accumsan sit amet.</p>
            <span class="cta-element-9">Next slide</span>
        </div>  

        <div id="element-9" class="element">
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus libero nec nibh rhoncus, nec hendrerit turpis cursus. Nullam mollis tempus purus, eu rhoncus lacus accumsan sit amet.</p>
            <span class="cta-element-10">Next slide</span>
        </div>  

        <div id="element-10" class="element">
            <h2>Lorem Ipsum</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus libero nec nibh rhoncus, nec hendrerit turpis cursus. Nullam mollis tempus purus, eu rhoncus lacus accumsan sit amet.</p>
            <a href="#parallax5">Next slide</a>
        </div>                       

        <div class="image"></div>
    </div>

    <div id="parallax5" class="parallaxParent">
        <div id="element-11" class="element"></div>  
        <div id="element-12" class="element">
            <h2>Lorem ipsum (Slide 5)</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus libero nec nibh rhoncus, nec hendrerit turpis cursus. Nullam mollis tempus purus, eu rhoncus lacus accumsan sit amet.</p>
            <a href="#parallax6">Next slide</a>     
        </div>  
        <div id="element-13" class="element"></div>                
        <div id="element-14" class="element"></div>                
        <div id="element-15" class="element"></div> 
        <div id="element-16" class="element"></div> 
        <div id="element-17" class="element"></div>         
        
        <div class="image"></div>                                
    </div>

    <div id="parallax6" class="parallaxParent">
        <div class="content">
            <h2>Lorem ipsum (Slide 6)</h2>
            <p>Reveal Background Video Repeat</p>
            <a href="#parallax1">Back to top</a>
        </div>               
        <div class="image"></div>
    </div>

    <div id="parallax7" class="parallaxParent">
        <div class="content">
            <h2>Lorem ipsum (Slide 7)</h2>
            <p>Experimental section</p>
            <a href="#parallax1">Back to top</a>
        </div>               
        <div class="image"></div>
    </div>


    <footer>Protoype parallax | Slam Dunk Digital 2018<!-- site by Slam Dunk Digital --></footer>
    <!--(if target dev)><!-->
    <script src="../bower_components/jquery/dist/jquery.js"></script>
    <script src="../bower_components/gsap/src/minified/TweenMax.min.js"></script>
    <script src="../bower_components/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js"></script>
    <script src="../bower_components/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"></script>
    <script src="../bower_components/gsap/src/minified/plugins/CSSPlugin.min.js"></script>
    <script src="../bower_components/gsap/src/minified/plugins/ScrollToPlugin.min.js"></script>    
    <script src="../bower_components/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js"></script>
    <script src="../assets/js/main.js"></script>

    <!--<!(endif)-->
    <!--(if target dist)>
    <script src="../assets/js/compiled.min.js?{{rlsdate}}"></script>
    <!(endif)-->
</body>
</html>