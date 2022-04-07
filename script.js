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
    });
});

// Mark triangle points
let width = $(window).width();
let height = $(window).height();

$("body").append(
    $('<div></div>')
        .css('position', 'absolute')
        .css('top', '5px')
        .css('left', width / 2 + 'px')
        .css('width', '5px')
        .css('height', '5px')
        .css('background-color', 'white'));

$("body").append(
    $('<div></div>')
        .css('position', 'absolute')
        .css('top', height - 10 + 'px')
        .css('left', (height + (width / 2)) - 10 + 'px')
        .css('width', '5px')
        .css('height', '5px')
        .css('background-color', 'white'));

$("body").append(
    $('<div></div>')
        .css('position', 'absolute')
        .css('top', height - 10 + 'px')
        .css('left', (height + (width / 2)) + 100) + 'px')
    .css('width', '5px')
    .css('height', '5px')
    .css('background-color', 'white')

    
// Pick a random point on the triangle
const choosePoint = () => {
    return Math.floor(Math.random() * 3)
}

console.log(choosePoint());