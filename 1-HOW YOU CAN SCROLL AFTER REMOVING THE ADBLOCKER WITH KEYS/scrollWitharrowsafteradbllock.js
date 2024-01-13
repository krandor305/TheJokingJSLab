var actualXPosition = 0
document.onkeydown = function(e) {
    switch(e.which) {
        case 38: // up
            actualXPosition -= 100
            window.scrollTo(actualXPosition,1000)
            console.log('up:'+actualXPostition)
        break;

        case 90: // up
            actualXPosition -= 100
            window.scrollTo(actualXPosition,1000)
            console.log('up:'+actualXPostition)
        break;

        case 40: // down
            actualXPosition += 100
            window.scrollTo(actualXPosition,1000)
            console.log('down:'+actualXPostition)
        break;

        case 83: // downb
            actualXPosition += 100
            window.scrollTo(actualXPosition,1000)
            console.log('up:'+actualXPostition)
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
};