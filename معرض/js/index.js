$(document).ready(function () {
    $('.buttons').click(function (e) { 
        
    //   $(this).addClass('active').parent() .siblings().find('a') .removeClass('active'); 
      $('.controls a').removeClass('active');
      $(this).addClass('active');
    
});



$('.buttons').click(function () { 
var value = $(this).attr('data-filter');

if(value == 'all'){
$('.image').show(500);
                }

else{
$('.image').not('#' +value).hide(200);
$('.image').filter('#' +value).show(400);
}

});

$('.gallery').magnificPopup({
    delegate:'.image a',
    type:'image',
    gallery:{
        enabled: true
    }
})
});



