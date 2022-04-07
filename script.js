

// Mark triangle points
const width = $(window).width();
const height = $(window).height();
const botLeft = { x: (width / 2) + ((height - 40) / 2), y: height - 40 };
const botRight = { x: ((width / 2)) - ((height - 40) / 2), y: height - 40 };
const topVert = { x: width / 2, y: 20 };

let currentPoint = {};
let nextPoint = {};

// Top Triangle point
$("body").append(
    $('<div></div>')
        .css('position', 'absolute')
        .css('top', '20px')
        .css('left', topVert.x + 'px')
        .css('width', '5px')
        .css('height', '5px')
        .css('background-color', 'white'));
// Bottom right triangle point
$("body").append(
    $('<div></div>')
        .css('position', 'absolute')
        .css('top', botRight.y + 'px')
        .css('left', botRight.x + 'px')
        .css('width', '5px')
        .css('height', '5px')
        .css('background-color', 'white'));
// Bottom left triangle point
$("body").append(
    $('<div></div>')
        .css('position', 'absolute')
        .css('top', botLeft.y + 'px')
        .css('left', botLeft.x + 'px')
        .css('width', '5px')
        .css('height', '5px')
        .css('background-color', 'white'));


// Calculate location of next point
const calcNextPoint = () => {
    // Pick a random point on the triangle
    let vertex = Math.floor(Math.random() * 3);;
    let point2 = topVert;
    console.log(vertex);
    // vertex = {0: topVert, 1: botLeft, 2: botRight}
    if (vertex === 0) {
        point2 = topVert;
    } 
    else if (vertex === 1) {
        point2 = botLeft;
    } 
    else {
        point2 = botRight;
    };

    // console.log(topVert);
    // console.log(botLeft);
    // console.log(botRight);

    // console.log(currentPoint);
    // console.log(point2);

    nextPoint.x = Math.abs((currentPoint.x + point2.x)) / 2;
    nextPoint.y = Math.abs((currentPoint.y + point2.y)) / 2;
    // console.log(nextPoint);


    $("body").append(
        $('<div></div>')
            .css('position', 'absolute')
            .css('top', nextPoint.y + 'px')
            .css('left', nextPoint.x + 'px')
            .css('width', '1px')
            .css('height', '1px')
            .css('background-color', 'white'));
    
    currentPoint = nextPoint;
}

const init = () => {
    let i = 0;
    while (i < 10000) {
        calcNextPoint();
        i++;
    }
}

// Click to choose starting point

$(document).ready(function () {
    $(document).click(function (ev) {
        mouseX = ev.pageX;
        mouseY = ev.pageY
        console.log(mouseX + ' ' + mouseY);
        $("body").append(
            $('<div></div>')
                .css('position', 'absolute')
                .css('top', mouseY + 'px')
                .css('left', mouseX + 'px')
                .css('width', '1px')
                .css('height', '1px')
                .css('background-color', 'white'));
        currentPoint = {
            x: mouseX,
            y: mouseY
        }
        init();
    });

});