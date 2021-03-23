$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
        autoplaySpeed:5000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
	});
	$('.slider2').slick({
		arrows:true,
		dots:false,
		infinite:true,
		slidesToShow:4,
		swipeToSlide:true,
		autoplay:false,
		speed:1000,
        autoplaySpeed:10000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
		responsive:[
			{
				breakpoint: 1200,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 600,
				settings: {
					// arrows:false,
					slidesToShow:1
				}
			}
		]
	});
	$('.slider-mobile').slick({
		arrows:false,
		dots:false,
		infinite:true,
		slidesToShow:1,
		// centerMode: true,
		swipeToSlide:true,
		autoplay:true,
		speed:1000,
        autoplaySpeed:5000,
        pauseOnFocus:true,
        pauseOnHover:true,
		pauseOnDotsHover:true,
		variableWidth: true,
	});


	$('.navbar__burger,.navbar__arrow').click(function(event) { 
		// e.preventDefault();
		$('.navbar__burger,.navbar__menu').toggleClass('active');
		$('body').toggleClass('lock');
	  });


	  var navig = $("#navig"),
      tit = $("#tit"),
      catalog = $("#catalog"),
      cartBtn = $("#main-cart-btn"),
      cartBtnCounter = $("#main-cart-btn__counter"),
      upBtn = $("#up"),
      upMobBtn = $("#up-mob"),
      navH = $("#navbar").innerHeight(),
      headerH = $("#header").innerHeight() + $("#about").innerHeight() + $("#tit").innerHeight(),
      scrollOffset = $(window).scrollTop();

      
  /* Fixed header */
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll() {
    if( window.innerWidth <= 767 ){
      headerH = $("#header").innerHeight();
    } else {
      headerH = $("#header").innerHeight() + $("#about").innerHeight() + $("#tit").innerHeight();
    } 
    if( scrollOffset >= headerH ) {
      navig.addClass("fixed");
    } else {
      navig.removeClass("fixed");
    }
    if( scrollOffset >= headerH ) {
      catalog.addClass("fixed");
    } else {
      catalog.removeClass("fixed");
    }
    if( scrollOffset >= headerH ) {
      upMobBtn.addClass("on");
    } else {
      upMobBtn.removeClass("on");
    }
    if( scrollOffset >= navH ) {
      cartBtn.addClass("fixed");
    } else {
      cartBtn.removeClass("fixed");
    }
    if( scrollOffset >= navH ) {
      cartBtnCounter.removeClass("min");
    } else {
      cartBtnCounter.addClass("min");
    }
    if( scrollOffset >= navH ) {
      upBtn.addClass("on");
    } else {
      upBtn.removeClass("on");
    }
  }

  /* Smooth scroll */

  $("[data-scroll]").on("click", function(event){
    event.preventDefault();
    var $this = $(this),
    blockId = $this.data('scroll'),
    blockOffset = $(blockId).offset().top - 69;

    $("html, body").animate({
      scrollTop: blockOffset
    }, 700);

  
  });
	
  var showPopup = function(target) {
    target.classList.add('is-active');
  };

  var closePopup = function(target) {
    target.classList.remove('is-active');
  };

  myLib.body.addEventListener('click', function(e) {
    var target = e.target;
    var popupClass = myLib.closestAttr(target, 'data-popup');

    if (popupClass === null) {
      return;
    }

    e.preventDefault();
    var popup = document.querySelector('.' + popupClass);

    if (popup) {
      showPopup(popup);
      myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('click', function(e) {
    var target = e.target;

    if (target.classList.contains('popup-close') ||
        target.classList.contains('popup__inner')) {
          var popup = myLib.closestItemByClass(target, 'popup');

          closePopup(popup);
          myLib.toggleScroll();
    }
  });

  myLib.body.addEventListener('keydown', function(e) {
    if (e.keyCode !== 27) {
      return;
    }

    var popup = document.querySelector('.popup.is-active');

    if (popup) {
      closePopup(popup);
      myLib.toggleScroll();
    }
  });

});