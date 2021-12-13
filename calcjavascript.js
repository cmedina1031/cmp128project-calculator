function clearScreen() {
    document.getElementById("solution").value = "";
}
function display(value) {
    document.getElementById("solution").value += value;
}
function calculate(){
    var press = document.getElementById("solution").value;
    var solve = eval(press);
    document.getElementById("solution").value = solve;
}
