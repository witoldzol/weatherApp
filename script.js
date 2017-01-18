$(document).ready(function(){
	//check location of client
	$("div").click = function (){
		alert('fok sake');
	}



	if(navigator.geolocation) {
	   	navigator.geolocation.getCurrentPosition(function(position){
	   		lati = position.coords.latitude;
			long = position.coords.longitude;
	   		$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng=%20"+ lati +","+long+"&key=AIzaSyDCZv-6H4182qJx3JyRg7hLGvVNSW-ExSQ",function(json){
	   			var string = JSON.stringify;
	   			$("#location").html(json.results[0].formatted_address);
	   		});
	   		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lati+"&lon="+long+"&appid=679ec090acbf48a422a8d8e46d7bae9c", function(data){
	   			var icon = data.weather[0].icon + ".png";
	   			var weather = data.weather[0].description;
	   			var kelvin =data.main.temp;
	   			var string = JSON.stringify;
	   			
	   			

	   			$("#temp").html(Math.floor(kelvin - 273.15)+"°C"); 
	   			$("#conditions").html(weather);
	   			$("#picture").attr("src", "http://openweathermap.org/img/w/"+icon);
	   			$("#temp").css("visibility", "visible")
	   			$("#conditions").css("visibility", "visible")
	   			$("#location").css("visibility", "visible")
	   		$("#button").on("click", function fTemp(){
	   			
	   			if($("#button").text() == "Celsius") {
	   				$("#button").text("Fahrenheit");
	   				$("#temp").text((Math.floor(kelvin*9/5-459.67)) + "°F");
	   			} else {
	   				$("#button").text("Celsius");
	   				$("#temp").text((Math.floor(kelvin - 273.15))+"°C");
	   			}
	   		});	
	   		});	
	    });
	}
	

	

});
	

	

