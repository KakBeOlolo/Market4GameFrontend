$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		centerMode: true,
		variableWidth: true,
        centerPadding: '1px',
		autoplaySpeed:1200,
		responsive:[
			{
				breakpoint: 932,
				settings: {
					centerMode: true,
					slidesToShow:2
				}
			},
			{
				breakpoint: 632,
				settings: {
					centerMode: true,
					slidesToShow:1
				}
			},
			
		]
	});
});



