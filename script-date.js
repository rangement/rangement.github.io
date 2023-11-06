// SCRIPT PLACED AT BOTTOM OF HTML INSIDE BODY.

// Dates the page upon load (displayed in 'footer #para1'):
document.getElementById("date").innerHTML = formatDate();
document.getElementById("time").innerHTML = formatTime();

function formatDate() {
    let d = new Date(),
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', '11', 'Dec'],
        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[d.getDay()] + '-' + months[d.getMonth()] + '-' + d.getDate() + '-' + d.getFullYear();
}

function formatTime() {
    let d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am';
    return hours + ':' + minutes + ampm;
}
