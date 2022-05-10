$(function() {
	$("#menubar-menus li").mouseenter(function(event) {
		$(this).find("div").parent().css("background", "#FFF");
		$(this).find("div").parent().children("a").css("color", "#000");
		$(this).find("div").slideDown("fast");
	}).mouseleave(function() {
		$(this).find("div:visible").slideUp(50, function() {
			// #menubar-menus li:hover 처리를 하지 않을 경우 아래 라인 활성,
			$(this).parent().css("background", "#666");
			$(this).parent().children("a").css("color", "#FFF");
		});
	});
});


