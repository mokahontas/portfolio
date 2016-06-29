console.log($);

$(document).ready(function () {
$('.huladancer').on("click", function (e) {
    this.notice = $('<div>')
        .addClass('notice')
        .css({
            top: $(this).offset().top + 15,
            left: $(this).offset().left + 20
        }).text($(this).data('notice'))
        .appendTo(this);
}, function () {
    this.notice.remove();
console.log(this);
});

});
