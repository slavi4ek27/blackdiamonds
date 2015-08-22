$(document).ready(function() {
	$(".more_pos_hid_list > b").click(function() {
		$(this).find("~ ul").stop().slideToggle()
	});
});