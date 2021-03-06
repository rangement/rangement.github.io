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
    	return 'May 2019 / Degree Project - Web Glossary / With Tiger Dingsun' ;
  		}
  		else if (e.hasClass('bar2')) {
    	return 'December 2018 / Typeface Specimen - Poster / Incline';
  		}
  		else if (e.hasClass('bar3')) {
  		return 'March 2019 / Photography project';
  		}
  		else if (e.hasClass('bar4')) {
  		return 'April 2019 / GUI';
  		}
  		else if (e.hasClass('bar5')) {
  		return 'March 2018 / Collaboration with Raina Wellman and Eliza Chen / Draft Catalog';
  		}
  		else if (e.hasClass('bar6')) {
  		return 'September 2017 / Modular Cursive Stencil';
  		}
  		else if (e.hasClass('bar7')) {
  		return 'March 2019 / Found photo anthology / Flashback';
  		}
  		else if (e.hasClass('bar9')) {
  		return 'May 2019 / Janky Mess';
  		}
  		else if (e.hasClass('bar30')) {
  		return 'May 2019 / Degree Project / Final Installation';
  		}
  		else if (e.hasClass('bar10')) {
  		return 'May 2019 / Le Parc des Perroquets';
  		}
  		else if (e.hasClass('bar11')) {
  		return 'May 2017 / Collaboration with Tiger Dingsun / Argentina - Hi/Low Tech';
  		}
  		else if (e.hasClass('bar12')) {
  		return 'May 2018 / Browser game';
  		}
  		else if (e.hasClass('bar13')) {
  		return 'April 2017 / Collaboration with Aedan Vadala Clark / Back/Forth';
  		}
  		else if (e.hasClass('bar32')) {
  		return 'December 2018 / Typeface Specimen - Book / Incline';
  		}
  		else if (e.hasClass('bar28')) {
  		return 'May 2019 / Typeface Specimen / Rhyta Grotesk';
  		}
  		else if (e.hasClass('bar33')) {
  		return 'May 2019 / Degree Project / A website ';
  		}
      else if (e.hasClass('bar34')) {
      return 'July 2020 / jwenzhuang.github.io / Wen’s website';
      }
      else if (e.hasClass('bar35')) {
      return 'November 2019 / Sound.';
      }
  	
	
	}

	}


// MEDIA SCREEN MOBILE ______________________________________________


	else if (screen.width <= 470) {   // MEDIA SIZE MOBILE

  $("main").hide();
  $(".about").hide();
  $("#lang").hide();
  $("#lang2").hide();

  $(".name").prepend( "<br>" );
  $(".name").append( " Mobile Site under Construction / See you soon" );
  $("header").css("padding-left","10vw");
  $("header").css("padding-right","10vw");

  	// Signals that this is script for Mobile media size:
  	console.log("MOBILE");

}