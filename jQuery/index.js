$("h1").addClass("big-title margin-50");

$("h1").text("Bye");

$("button").html("<em>Click me</em>");

$("a").attr("href", "https://www.baidu.com");

$("h1").click(function () { 
    $("h1").css("color", "purple");
});

$("button").click(function () { 
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

$(document).keydown(function (event) { 
    $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("color", "purple");
});

$("h1").after("<button>old</button>");
$("h1").prepend("<button>new</button>");
//$("button").remove();