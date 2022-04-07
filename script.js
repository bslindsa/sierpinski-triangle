$(document).ready(function () {
    $(document).click(function (ev) {
        mouseX = ev.pageX;
        mouseY = ev.pageY
        console.log(mouseX + ' ' + mouseY);
        var color = '#000000';
        var size = '1px';
        $("body").append(
        $('<div></div>')
            .css('position', 'absolute')
            .css('top', mouseY + 'px')
            .css('left', mouseX + 'px')
            .css('width', size)
            .css('height', size)
            .css('background-color', color));
    });
});


// Pick a random point on the triangle
const choosePoint = () => {
    return Math.floor(Math.random() * 3)
}

console.log(choosePoint());