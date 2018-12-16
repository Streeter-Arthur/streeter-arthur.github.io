$(document).ready(function() {
	$("button.navMenu").click(function() {
		$("nav ul li").not(document.getElementById("menu")).slideToggle("1000");
	});
     });
    $(window).resize(function(){
	    if ($(window).width() >= 762){	
		    $("nav ul li").not(document.getElementById("menu")).show();
	    }	
	    if ($(window).width() <= 761){	
		    $("nav ul li").not(document.getElementById("menu")).hide();
	    }	
    });
$(document).ready(function() {
	$("button.showSchedule").click(function() {
		$(this).siblings("ul.schedule").slideToggle("1000");
	});
});
