$("#myImg").css("visibility", "hidden");

window.onscroll = function () { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        $("#myImg").css("visibility", "visible");
        $("#myImg").addClass("slideUp");
    }
}

$("#gallery h2").addClass("slideLeft");
$("#gallery h1").addClass("slideLeft");
$("#gallery p").addClass("slideRight");