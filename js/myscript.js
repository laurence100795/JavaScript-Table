$(document).ready(function() {

    $("tr:odd").addClass("odd"); // checks the .length number of the table applies to any odd numbers
    $("tr:even").addClass("even"); // checks the .length number of the table applies to any even numbers

    $("th").click(function(){
        $(this).siblings().addClass("blue")
    })
    $("tr").click(function(){
        $(this).removeClass("odd").removeClass("even")
    })
});
