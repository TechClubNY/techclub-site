$(document).ready( function(){
    //preloader
    Pace.on("done", function(){
        $(".cover").fadeOut(500);

        //scroll
        window.sr = ScrollReveal();
        sr.reveal('.reveal', {
            duration: 1000,
            scale: 1,
            opacity: 0.2,
            distance: '15px',
            reset: true,
            delay: 250
        }, 250);


    });
    //menu
    $('#toggle').click(function() {
       $(this).toggleClass('active');
       $('#overlay').toggleClass('open');
    });


    //atvimg
    atvImg();
})