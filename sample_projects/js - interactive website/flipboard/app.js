var main = function() {
    $(".dropdown-toggle").click(function() {
        $(".dropdown-menu").toggle();    
    });
    
    $('.arrow-next').click(function() {
        var currentSlide = $('.active-slide');
        var nextSlide = $('.active-slide').next();
       
        //if (nextSlide.length() === 0) {
        //    nextSlide = $('.slider').first;
        //};
        
        currentSlide.fadeOut(600);
        currentSlide.removeClass('active-slide');
        
        nextSlide.fadeIn(600);
        nextSlide.addClass('active-slide');        
        
        var currentDot = $('.active-dot');
        var nextDot = currentDot.next();
        currentDot.removeClass('active-dot');        
        nextDot.addClass('active-dot');
        
        //if (nextDot.length == 0){
            nextDot = $('.dot').first();
        //};
    });
    
    $('.arrow-prev').click(function() {
        var currentSlide = $('.active-slide');
        var prevSlide = $('.active-slide').prev();
       
        //if (prevSlide.length() === 0) {
        //    prevSlide = $('.slider').last;
        //};
        
        currentSlide.fadeOut(600);
        currentSlide.removeClass('active-slide');
        
        prevSlide.fadeIn(600);
        prevSlide.addClass('active-slide');        
        
        var currentDot = $('.active-dot');
        var prevDot = currentDot.prev();
        currentDot.removeClass('active-dot');        
        prevDot.addClass('active-dot');
        
        //if (prevDot.length == 0){
        //    prevDot = $('.dot').last();
        //};
    });
};

$(document).ready(main);
