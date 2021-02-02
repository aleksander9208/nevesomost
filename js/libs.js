jQuery(function($) {
	
	//Слайдер акции, адаптив нах не нужен
	$('.stock_slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		// autoplay: true,
		// autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="prev"><img src="img/prev.png"></div>',
		nextArrow: '<div class="next"><img src="img/next.png"></div>',
	});
	
	//Слайдер где людишки
	$('.people_slider').slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 300,
		// autoplay: true,
		// autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	
	//Табы на главной
	$(".tab_item").not(":first").hide();
	$(".center_block .tab").click(function() {
		$(".center_block .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	//о центре на главной слайдер
	$('.conferences-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		// autoplay: true,
		// autoplaySpeed: 2000,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<div class="prev"><img src="img/prev.png"></div>',
		nextArrow: '<div class="next"><img src="img/next.png"></div>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	//Слайдер на главной в о центре
	$('.center_slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		// autoplay: true,
		// autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="prev"></div>',
		nextArrow: '<div class="next"></div>',
	});
	
	//Слайдер аниматоров
	$('.animators-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		// autoplay: true,
		// autoplaySpeed: 2000,
		slidesToShow: 5,
		slidesToScroll: 2,
		prevArrow: '<div class="prev"><img src="img/prev.png"></div>',
		nextArrow: '<div class="next"><img src="img/next.png"></div>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	//Cлайдер отзывов
	$('.reviews-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		// autoplay: true,
		// autoplaySpeed: 2000,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<div class="prev"><img src="img/prev.png"></div>',
		nextArrow: '<div class="next"><img src="img/next.png"></div>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	//Слайдер звезд
	$('.stars-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		// autoplay: true,
		// autoplaySpeed: 2000,
		slidesToShow: 6,
		slidesToScroll: 2,
		prevArrow: '<div class="prev"><img src="img/prev.png"></div>',
		nextArrow: '<div class="next"><img src="img/next.png"></div>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 2,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});
	
	//Всплывашка для видео
	$('.video-info a').fancybox({
		// caption : function( instance, item ) {
			// return $(this).parent().find('.video-text').html();
		// }
	});
	
	//Слайдер для фотогалереи
	$('.foto-slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		// autoplay: true,
		// autoplaySpeed: 2000,
		slidesToShow: 5,
		slidesToScroll: 2,
		prevArrow: '<div class="prev"><img src="img/prev.png"></div>',
		nextArrow: '<div class="next"><img src="img/next.png"></div>',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});
	
	
	//Слайдер для Прайса
	$('.prais_slider').slick({
		dots: false,
		infinite: true,
		speed: 300,
		// autoplay: true,
		// autoplaySpeed: 2000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="prev"><img src="img/prev.png"></div>',
		nextArrow: '<div class="next"><img src="img/next.png"></div>',
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	
	//аккардион
	// $(".faq_title").click(function () {
		// $('.faq_content').not(this).css('display','block');
	// });
	
	$('.faq_title').click(function () {
		$(this).toggleClass('faq_content_active').next().slideToggle();
		$('.faq_content').not(this).removeClass('faq_content_active').next().slideUp();
	});
	
	
	let navs = document.querySelectorAll(".faq .faq_title");
	navs.forEach(nav=>{
		nav.addEventListener("click", ()=>{
			nav.classList.toggle("open")
			let content = nav.nextElementSibling
			content.classList.toggle("selected");
		})
		
	})
	
	$('.foto-slider_cafe').slick({
		dots: false,
		infinite: true,
		speed: 300,
		// autoplay: true,
		// autoplaySpeed: 2000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="prev"><img src="img/prev.png"></div>',
		nextArrow: '<div class="next"><img src="img/next.png"></div>',
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});
	
	
});