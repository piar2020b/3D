$(".turn-sidebar-off").click(function() {
	$(".sidebar").toggleClass("sidebar-hidden");
	$(".turn-sidebar-on").toggleClass("sidebar-turn-hidden");
});
$(".turn-sidebar-on").click(function() {
	$(".sidebar").toggleClass("sidebar-hidden");
	$(".turn-sidebar-on").toggleClass("sidebar-turn-hidden");
});
$(".question").click(function() {
	if (!$(".sidebar").hasClass("sidebar-hidden")) {
		$(".sidebar").toggleClass("sidebar-hidden");
		$(".turn-sidebar-on").toggleClass("sidebar-turn-hidden");
	}
});