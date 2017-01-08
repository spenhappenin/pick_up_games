// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require materialize-sprockets
//= require underscore
//= require gmaps/google
//= require_tree .

	function gotPostion(position) {
		console.log('gotPosition')
		var userLat = position.coords.latitude
		var userLong = position.coords.longitude 
		sessionStorage.setItem("userLat",userLat);
		sessionStorage.setItem("userLong",userLong);
	}

	function getLocation() {
		console.log('getLocation')
		navigator.geolocation.getCurrentPosition(gotPostion)
	}

	if(sessionStorage.getItem("userLat") === null && sessionStorage.getItem("userLong") === null) {
		getLocation()	
	}
