
$(function() {
    $("#bmw").click(function() {
        alert("I want to buy now!");
    });
});

$(function() {
    $("#specialOffer").click(function() {
        $(this).fadeOut(800, function() {
            $(this).fadeIn(400);
        });
    });
});