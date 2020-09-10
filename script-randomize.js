if (screen.width >= 470) { 


    //attributes each "hover" element inside the container div its own margins
	window.onload = function randomMargin(){
    $('.hover').each(function(){
    randomizeObject(this);
    });
	}


    //randomizes margins of each hover "object"
	function randomizeObject(elem){
    
        w = $(".container").width();
        w2 = w/1.5;
        w3 = w/6;
        w4 = w2-w3;
        maxmargin = 450;
        minmargin = 5;
        var randomnumber=Math.floor(w4*Math.random());


        if (randomnumber >= maxmargin) {
        $(elem).css({"margin-left": minmargin+"px"});   
        }

        else {
        $(elem).css({"margin-left": randomnumber+"px"});
        }

	}
}


//note: not for mobile!

