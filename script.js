

// Mark triangle points
const width = $(window).width();
const height = $(window).height();
const botLeft = { x: (width / 2) + ((height - 40) / 2), y: height - 40 };
const botRight = { x: ((width / 2)) - ((height - 40) / 2), y: height - 40 };
const topVert = { x: width / 2, y: 20 };

let currentPoint = {};
let nextPoint = {};
let points = 0;

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
    if (vertex === 0) {
        point2 = topVert;
    } 
    else if (vertex === 1) {
        point2 = botLeft;
    } 
    else {
        point2 = botRight;
    };

    nextPoint.x = Math.abs((currentPoint.x + point2.x)) / 2;
    nextPoint.y = Math.abs((currentPoint.y + point2.y)) / 2;
    
    $("body").append(
        $('<div></div>')
            .css('position', 'absolute')
            .css('top', nextPoint.y + 'px')
            .css('left', nextPoint.x + 'px')
            .css('width', '1px')
            .css('height', '1px')
            .css('background-color', 'white'));
    
    currentPoint = nextPoint;
    points++;
    console.log(points);
    if (points === 10) {
        clearInterval(init);
        console.log(stop);
    }
};

// const myInterval = setInterval(calcNextPoint(), 10);

const init = () => {
    setInterval(calcNextPoint, 10);
}

const stopCount = () => {
    clearInterval(init);
    console.log('Stop!')
}

// Click to choose starting point
$(document).ready(function () {
    $(document).click(function (ev) {
        mouseX = ev.pageX;
        mouseY = ev.pageY
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