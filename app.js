var images = [
    "/media/macanitas.jpg", "/media/flowers1.jpg", "/media/glass.jpg", "/media/vizcarra.jpg"
];

var i = 0;
var img = document.getElementById('macanitas');

function changeImg() {
    img.src = images[i];

    if(i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    console.log(i);
}

setInterval(changeImg, 5000);

function stopChg() {
    // make this do a pause on an image when clicked. 
    // when released it will allow the images to keep changing at each interval.
}

