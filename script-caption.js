// MEDIA SCREEN DESKTOP ______________________________________________

if (screen.width >= 470) {

	//Upon img click = CLONES AND ENLARGES IMG + its CONTENT into .CAPTION and .LARGERPICTURE:

		$( "img" ).click(function() {

		// removes Tooltip temporarily:
			$('#tooltip').stop(false, true).fadeOut();

			let specific = $(this).clone();
			    $(".caption").find("p").append().html(specific.attr("content"));
			    $(".caption").find(".largerpicture").append().html(specific.removeAttr("width"));
			// scrolls to top:
			    $("html, body").animate({scrollTop: 0}, 500);
			// slides open the caption:
			    $(".caption").slideDown();

		});


	// If CAPTION is OPEN and clicked, it will SLIDE CLOSED again

		hiddenElements = $(':hidden');
		visibleElements = $(':visible');

		if($('.caption:visible').length == 0){
			$( ".caption" ).click(function() {
					$(".caption").slideUp();
				});
		}

}

// MEDIA SCREEN MOBILE ______________________________________________


else if (screen.width < 470) {

	$("caption").hide();

}
