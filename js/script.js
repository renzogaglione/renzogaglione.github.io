$(document).ready(function(){
	// Casistica
	$(".time a").click(function(element){
		$(".casistica>div").hide();
		year = $(this).html();
		$("#"+year).show();
	});
	// Apre mappa
	$(".maps").colorbox({width:"80%", height:"80%", iframe:true, close: "Chiudi"});
});