//jQuery(document).ready(function(){
//    init();
//
//    jQuery('#settings').click(function(){
//        if(!jQuery('.settings-menu').hasClass('see')){
//            jQuery('.settings-menu').addClass('see');
//        } else{
//            jQuery('.settings-menu').removeClass('see');
//        }
//    });
//
//    jQuery('#search').click(function(){
//        if(!jQuery('.search-holder').hasClass('see')){
//            jQuery('.search-holder').addClass('see');
//        } else{
//            jQuery('.search-holder').removeClass('see');
//        }
//    });
//
//    jQuery('.personal').click(function(){
//        if(!jQuery(this).hasClass('.active')){
//            animateSlider(0);
//        }
//    });
//
//    jQuery('.company').click(function(){
//        if(!jQuery(this).hasClass('.active')){
//            animateSlider(1);
//        }
//    });
//
//    jQuery('html').click(function(){
//        jQuery('.settings-menu').removeClass('see');
//        jQuery('.search-holder').removeClass('see');
//    });
//
//    $('.search-holder, .settings-menu, #search, #settings').click(function(event){
//        event.stopPropagation();
//    });
//});
//
//function init(){
//    animateSlider(localStorage.getItem('steadlly-selected'));
//}
//
//
//function animateSlider(slideTo){
//    if(slideTo == 1){
//        jQuery('.slide').animate({left:'50%'}, function(){
//            jQuery('.personal').removeClass('active');
//            jQuery('.company').addClass('active');
//            localStorage.setItem('steadlly-selected',0);
//        });
//    } else if(slideTo == 0){
//        jQuery('.slide').animate({left:'0%'}, function(){
//            jQuery('.company').removeClass('active');
//            jQuery('.personal').addClass('active');
//            localStorage.setItem('steadlly-selected',1);
//        });
//    }
//}

$(document).ready(function(){
    var t_pre = "Steadlly :: ";
    var title = $('title').html();
    // Index page
    if(title == t_pre+"Index") {
        (function() {
            

        })();
    // Add Employee
    } else if(title == t_pre+"Add employee") {
        (function() {




        })();
    }




})
