var swiperLargeBanner = new Swiper(".banner-large-slider", {
	slidesPerView: 1,
	spaceBetween: 0,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
	},
	autoplay: {
		delay: 3000,
	},
});

var swiperCategory = new Swiper(".category-slider", {
	loop: true,
	loopFillGroupWithBlank: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
			spaceBetween: 20,
			centeredSlides: true,
			slidesPerGroup: 1,
			// loop: true,
			// loopFillGroupWithBlank: true,
		},
		500: {
			slidesPerView: 3,
			spaceBetween: 20,
			centeredSlides: true,
			slidesPerGroup: 1,
		},

		740: {
			slidesPerView: 5,
			centeredSlides: true,
			spaceBetween: 10,
			slidesPerGroup: 1,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 10,
			slidesPerGroup: 2,
		},
		1240: {
			slidesPerView: 5,
			spaceBetween: 10,
			slidesPerGroup: 2,
		},
	},
});

var swiperMediumBanner = new Swiper(".banner-medium-slider", {
	slidesPerView: "auto",
	spaceBetween: 30,
	slidesPerGroup: 1,
	centeredSlides: true,
	loop: true,
	loopFillGroupWithBlank: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			spaceBetween: 30,
			centeredSlides: true,
			slidesPerGroup: 1,
		},
		740: {
			slidesPerView: "auto",
			spaceBetween: 30,
			centeredSlides: true,
			slidesPerGroup: 1,
		},
	},
});

var swiperBookSlider = new Swiper(".book-slider", {
	slidesPerView: 6,
	spaceBetween: 0,
	slidesPerGroup: 3,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
			spaceBetween: 0,
			slidesPerGroup: 2,
		},
		500: {
			slidesPerView: 3,
			spaceBetween: 0,
			slidesPerGroup: 2,
		},
		740: {
			slidesPerView: 4,
			spaceBetween: 0,
			slidesPerGroup: 2,
		},
		1024: {
			slidesPerView: 5,
			spaceBetween: 0,
			slidesPerGroup: 3,
		},
		1240: {
			slidesPerView: 6,
			spaceBetween: 0,
			slidesPerGroup: 3,
		},
	},
});