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

    console.log("container div width is: " + w + "px");
    console.log("w3 = " + w3 + "px");
    console.log("w4 = " + w4 + "px");
    console.log("new margin-left= " + randomnumber+ "px");

	}
}


//not for mobile!