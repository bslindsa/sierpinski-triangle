let currentPoint = { x: null, y: null };
let nextPoint = { x: null, y: null };

// Mark triangle points
const width = $(window).width();
const height = $(window).height();
const botLeft = { x: (width / 2) + ((height - 40) / 2), y: height - 40 };
const botRight = { x: ((width / 2)) - ((height - 40) / 2), y: height - 40 };
const topVert = { x: width / 2, y: 20 };
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
    });

});

// Pick a random point on the triangle
const chooseVertex = () => {
    return Math.floor(Math.random() * 3);
}


// Calculate location of next point
const calcNextPoint = () => {
    let vertex = chooseVertex();
    if (vertex = 0) {

    }


}