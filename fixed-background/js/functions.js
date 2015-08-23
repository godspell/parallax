// Scroll Effects
// Slide elements In to the page
$(document).scroll(function(){
	var currentScroll = $(document).scrollTop();
	var important_facts_landed = 0; // boolean to check if html class is set. 

	if (currentScroll >= $("#important-facts").offset().top - $(window).height() * 0.76) {
		if(important_facts_landed == 0){
			// Run this if statement code only once
			important_facts_landed = 1;

			// Animate in one at a time
			$('.landing-elements div').each(function(i){
				setTimeout(function(){
					$('.landing-elements div').eq(i).addClass('slide-in');
				}, 200 * i);
			});
		}
	}
});