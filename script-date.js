// SCRIPT PLACED AT BOTTOM OF HTML INSIDE BODY. 

  // Dates the page upon load (displayed in 'footer #para1'):
  document.getElementById("para1").innerHTML = formatAMPM();

    function formatAMPM() {
    let d = new Date(),
      // minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
      // hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
      // ampm = d.getHours() >= 12 ? 'pm' : 'am',
      months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
      days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
      at = "at";
      return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear();
      // +', '+hours+':'+minutes+ampm
    }