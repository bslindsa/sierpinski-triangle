

// Mark triangle points
const width = $('#triangle-box').width();
const height = $('#triangle-box').height();
const botLeft = { x: (width / 2) + ((height - 40) / 2), y: height - 40 };
const botRight = { x: ((width / 2)) - ((height - 40) / 2), y: height - 40 };
const topVert = { x: width / 2, y: 20 };

let currentPoint = {};
let nextPoint = {};
let points = 0;

// Top Triangle point
$("#triangle-box").append(
    $('<div></div>')
        .css('position', 'absolute')
        .css('top', '20px')
        .css('left', topVert.x + 'px')
        .css('width', '5px')
        .css('height', '5px')
        .css('background-color', 'white'));
// Bottom right triangle point
$("#triangle-box").append(
    $('<div></div>')
        .css('position', 'absolute')
        .css('top', botRight.y + 'px')
        .css('left', botRight.x + 'px')
        .css('width', '5px')
        .css('height', '5px')
        .css('background-color', 'white'));
// Bottom left triangle point
$("#triangle-box").append(
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
    let vertex = Math.floor(Math.random() * 3);
    let size = Math.floor(Math.random() * 3);
    let colorNum = Math.floor(Math.random() * 3);
    let color = $('#color1').val();
    if ($('#color2').val() !=='#000000' && colorNum === 0) {
        color = $('#color2').val();
    }
    else if ($('#color3').val() !=='#000000' && colorNum === 1) {
        color = $('#color3').val();
    }

    let point2 = topVert;
    if (vertex === 0) {
        point2 = botRight;
    }
    else if (vertex === 1) {
        point2 = botLeft;
    }

    nextPoint.x = Math.abs((currentPoint.x + point2.x)) / 2;
    nextPoint.y = Math.abs((currentPoint.y + point2.y)) / 2;

    $("#triangle-box").append(
        $('<div class="dots"></div>')
            .css('position', 'absolute')
            .css('top', nextPoint.y + 'px')
            .css('left', nextPoint.x + 'px')
            .css('width', size + 1 + 'px')
            .css('height', size + 1 + 'px')
            .css('background-color', color));

    currentPoint = nextPoint;

    points++;
    $('#points').text(points);
};

// Click to choose starting point
$('#triangle-box').click(function (ev) {
    mouseX = ev.pageX;
    mouseY = ev.pageY;
    currentPoint = {
        x: mouseX,
        y: mouseY
    }
    $("body").append(
        $('<div class="start-point"></div>')
            .css('position', 'absolute')
            .css('top', mouseY + 'px')
            .css('left', mouseX + 'px')
            .css('width', '5px')
            .css('height', '5px')
            .css('background-color', 'white'));


    let speed = $('#speed-input').val();
    // console.log(speed);

    const myInterval = setInterval(calcNextPoint, speed);

    const stopCount = () => {
        clearInterval(myInterval);
    }

    $('#stop-btn').click(stopCount);
    $('#clear-btn').click(stopCount);
});

// Clear dots
const clearDots = () => {
    points = 0;
    $('#points').text(points);
    $('.start-point').remove();
    $('.dots').remove();
}

$('#clear-btn').click(clearDots);
$('#clear-color1').click(() => {
    $('#color1').val('#ffffff');
})
$('#clear-color2').click(() => {
    $('#color2').val('#000000');
})
$('#clear-color3').click(() => {
    $('#color3').val('#000000');
})