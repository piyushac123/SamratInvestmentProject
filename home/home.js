//Hamburger
//$(document).ready(function(){
//    $('#dd').append(screen.width);
//});
$(document).ready(function(){
    var width1=screen.width;
    if(width1<=1198){
        $('#ham2').style.display="block";
    }
    else{
        $('#ham2').style.display="none";
    }
})
$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.menu').toggleClass('menu1');
            $('.item').toggleClass('item1');
                $('.hamburger').toggleClass('active1');
    });
});

// if height of window> 50 display up button
$(document).ready(function(){
    $('.top').fadeOut();
});
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.top').fadeIn();
    } else {
        $('.top').fadeOut();
    }
});

// Know More
function show(val){
    switch(val){
        case 1:
            document.getElementById('p1').style.display="block";
            document.getElementById('l1').style.display="block";
            document.getElementById('m1').style.display="none";
            break;
        case 2:
            document.getElementById('p2').style.display="block";
            document.getElementById('l2').style.display="block";
            document.getElementById('m2').style.display="none";
            break;
        case 3:
            document.getElementById('p3').style.display="block";
            document.getElementById('l3').style.display="block";
            document.getElementById('m3').style.display="none";
            break;
    }
}

function hide(val){
    switch(val){
        case 1:
            document.getElementById('p1').style.display="none";
            document.getElementById('l1').style.display="none";
            document.getElementById('m1').style.display="block";
            break;
        case 2:
            document.getElementById('p2').style.display="none";
            document.getElementById('l2').style.display="none";
            document.getElementById('m2').style.display="block";
            break;
        case 3:
            document.getElementById('p3').style.display="none";
            document.getElementById('l3').style.display="none";
            document.getElementById('m3').style.display="block";
            break;
    }
}

//Scroll to top
$(document).ready(function() {
    $(".top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});

//Feedback
$(document).ready(function() {
  $('.feedback').val('F\ne\ne\nd\nb\na\nc\nk');   
});
$(document).ready(function(){
    $('.feedback').click(function(){
        $('#feed').toggleClass('feedback-form');
        $('#feed').toggleClass('feedback-form1');
    });
});
//make screen blur
/*$(document).ready(function(){
    $('.feedback').click(function(){
       $('html,body').addClass('blur');
        $('.feedback-form').style.display="block";
    });
});*/


// Click anywhere in Window to hide menu list
            window.addEventListener("click", function(){
                document.getElementById("id1").style.display= "none";
                document.getElementById("id2").style.display= "none";
                
                document.getElementById("id4").style.display= "none";
                document.getElementById("id5").style.display= "none";
                document.getElementById("resize").style.marginTop= "115px";
            });
            // Using value display menu list for particular menu
            // If hover on 1 menu first hide menu list of all other menu's
            function func1(value){
                
                switch(value){
                    case 1:
                        document.getElementById("resize").style.marginTop= "85px";
                        document.getElementById("id2").style.display= "none";
                        
                        document.getElementById("id4").style.display= "none";
                        document.getElementById("id5").style.display= "none";
                        document.getElementById("id1").style.display= "block";
                        break;
                    case 2:
                        document.getElementById("resize").style.marginTop= "25px";
                        
                        document.getElementById("id4").style.display= "none";
                        document.getElementById("id5").style.display= "none";
                        document.getElementById("id1").style.display= "none";
                        document.getElementById("id2").style.display= "block";
                        break;
                    case 4:
                        document.getElementById("resize").style.marginTop= "45px";
                        document.getElementById("id5").style.display= "none";
                        document.getElementById("id1").style.display= "none";
                        document.getElementById("id2").style.display= "none";
                        
                        document.getElementById("id4").style.display= "block";
                        break;
                    case 5:
                        document.getElementById("resize").style.marginTop= "65px";
                        document.getElementById("id1").style.display= "none";
                        document.getElementById("id2").style.display= "none";
                        
                        document.getElementById("id4").style.display= "none";
                        document.getElementById("id5").style.display= "block";
                        break;
                    default:
                        document.getElementById("default1").innerHTML="Invalid value.";
                        break;
                }
            }
            /*function closeAll(){
                switch(value){
                    case 1:
                        document.getElementById("id1").style.display= "none";
                        break;
                    case 2:
                        document.getElementById("id2").style.display= "none";
                        break;
                    case 3:
                        
                        break;
                    case 4:
                        document.getElementById("id4").style.display= "none";
                        break;
                    case 5:
                        document.getElementById("id5").style.display= "none";
                        break;
                    default:
                        document.getElementById("default1").innerHTML="Invalid value.";
                        break;
                }
            }*/