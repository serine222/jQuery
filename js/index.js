 // satrt click
 $(document).ready(function(){  
    $(".icon").click(function(){  
      $(".header .links  ul" ).toggle();
    }); 
 
});  

$(document).ready(function(){  
    $(".feat").click(function(){  
        $(this).fadeOut(); 
    });  
});  
// end click


// start mouseenter
$(document).ready(function(){
  $(".header .links .icon ").mouseenter(function() { 
    $(".header .links .icon span:nth-child(2)").css("width","100%");
  })
  })
  
  
  
  
    $(".header .links .icon").mouseleave(function(){  
        $(".header .links .icon span:nth-child(2)").css("width", "60%");  
    });   
  
  // end Mouseenter



// staet bind
$(document).ready(function(){  
    $(".landing  .intro-text   h1").bind("click", function(){  
        $(".landing .intro-text  p").slideToggle(400); 
        
    });  
}); 
// end bind


// // start blur
// $(document).ready(function(){  
//     $(".blur").blur(function(){  
//         alert("This text box has lost its focus.");  
//     });  
// }); 
// // end blur



// // start focus
// $( ".focus" ).focus(function() {  
//   $( this ).next( "span" ).css( "display", "inline" ).fadeOut( 2000 );  
// });  
// // end focus 








//  start keydown
$(document).ready(function(){  
  $(".input1").keydown(function(){  
      $(".input1").css("background-color", "#2c4755");  
  });  
  $(".input1").keyup(function(){  
      $(".input1").css("background-color", "#f6f6f6");  
  });  
}); 
// end keydown









// // start gallery

// $(document).ready(function () {
//   $('.buttons').click(function (e) { 
      
//   //   $(this).addClass('active').parent() .siblings().find('a') .removeClass('active'); 
//     $('.controls a').removeClass('active');
//     $(this).addClass('active');
  
// });


// $('.buttons').click(function () { 
// var value = $(this).attr('data-filter');

// if(value == 'all'){
// $('.image1').show(500);
//               }

// else{
// $('.image1').not('#' +value).hide(200);
// $('.image1').filter('#' +value).show(400);
// }

// });
// });



// $(document).ready(function () {

// $('.gallery').magnificPopup({
//   delegate:'.image1 a',
//   type:'image1',
//   gallery:{
//       enabled: true
//   }
// })


// });


// // end gallery