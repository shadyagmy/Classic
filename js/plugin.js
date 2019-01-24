/*global $, alert, console*/
$(document).ready(function () {
    "use strict";


// NICE SCROLL
    $("body").niceScroll({
        cursorcolor : '#19AC92',
        zindex:99999999,
        cursorborder : "none"
    }).resize();

    $("body").mouseover(function() {
    $("body").getNiceScroll().resize();
    });


    var header = $(".header"); 
    header.height($(window).height());
    
    $(window).on("resize", function () {
        header.height($(window).height()); 

        $(".my-slider").each(function () {             
            $(this).css("paddingTop", (($(window).height() - $(".my-slider").height()) / 2) - 50);              
        });
    });
    

    $(".links ul li a").on("click", function () { 
        $(this).parent().addClass("active").siblings().removeClass("active");   
    });
    




        
    // make the header slider in middle of screen 
    $(".my-slider").each(function () {
                        
        $(this).css("paddingTop", (($(window).height() - $(".my-slider").height()) / 2) - 50);
                        
    });
    




    // make smooth scroll to about section
    $(".links ul li a").on("click", function () {  
        $("html,body").animate({ 
            scrollTop : ($("#" + $(this).data('value')).offset().top - 20)
        }, 1000);
  
    });
    




    // start work ovelay on image hovering 
    $(".our-team .box").hover(function () {
        $(this).find(".over-lay").fadeIn("fast"); 
    }, function () {  
        $(this).find(".over-lay").fadeOut("fast");
    });
    
    



    // my auto slider code
    (function autoSlider() {
        
        $(".test-overlay .active").each(function () {
           
            if (!$(this).is(':last-child')) {
               
                $(this).delay(3000).fadeOut(1000, function () {
                   
                    $(this).removeClass("active").next().addClass('active').fadeIn();
                   
                    autoSlider();
                });
                
            } else {
               
                $(this).delay(3000).fadeOut(1000, function () {
                   
                    $(this).removeClass('active');
                   
                    $('.test-overlay .main:eq(0)').addClass('active').fadeIn();
                   
                    autoSlider();
                });
            }
           
            
        });
        
    }());
    






     // start our projects overlay hover
    
    $(".projects .gallery .row > div").hover(function () {  
        $(this).find(".over").fadeIn();  
    }, function () {
    
        $(this).find(".over").fadeOut();
    });




    
    // trigger mixitup
    
    $('#Container').mixItUp();
    



    //adjust shuffle links
    
    $(".shuffle li").on("click", function () {
        $(this).addClass("selected").siblings().removeClass("selected");
    });
    


 

    
    
   
    
});


var sliderBox = document.querySelector('.bxslider');
var sliderHeading = document.querySelectorAll('.my-slider .bxslider h2');
var sliderParagraphs = document.querySelectorAll('.my-slider .bxslider p');
console.log(sliderHeading)

var i = 0 ;

$('.arrow__right').on('click',function(){
    if (i >2){
      i = -1; 
    }
    i++;
    console.log(i);
    for (let x = 0; x <sliderHeading.length; x ++ ){
         sliderHeading[x].classList.remove('moveDown');
         sliderParagraphs[x].classList.remove('moveUp');

    }
    sliderHeading[i].classList.add('moveDown');
     sliderParagraphs[i].classList.add('moveUp');
    sliderBox.classList = 'bxslider';
    sliderBox.classList.add('translate_'+i);
});


$('.arrow__left').on('click',function(){
    if (i == 0){

    }

    else{
        i--;
       for (let x = 0; x <sliderHeading.length; x ++ ){
         sliderHeading[x].classList.remove('moveDown');
         sliderParagraphs[x].classList.remove('moveUp');
        }
        sliderHeading[i].classList.add('moveDown');
         sliderParagraphs[i].classList.add('moveUp');
        sliderBox.classList = 'bxslider';
        sliderBox.classList.add('translate_'+i);
    }
     $("html,body").niceScroll({
        cursorcolor : '#19AC92',
        zindex:99999999,
        cursorborder : "none"
    });

});






