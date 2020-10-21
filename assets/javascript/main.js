let items = document.querySelectorAll("canvas");
items.forEach(item =>{
    var canvas = item;
    var context = canvas.getContext('2d');
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 32;
    var gradient = context.createRadialGradient(100, 70, 42, 100, 70, 50);
    gradient.addColorStop(0, "#405de6");
    gradient.addColorStop(0.2, "#5851db");
    gradient.addColorStop(0.4, "#833ab4");
    gradient.addColorStop(0.6, "#c13584");
    gradient.addColorStop(0.8, "#e1306c");
   gradient.addColorStop(1, "#fd1d1d");

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = 'transparent';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = gradient;
    context.stroke();
});


// const a = document.querySelector(".right");
//     let x = document.getElementsByClassName(".left");
//     const b = y + 30 + "px";
// console.log(b);

$(document).ready(function() {
    $(window).resize(function() {
        var newWidth = $(".left").width();
        console.log(newWidth);
    })
})



    