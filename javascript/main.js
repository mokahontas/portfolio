$(document).ready(function () {
$('#profile').hide();
$('.projects').hide();
$('#image').click(function (e) {
    $('#profile').toggle();
});
$('.boat').click(function (e) {
    $('.projects').toggle();
});
});
