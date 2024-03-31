$(document).ready(function () {
    $("#toggle1").click(function () {
        $(this).css("opacity", "1");
        $("#toggle2").css("opacity", "0");
        $("#toggle3").css("opacity", "0");
        $("body").css("background-color", "rgb(59, 70, 100)");
        $(".display-container-cls, .toggle-cls").css("background-color", "rgb(25, 31, 50)");
        $(".number-plat-container-cls").css("background-color", "rgb(37, 45, 68)");
        $(".common-numbre-cls").css("background-color", "rgb(233, 227, 220)");

        $(".common-last-button-cls, .ball-cls").css("background-color", "rgb(209, 63, 48)");
        $(".common-number-row-cls:first-child .common-numbre-cls:nth-child(4), .common-last-button-cls:first-child").css("background-color", "rgb(100, 114, 154)");
        $(".main-container-cls").css("background-color", "rgb(59, 70, 100)");
    });

    $("#toggle2").click(function () {
        $(this).css("opacity", "1");
        $("#toggle1").css("opacity", "0");
        $("#toggle3").css("opacity", "0");
        $("body").css("background-color", "rgb(110 141 9)");
        $(".display-container-cls, .toggle-cls").css("background-color", "rgb(62 92 13)");
        $(".number-plat-container-cls").css("background-color", "rgb(63 90 12)");
        $(".common-numbre-cls").css("background-color", "rgb(220 233 227)");

        $(".common-last-button-cls, .ball-cls").css("background-color", "rgb(209 140 48)");
        $(".common-number-row-cls:first-child .common-numbre-cls:nth-child(4), .common-last-button-cls:first-child").css("background-color", "rgb(125 154 100)");
        $(".main-container-cls").css("background-color", "rgb(110, 141, 9)");
    });

    $("#toggle3").click(function () {
        $(this).css("opacity", "1");
        $("#toggle1").css("opacity", "0");
        $("#toggle2").css("opacity", "0");
        $("body, .main-container-cls").css("background-color", "rgb(131 83 140)");
        $(".display-container-cls, .toggle-cls").css("background-color", "rgb(96 38 120)");
        $(".number-plat-container-cls").css("background-color", "rgb(99 50 116)");
        $(".common-numbre-cls").css("background-color", "rgb(207 179 223)");

        $(".common-last-button-cls").css("background-color", "rgb(157 170 64)");
        $(".ball-cls").css("background-color", "rgb(194 210 79)");
        $(".common-number-row-cls:first-child .common-numbre-cls:nth-child(4), .common-last-button-cls:first-child").css("background-color", "rgb(150 84 172)");
    });

});
function onlyNumbersAndSymbols(event) {
    var key = event.key;
    var allowedCharacters = /[0-9+\-.*\/]/;
    if (!allowedCharacters.test(key)) {
        event.preventDefault();
        return false;
    }
}
function moveCursorToEnd(input) {
    input.setSelectionRange(input.value.length, input.value.length);
}


