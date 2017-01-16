$(document).ready(function(){
	//check location of client
	
	if(navigator.geolocation) {
	   	navigator.geolocation.getCurrentPosition(function(position){
	   		lati = position.coords.latitude;
			long = position.coords.longitude;
	   		$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng=%20"+ lati +","+long+"&key=AIzaSyDCZv-6H4182qJx3JyRg7hLGvVNSW-ExSQ",function(json){
	   			var string = JSON.stringify;
	   			$("#location").html(string(json.results[0].formatted_address));
	   		});
	   		$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lati+"&lon="+long+"&appid=679ec090acbf48a422a8d8e46d7bae9c", function(data){
	   			var icon = data.weather[0].icon + ".png";
	   			var weather = data.weather[0].description;
	   			var temperature =data.main.temp - 273.15;
	   			console.log(icon);
	   			var string = JSON.stringify;
	   			$("#temp").html(string(Math.floor(data.main.temp - 273.15)+"C")); 
	   			$("#conditions").html(string(weather));
	   			$("#picture").attr("src", "http://openweathermap.org/img/w/"+icon);

	   			
	   		});	
	    });
	}
	function toggle(myVal){
		if(myVal == C) {
			document.getElementById("temp").value = "keliviny";
		} else {
			document.getElementById("temp").value = "celciusze";
		}
	}

});
	

	

