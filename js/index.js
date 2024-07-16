$(function(){
    
    $(window).scroll(function(){
       $('header').css({
         'background-color' : '#f986bd'
       })
       $('header .logo a').addClass('on')
       $('header .menu > li > a ').css({
         'color' : '#fff'
       })
       $('header .search a').addClass('on')
       $('header .idmenu a').addClass('on')

       if($(window).scrollTop() == '0'){
        $('header').css({
            'background-color' : 'transparent'
          })
        $('header .logo a').removeClass('on')
        $('header .menu > li > a ').css({
            'color' : '#37271f'
        })
        $('header .search a').removeClass('on')
        $('header .idmenu a').removeClass('on')
        
       }
    })
    $('header .topmenu .topmenuleft .nav .menu > li').hover(function(){
        $('header').toggleClass('on')
    })




    //main 버튼
    $('.mainbtn a').click(function(e){
        e.preventDefault()
        $(this).toggleClass('on')
        $('.mainboxlist li').toggleClass('on')
    })

    //newitem
    var slider = $('.newcontainer').bxSlider({
      speed: 2000,
      infiniteLoop: true,
      auto: true,
      pager: true,
      onSlideAfter: function($slideElement, oldIndex, newIndex) {
        if (newIndex === slider.getSlideCount() - 1) {
          setTimeout(function() {
            slider.goToSlide(0);
          }, 2000); 
          slider.stopAuto();
          setTimeout(function() {
            slider.startAuto();
          }, 2000);
        }
      }
    });
    

    $('.family button').click(function(){
        $('.family .familylist').slideToggle()
        $('.footerfoot .footright .family button').css({
            'background': "#fff url('../img/footer/icon_select2.png') no-repeat right 19px center"
        })
    })
});