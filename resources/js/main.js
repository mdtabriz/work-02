$(document).ready(function(){


	//Sticky Menu

	$(".js--services-section").waypoint(function(direction){

		if(direction == "down") {

			$("nav").addClass("sticky");

		}else{
			$("nav").removeClass("sticky");
		}

	});



	//MIXITUP (Portfolio Section)

	var mixer = mixitup('.container');
	
});