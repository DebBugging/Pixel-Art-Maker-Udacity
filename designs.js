let grid = $("#pixelCanvas");
let color = $("#colorPicker");
let drag = false;

//Make grid when click submit
$("#sizePicker").submit(function makeGrid(e) {
    //Show the grid when hit submit
    grid.css("opacity", "1");
    //reset grid
    grid.html("");
    //set the size
    let rows = $("#inputHeight").val();
    let cols = $("#inputWidth").val();
    for (let i = 0; i < rows; i++) {
        grid.append("<tr></tr>");
        for (let x = 0; x < cols; x++) {
            grid
                .children()
                .last()
                .append("<td></td>");
        }
    }
    e.preventDefault();
});
// Draw when the mouse is pressed down
grid.on("mousedown", "td", function (e) {
    e.preventDefault;
    drag = true;
    if (drag) {
        $(e.target).css("background-color", color.val());
    }
});
grid.on("mouseenter", "td", function (e) {
    if (drag) {
        $(e.target).css("background-color", color.val());
    }
});
grid.on("mouseup", "td", function (e) {
    drag = false;
});
grid.on('mouseleave', function (e) {
    drag = false;
});

//Go back to white when double clicked.
grid.dblclick("td", function (e) {
    $(e.target).css("background-color", "white");
});
