

$( document ).ready(function() {


//effects after page loading

  $('.flex-heading').fadeIn(2000);
  fade('#about-us-1',1000);
  fadeWithMove('#about .section-head:first');

  $('.offert-link').on('click',function(event) {
    event.preventDefault();
    $('.mobile-menu').removeClass('show');
    scrollToPos('#offert');
  })
  $('#offert-btn').on('click',function(event) {
    event.preventDefault();
    scrollToPos('#offert');
  })
  $('.about-link').on('click',function(event) {
    event.preventDefault();
    scrollToPos('#about');
  })
  $('.opinions-link').on('click',function(event) {
    event.preventDefault();
    scrollToPos('#quotes');
  })
  $('.contact-link').on('click',function(event) {
    event.preventDefault();
    scrollToPos('footer');
  })
  $('#contact-btn').on('click',function(event) {
    event.preventDefault();
    scrollToPos('footer');
  })

  $('#footer-offert-link').on('click',function(event) {
    event.preventDefault();
    scrollToPos('#offert');
  })
  $('#footer-about-link').on('click',function(event) {
    event.preventDefault();
    scrollToPos('#about');
  })
  $('#footer-opinions-link').on('click',function(event) {
    event.preventDefault();
    scrollToPos('#quotes');
  })
  $('#footer-contact-link').on('click',function(event) {
    event.preventDefault();
    scrollToPos('footer');
  })

  $('.hamburger').on('click',function(e) {
    e.preventDefault();
    $('body').css({overflow:'hidden'})
    $('.hamburger').each(function(i) {
      $(this).eq(0).toggleClass('ham-1-span');
      $(this).eq(1).toggleClass('ham-2-span');
      $(this).eq(2).toggleClass('ham-3-span');
    })


    $('.mobile-menu').toggleClass('show');

  })



// scrolling
    $(window).scroll(function() {
      var hScroll = $(this).scrollTop();

      if(hScroll > $('#about').offset().top) {
        $('.header-nav-fixed').addClass('visible');
      } else {
        $('.header-nav-fixed').removeClass('visible');
      }
      if(hScroll>($('.boxes-container').offset().top-($(window).height()*0.7))) {
        fadeWithMove('#about .section-head:last')
      }

      if(hScroll>($('.boxes-container').offset().top-($(window).height()*0.7))) {
        var i;
        for (i = 0; i < 3; i++) {
          (function(i){
            setTimeout(function() {
              $('.boxes-container .box').eq(i).animate({
                opacity : "1",
                top: 0
              });
            },300*i);
          })(i);
        }
      };

      if(hScroll>($('#counters').offset().top-($(window).height()*0.7))) {
        $('.counter-box').fadeIn(3000);
        $(window).off('scroll');
        counter('.counter-box h4',0,1,5);
        counter('.counter-box h4',1,1,38);
        counter('.counter-box h4',2,1,25);
      }

      $(window).on('scroll', function() {

       hScroll = $(this).scrollTop();

       if(hScroll > $('#about').offset().top) {
         $('.header-nav-fixed').addClass('visible');
       } else {
         $('.header-nav-fixed').removeClass('visible');
       }

       if(hScroll>($('#offert').offset().top-($(window).height()*0.7))) {
         fadeWithMove('#offert .section-head')
         var i;
         for (i = 0; i < 2; i++) {
           (function(i){
             setTimeout(function() {
               $('#offert .box').eq(i).animate({
                 opacity : "1",
                 top: 0
               });
             },300*i);
           })(i);
         }
       };
       if(hScroll>($('#quotes').offset().top-($(window).height()*0.7))) {
         fadeWithMove('#quotes .section-head');
         $('.quotes-container').css({'opacity':'1'})
       };
       if(hScroll>($('#contact-form').offset().top-($(window).height()*0.7))) {
         $('#contact-form .section-head').animate({
           opacity: 1,
           top: 0
         })
         $('.footer-info').animate({
           opacity : 1
         });
         $('.form-container').animate({
           opacity : 1,
           top: 0
         });
       }

      });

    }); //scrolling end
}); // ready end

// custom fuctions

var i;
for (i = 0; i < 3; i++) {
  (function(i) {
    $('.boxes-container .box').eq(i).hover(function() {
          $('.boxes-container .box svg').eq(i).toggleClass('icon-scale')
    });
  })(i)
}

function scrollToPos(divTo) {
    var elemPos = $(divTo).offset().top;
    $('html,body').animate({
        scrollTop : elemPos + 'px'
    },'slow');
}

// quotes slider module

 const slider = (function(limit,el) {
   //private
   let _limit = limit;
   let current = 1;
   let int;
   let _slide = (i) => {
     if(i) {
       clearInterval(int)
       current = i;
       el.css({transform: 'translateX(-'+(current-1)*50+'%)'});
       for(let i=0;i<limit;i++) {
         if(i == current-1) {
           $('.quote-nav li').eq(i).addClass('nav-bar-activ');
         } else {
           $('.quote-nav li').eq(i).removeClass('nav-bar-activ');
         }
       }
       current++;
     } else {
       int = setInterval(() => {
         if(current >= limit) {
           el.css({transform: 'translateX(0%)'});
           current = 1;
         } else {
          el.css({transform: 'translateX(-'+current*50+'%)'});
          current++;
         }
         for(let i=0;i<limit;i++) {
           if(i == current-1) {
             $('.quote-nav li').eq(i).addClass('nav-bar-activ');
           } else {
             $('.quote-nav li').eq(i).removeClass('nav-bar-activ');
           }
         }
       },6000)
     }
   }

   let _click = (i) => {
      _slide(i);
      _slide();
   }
   //public
   return {
     init: _slide,
     click: _click
   }
 })(2,$('.quotes-container'));

 slider.init();

 $('.quote-nav li').each(function(i) {
   $(this).on('click',function() {
     slider.click(i+1)
   });
 })

  // var sliderLimit = 2;
  // var currentSlider = 0;
  // var x = setInterval(function() {
  //
  //   if(currentSlider === sliderLimit) currentSlider = 0;
  //   for (var i = 0; i < sliderLimit; i++) {
  //       if(i===currentSlider) {
  //         $('#quote-id-'+i).css({'display':'flex'});
  //         $('#quote-id-'+i).animate({opacity:'1',left:'0'},800);
  //         $('.quote-nav li').eq(i).removeClass('nav-bar').addClass('nav-bar-activ');
  //       } else {
  //         $('#quote-id-'+i).css({'display':'none','opacity':'0','left':'-170px'});
  //         $('.quote-nav li').eq(i).removeClass('nav-bar-active').addClass('nav-bar')
  //       }
  //   }
  //   currentSlider++;
  // },6000);

// functions
function fadeWithMove(element,duration) {
  $(element).animate({top:'0',opacity: '1'},duration);
}
function fade(element,duration) {
  $(element).css({'display':'none'}).fadeIn(duration);
}

function counter(el,eq,start,end) {
  var counter = start;
  var i = setInterval(function() {
    $(el).eq(eq).text(counter);
    counter++;
    if(counter > end) clearInterval(i);
    return false;
  },35);
}
