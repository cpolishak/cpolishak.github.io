var images = [
    "/media/macanitas.jpg", "/media/flowers1.jpg", "/media/glass.jpg", "/media/vizcarra.jpg"
];

var i = 0;
var img = document.getElementById('macanitas');

function forward() {
    i++;    
    if(i == images.length) {
        i = 0;
    }
    img.src = images[i]; 
}

function back() {
    i--;    
    if(i < 0) {
        i = images.length -1;
    }
    img.src = images[i]; 
}
