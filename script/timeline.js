function openNav(overlayNum) {
    OVERLAY = "Overlay";
    id = OVERLAY.concat(overlayNum);

    document.getElementById(id).style.width = "100%";
}

function closeNav(overlayNum) {
    OVERLAY = "Overlay";
    id = OVERLAY.concat(overlayNum);

    document.getElementById(id).style.width = "0%";
}

// function onLoadFunctions() {
//     openNav(1);
// }
// window.onload = onLoadFunctions;