$(document).ready( function(){

    //menu
    $('#toggle').click(function() {
       $(this).toggleClass('active');
       $('#overlay').toggleClass('open');
    });

    //scroll
    window.sr = ScrollReveal();
    sr.reveal('.reveal', {
        duration: 1000,
        scale: 1,
        opacity: 0.2,
        distance: '15px',
        reset: true,
    }, 250);
})