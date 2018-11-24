$(document).ready(function() {
    $("button").click(function() {
            $("li").not(document.getElementById("menu")).slideToggle("1000");
    });
 });
$(window).resize(function(){
	if ($(window).width() >= 763){	
		$("li").not(document.getElementById("menu")).show();
	}	
	if ($(window).width() < 763){	
		$("li").not(document.getElementById("menu")).hide();
	}	
});
