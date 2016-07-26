$(document).ready(function () {
$('#profile').hide();
$('.projects').hide();
$('#image').click(function (e) {
    $('#profile').fadeToggle(1000);
});
$('.close').click(function (e) {
	$('#profile').fadeToggle(1000);
});
$('.boat').click(function (e) {
    $('.projects').fadeToggle(1000);
});
$('.close-projects').click(function (e) {
$('.projects').fadeToggle(1000);
});
});
