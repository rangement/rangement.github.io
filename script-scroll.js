// SCRIPT PLACED AT BOTTOM OF HTML INSIDE BODY.


  // When the user scrolls down 100px from the top of the document, switch the button:
  function scrollFunction() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 20) {
        document.getElementById("lang-2").style.display = "inline";
        document.getElementById("lang").style.display = "none";
      } else {
        document.getElementById("lang").style.display = "inline";
        document.getElementById("lang-2").style.display = "none";
      }
  }


// TOP/BOTTOM button

  // Scroll to bottom onclick of "Bottom":
  $(function () {
    $('#lang').click(function () {
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
      $("#lang-2").css('display','inline');
      $("#lang").css('display','none');
      })
  })

  // Scroll to top onclick of "Top":
  $(function () {
    $('#lang-2').click(function () {
      $("html, body").animate({scrollTop: 0}, 500);
      $("#lang").css('display','inline');
      $("#lang-2").css('display','none');
      })
  })

  window.onscroll = function() {scrollFunction()};


//DESKTOP SCRIPT ONLY ____________________________________________________________

  if (screen.width >= 470) {   // MEDIA SIZE DESKTOP
  // Signals that this is script for Desktop media size:

  // Slidetoggle About menu:
  $(document).ready(function(){
    $(".about").click(function(){
      $("#about svg").animate({'opacity': '1'}, 1000);
      $('#about svg').toggle(function () {
        $("#about svg").addClass("active");
      }, function () {
        $("#about svg").removeClass("active");
      });

      $("#about").slideToggle();
      $("#about").css('display','block');
      $(".item-image" ).css('display','none');
      $("html, body").css.animate({scrollTop: 0}, 500);
    });
  });

$(".mobileabout" ).css('display','none');

}

//MOBILE SCRIPT ONLY ____________________________________________________________

if (screen.width < 470) {   // MEDIA SIZE MOBILE
// Signals that this is script for Mobile media size:
console.log("MOBILE");

    $(window).load(function() {
    $('footer #para1').css('display','none');
    $('footer').css('display','none');
    $('.item-image').css('display','block');
    });

    const mobileabout = document.createElement('div');
    mobileabout.innerHTML = `<div id="mobileabout"><a>say hi to me via</a><br><a href="mailto:theia.flynn@gmail.com">theia.flynn@gmail.com</a> / <a href="https://www.are.na/theia"> are.na</a><br>✣</div>`;
    document.body.appendChild(mobileabout);
    $(mobileabout).addClass("mobileabout");


    window.onscroll = function() {scrollFunction()};

}
