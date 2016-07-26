$(document).ready(function () {
$('#profile').hide();
$('.projects').hide();
$('.click-here').hide();
$('#image').hover(function (e) {
	$('.click-here').fadeToggle(1000);	
});
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
