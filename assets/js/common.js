
  $(".mobile_menu a, .mobile_top_bar a, .cus_menu a ").click(function(){
    var mobile_menu_content_name = $(this).attr("data-action");
    // If go to home then scroll is available -----------
    if(mobile_menu_content_name == "home"){
      $(".mobile_menu_closer").hide();
      $("body").removeClass("body_scroll_lock");
    }else{
      $("body").addClass("body_scroll_lock");
      $(".mobile_menu_closer").show();
    }
     // If go to home then scroll is available -----------

    $(".mobile_menu_content").removeClass("mobile_content_switch");

    
    
    $("."+mobile_menu_content_name).toggleClass("mobile_content_switch");

    //Activing color 
    $(".mobile_menu a, .mobile_top_bar a ").removeClass("mob_menu_item_active");
    $(this).addClass("mob_menu_item_active");
    
  });


  $(".mobile_menu_closer a").click(function(){
    $(".mobile_menu_closer").hide();
  });


// Desktop sliding option 
$("#categoryMenuToggle").on("click", function () {
  $(".all_department_menu_desktop").slideToggle(500);
});

$(".product_image img").click(function(){
  $("#product_modal").modal('show');
})






// Js for modal started 

$(window).on('load', function() {

   $("#preloader ").fadeOut(500); 
  $("body").css({'overflow':'unset'}); 

  $(".locator_btn").click(function(){
    $(".location_modal").modal('show');
  });
  $(".sign_in_btn").click(function(){
    $(".modal").modal('hide');
    $(".sign_in_modal").modal('show');
  });

  $(".sign_up_btn").click(function(){
    $(".modal").modal('hide');
    $(".sign_up_modal_1").modal('show');
  });


  $(".modal_back").click(function(){
    var prev = $(this).attr("data-prev");
          $(this).parent().parent().parent().parent().parent().modal('hide');
          $("."+prev).modal('show');
  })
});

  // Example starter JavaScript for disabling form submissions if there are invalid fields

  (function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {

          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation();
          }

          else{
            // If validated 

          // Remove those line when it comes from back end 
          event.preventDefault()
          event.stopPropagation();
          var next = $(this).find("button:last-child").attr("data-next");
          $(this).parent().parent().parent().modal('hide');
          $("."+next).modal('show');
          }

          form.classList.add('was-validated')
        }, false)
      })
  })()


  // Modal js ended 



  // Script for counter buttons
  $(".static_btn").click(function(){
    $(this).css({"display":"none"});
    $(this).parent().parent().parent().find(".counter_btn").css({"display":"flex","justify-content":"space-between"});
    $(this).parent().parent().parent().find("input").val(1);

});

// counter btn on 
$(".add_btn").click(function(){
    $current_val = parseInt($(this).parent().parent().parent().find("input").val());
   
    $update_val = $current_val + 1;
    $(this).parent().parent().parent().find("input").val($update_val);
});

$(".remove_btn").click(function(){
    $current_val = parseInt($(this).parent().parent().parent().find("input").val());
   
    $update_val = $current_val - 1;
    $(this).parent().parent().parent().find("input").val($update_val);

    if($update_val < 1){
        $(this).parent().parent().parent().find(".counter_btn").css({"display":"none"});
        $(this).parent().parent().parent().find(".static_btn").css({"display":"block"});
    }
});


$(".heart_btn").click(function(){
  $(this).toggleClass("active_side_btn");
});


// script for counter button ended 



// Script for link with tab active ------------------------
// ---------------------------------------------------------

$(".footer_options a").click(function(){
  
    $page_link =$(this).attr('href');
    if($page_link.includes('#')){
    $tab_name =  $page_link.split("#").pop();
    // alert($tab_name);
    localStorage.setItem('tab_name', $tab_name);

    $get_tab_name = localStorage.getItem("tab_name");
    $(".page_linked .tab-pane").removeClass("show active");

    $(".nav-pills button").removeClass("active");
  
    $("#"+ $get_tab_name).addClass("show active");
    $("."+ $get_tab_name).addClass("active");
    
    // console.log("#"+ $get_tab_name);
    var href = "#desktop_header";

          $( 'html, body' ).animate({
            scrollTop: $( href ).offset().top
          }, '300' );
  
  }else{
    localStorage.setItem('tab_name', '');  
  }

});

$(document).ready(function(){
  $page_link = window.location.href;
  if($page_link.includes('#')){
    $tab_name =  $page_link.split("#").pop();
    // alert($tab_name);
    localStorage.setItem('tab_name', $tab_name);

    $get_tab_name = localStorage.getItem("tab_name");
    $(".page_linked .tab-pane").removeClass("show active");

    $(".nav-pills button").removeClass("active");
  
    $("#"+ $get_tab_name).addClass("show active");
    $("."+ $get_tab_name).addClass("active");
    
    // console.log("#"+ $get_tab_name);
    var href = "#desktop_header";

    $( 'html, body' ).animate({
      scrollTop: $( href ).offset().top 
    }, '300' );
  
  }else{
    localStorage.setItem('tab_name', '');  
  }

});

// Script for radio button of location modal 
$(".radio_box_wrapper .location_radio:first-child label").addClass('active_radio');
$(".location_radio label").click(function(){
  $(".location_radio label").removeClass('active_radio');
  $(this).addClass('active_radio');
  
  if($(".active_radio input").val() == "ouside_dhaka"){
    $("#select_area").css({'visibility':'hidden'})
  }else{
    $("#select_area").css({'visibility':'visible'})

  }
  
}) ;



// Code for header search with suggetion started
$(".search_with_suggetion input").keyup(function(){
  $word = $(this).val().length;
  if ($word  > 0){
    $(".suggetion_box").addClass("fade_suggetion");
    console.log("----");

  }else{
    $(".suggetion_box").removeClass("fade_suggetion");
    console.log("Empty");
  }
});

$(".suggetion_box").click(function(){
  $(".nav-search").focus();
});

document.querySelector('.search_with_suggetion input').addEventListener('blur', function(){
  $(".suggetion_box").removeClass("fade_suggetion");

});
// Code for header search with suggetion ended


// Script for confirm order checkout action 
const checkBox = $(".order_btn_wrapper input");
const target = checkBox.parent().parent().find(".btn");
target.addClass('disabled');


checkBox.click(function(){
  if(target.attr('class') == "btn btn-primary disabled"){
    target.removeClass('disabled');
  }else{
    target.addClass('disabled');
  }
});


// Code for activing cart bag with click ---- 
$(".desktop_cart_btn").click(function(){
 $(".desktop_cart_box .desktop_cart").toggleClass("active_cart_bag");
 setTimeout(() => {
  $("body").addClass("cart_open");
 }, 100);
})

$('.desktop_cart').hover(function() {
  $("body").removeClass("cart_open");
}, function() {
  $("body").addClass("cart_open");
})

$("body").click(function(){
  if($("body").hasClass("cart_open")){

    $(".desktop_cart").removeClass("active_cart_bag");
    setTimeout(() => {
      $("body").removeClass("cart_open");
    }, 100);
  }
});

// Code for activing cart bag with click ended ---- 

