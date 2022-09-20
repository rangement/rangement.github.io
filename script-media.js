// MEDIA DESKTOP ______________________________________________

	if (screen.width >= 470) {   // MEDIA SIZE DESKTOP

  	// Signals that this is script for DESKTOP media size:
  	console.log("DESKTOP");

  	var mouseX;
    var mouseY;
    $(document).mousemove( function(e) {
    // mouse coordinates
    mouseX = e.pageX;
    mouseY = e.pageY;
    });

	// hover
	$(".hover").mouseover(function(){
    	// populate tooltip string
    	$('#tooltip span').html(stringValue($(this)));

    	// show tooltip
    	$('#tooltip').stop(false, true).fadeIn(1);

    	// position tooltip relative to mouse coordinates
    	$(this).mousemove(function() {
     	 $('#tooltip').css({'top':mouseY - 100,'left':mouseX - 200});
    	});
	}).mouseout(function() {
  		// hide tooltip
 		 $('#tooltip').stop(false, true).fadeOut('slow');
	});

	// perform check and return string
	function stringValue(e) {

  		if (e.hasClass('bar1')) {
    	return 'Degree Project - Web Glossary / with Tiger Dingsun' ; //may 2019
  		}
  		else if (e.hasClass('bar2')) {
    	return 'Typeface Specimen - Poster / Incline'; //dec 2018
  		}
  		else if (e.hasClass('bar3')) {
  		return 'A photo project'; //March 2019
  		}
  		else if (e.hasClass('bar4')) {
  		return 'GUI Poster'; //April 2019
  		}
  		else if (e.hasClass('bar5')) {
  		return 'Collaboration with Raina Wellman and Eliza Chen / Draft Catalog'; //March 2018
  		}
  		else if (e.hasClass('bar6')) {
  		return 'Modular Cursive Stencil'; //September 2017
  		}
  		else if (e.hasClass('bar7')) {
  		return 'Found photo anthology / Flashback'; //March 2019
  		}
  		else if (e.hasClass('bar9')) {
  		return 'Janky Mess Poster'; //May 2019
  		}
  		else if (e.hasClass('bar30')) {
  		return 'Degree Project / Final Installation'; //May 2019
  		}
  		else if (e.hasClass('bar10')) {
  		return 'Le Parc des Perroquets'; //May 2019
  		}
  		else if (e.hasClass('bar11')) {
  		return 'Collaboration with Tiger Dingsun / Argentina - Hi/Low Tech'; //May 2017
  		}
  		else if (e.hasClass('bar12')) {
  		return 'Browser window game'; //May 2018
  		}
  		else if (e.hasClass('bar13')) {
  		return 'Collaboration with Aedan Vadala Clark / Back/Forth'; //April 2017
  		}
  		else if (e.hasClass('bar32')) {
  		return 'Typeface Specimen / Incline'; //December 2018
  		}
  		else if (e.hasClass('bar28')) {
  		return 'Typeface Specimen / Rhyta Grotesk'; //May 2019
  		}
  		else if (e.hasClass('bar33')) {
  		return 'Thesis Project / A website'; //May 2019
  		}
      else if (e.hasClass('bar34')) {
      return 'jwenzhuang.github.io / Wen’s website'; //July 2020
      }
      else if (e.hasClass('bar35')) {
      return 'Sound poster.'; //November 2019
      }

	}

	}

// MEDIA SCREEN MOBILE ______________________________________________
	else if (screen.width < 470) {   // MEDIA SIZE MOBILE
	// Signals that this is script for Mobile media size:
	console.log("MOBILE");
	$("caption").hide();
	$("hoverline").hide();
}
