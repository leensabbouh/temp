

$(document).ready(function(){   

                $('.tab-list li ').on('click',function(){
$(this).addClass('active').siblings().removeClass('active');
var myId= $(this).attr("id");
$(".Leatest-Products .content-list > div").hide();
$("#" + myId + "-content").fadeIn("1000");
                });
  $('.my-list li ').on('click',function(){
                  $(this).addClass('active').siblings().removeClass('active');
                  $(this).next().addClass('circle').siblings().removeClass('circle');
                  var minId = $(this).attr("id");
                  $(".discount-item .content-my-list > div").hide();
                  $("#" + minId + "-content").fadeIn("1000");
                                  });
                                  $('#search-bar').keyup(function(){
                                                var value= $(this).val().toLowerCase();
                                                $(' .item  ').each(function(){
                                                                var search= $(this).text().toLowerCase();
                                                                if(search.indexOf(value) > -1){
                                                                                $(this).show();
                                                                }
                                                                else{
                                                                                $(this).hide();
                                                                }
                                                              
                                                });
                                                
                                              });
                                                 $('#search-bar1').keyup(function(){
                                                var value= $(this).val().toLowerCase();
                                                $('.shop-left-sider .item-shop ').each(function(){
                                                                var search= $(this).text().toLowerCase();
                                                                if(search.indexOf(value) > -1){
                                                                                $(this).show();
                                                                }
                                                                else{
                                                                                $(this).hide();
                                                                }
                                                });
                                              });  
$('.page .head-page .list').on('click', function(){
             $('.page .grid').addClass('left-button');
});
$('.page .head-page .unlist').on('click', function(){
                $('.page .grid').removeClass('left-button');
   });       
   
$('.page .head-page .list1').on('click', function(){
  $('.page .shop-left-sider .shop').addClass('grid-shop');
});
$('.page .head-page .unlist1').on('click', function(){
     $('.page .shop-left-sider .shop').removeClass('grid-shop');
});       
        
 
  $("#rateYo").rateYo({
    rating: 4,
    fullStar: true,
    starWidth: "12px"
  });// Getter
  var normalFill = $("#rateYo").rateYo("option", "fullStar"); //returns true
   
  // Setter
  $("#rateYo").rateYo("option", "fullStar", true); //returns a jQuery Element
    
 
  $("#rateYo1").rateYo({
    rating: 4,
    fullStar: true,
    starWidth: "12px"
  });// Getter
  var normalFill = $("#rateYo1").rateYo("option", "fullStar"); //returns true
   
  // Setter
  $("#rateYo1").rateYo("option", "fullStar", true); //returns a jQuery Element
  
  
     
 
  $("#rateYo2").rateYo({
    rating: 4,
    fullStar: true,
    starWidth: "12px"
  });// Getter
  var normalFill = $("#rateYo2").rateYo("option", "fullStar"); //returns true
   
  // Setter
  $("#rateYo2").rateYo("option", "fullStar", true); //returns a jQuery Element
  
  
     
 
  $("#rateYo3").rateYo({
    rating: 4,
    fullStar: true,
    starWidth: "12px"
  });// Getter
  var normalFill = $("#rateYo3").rateYo("option", "fullStar"); //returns true
   
  // Setter
  $("#rateYo3").rateYo("option", "fullStar", true); //returns a jQuery Element
  
  
     
 
  $("#rateYo4").rateYo({
    rating: 4,
    fullStar: true,
    starWidth: "12px"
  });// Getter
  var normalFill = $("#rateYo4").rateYo("option", "fullStar"); //returns true
   
  // Setter
  $("#rateYo4").rateYo("option", "fullStar", true); //returns a jQuery Element
  
  
     
 
  $("#rateYo5").rateYo({
    rating: 4,
    fullStar: true,
    starWidth: "12px"
  });// Getter
  var normalFill = $("#rateYo5").rateYo("option", "fullStar"); //returns true
   
  // Setter
  $("#rateYo5").rateYo("option", "fullStar", true); //returns a jQuery Element
  
  
     
 
  $("#rateYo6").rateYo({
    rating: 4,
    fullStar: true,
    starWidth: "12px"
  });// Getter
  var normalFill = $("#rateYo6").rateYo("option", "fullStar"); //returns true
   
  // Setter
  $("#rateYo6").rateYo("option", "fullStar", true); //returns a jQuery Element
  
  
     
 
  $("#rateYo7").rateYo({
    rating: 4,
    fullStar: true,
    starWidth: "12px"
  });// Getter
  var normalFill = $("#rateYo7").rateYo("option", "fullStar"); //returns true
   
  // Setter
  $("#rateYo7").rateYo("option", "fullStar", true); //returns a jQuery Element
  
  
  
   
  $('.tab-list-des li ').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    var myId= $(this).attr("id");
    $(" .content-list-des > div").hide();
    $("#" + myId + "-content-des").fadeIn("1000");
                    });

                    update_amount();
                    $('.qty , .price').on('keyup keypress blur chsnge',function(e){
                      update_amount();
                    });
   
   

          

  });                                
  function  update_amount(){
    var sum=0.0;
    $('#mytable> tbody >tr').each(
      function(){
        var qty= $(this).find('.qty').val();
        var price= $(this).find('.price').val();
        var total=(qty * price);
        sum += total;
        $(this).find('.total').text(' ' + total);
      }
    );
    $('.total-all').text(sum);
  } 
var increment;
var decrement;
var plusbutn=$(".cart-qty-plus");
var minbtn=$(".cart-qty-minus");
var increment=plusbutn.click(function(){
  var $n= $(this).parent(".button-container").find(".qty");
  $n.val(Number($n.val())+1);
  update_amount();
});
var decrement=minbtn.click(function(){
  var $n= $(this).parent(".button-container").find(".qty");
 var qtyval = Number($n.val());
 if(qtyval>0){$n.val(qtyval-1);}
  update_amount();
});