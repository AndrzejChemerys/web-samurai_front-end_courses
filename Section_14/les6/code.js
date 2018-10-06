$(document).on('scroll', function() {
    
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
//    console.log(scrollValue);
    const $art2 = $('.art2');
    const art2FromTop = $art2.offset().top;
//    console.log(art1FromTop);
    const art2Height = $art2.outerHeight();
    console.log(art2Height);
    
    if (scrollValue > art2FromTop + art2Height - windowHeight) {
        console.log("jestem");
        $art2.addClass("active");
    }
    
    if(scrollValue < 100) {
        $('article').removeClass('active');
    }
})
