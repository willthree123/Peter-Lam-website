$(window).on("load", function() {
    $(".loader-wrapper").fadeOut("slow");
});

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit

// Then we set the value in the --vh custom property to the root of the document
let vh = window.innerHeight * 0.01;
let vw = document.documentElement.clientWidth * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty('--vw', `${vw}px`);

window.addEventListener('resize', function(event) {
    let vh = window.innerHeight * 0.01;
    let vw = document.documentElement.clientWidth * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    document.documentElement.style.setProperty('--vw', `${vw}px`);
}, true);