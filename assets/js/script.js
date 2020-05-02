$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(function() {
        $(this).remove();
    });
    event.stopPropagation();
});

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
})
$("input[type='text']").on("keypress", function(event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append('<li><span><i class="fas fa-trash-alt"></i> </span>' + todoText + "</li>");

    }


});
$("#icon").click(function() {
    $("input[type='text']").fadeToggle(200);
});