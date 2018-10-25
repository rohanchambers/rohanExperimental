var APP = {
};

// DOM Ready
$(function(){
    APP.gsap();
});

APP.gsap = function() {
    // Single tween
    var element1 = $('#element-1');
    var tween = TweenMax.to(element1, 1, {
        x:500, rotation:360, repeat: 3,repeatDelay:2.5, 
        //scale: 0.5, opacity:0, 
        ease: Power2.easeInOut,
        //onComplete:animationComplete
    });

    // Multiple tweens with timeline
    var tl = new TimelineMax({repeat:3, delay:1});

    // Add 3 tweens that will play in direct succession.
    tl.to("#element-2", 1, {x:750, ease: Bounce.easeOut});
    tl.to("#element-3", 1, {x:700, ease: Bounce.easeOut});
    tl.to("#element-4", 1, {x:650, ease: Bounce.easeOut});

    // Call function on animation complete
    function animationComplete() {
        alert('Animation complete')
    }

    // Controls
    $('#btn-pause').click(function(){
        tween.pause();
    });

    $('#btn-play').click(function(){
        tween.play();
    });

    $('#btn-restart').click(function(){
        tween.restart();
    });
    
};