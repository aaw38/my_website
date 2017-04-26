(function() {
	$("#funfact").hide();

	$("#contact-form").on('submit', function(e) {
		var name = $("#name").val();
		var email = $("#email").val();			
		var org = $("#org").val();
		var subject = $("#subject").val();
		var message = $("#message").val();		
		if (name === "") {
			alert("You must provide your name");
			e.preventDefault();
			return;
		}
		if (email === "") {
			alert("You must provide your email");
			e.preventDefault();
			return;
		}
		var at = email.indexOf("@");
		var dot = email.lastIndexOf(".");
		if (at < 1 || dot < at + 2 || email.length <= dot + 2)
		{
			alert("Invalid email address");
			$("#email").val("");
			e.preventDefault();
			return;
		}
		if (subject === "") {
			alert("You must provide a subject");
			e.preventDefault();
			return;
		}
		if (message === "") {
			alert("You must provide a message");
			e.preventDefault();
			return;
		}	
	});

	$("#starwars").on('click', function() {
		var categories = ["people", "planets", "species", "starships", "vehicles"];
		var labels = ["character", "planet", "species", "starship", "vehicle"];
		var numPages = [9, 7, 4, 4, 4];
		var category = Math.floor(Math.random() * 5);
		var page = Math.floor(Math.random() * numPages[category]) + 1;
		switch(category) {
			case 0:
			case 2:
				$.ajax({
					type: 'GET',
					url: 'http://swapi.co/api/' + categories[category] + "/?page=" + page + "",
					dataType: 'json',
					success: function(list) {
						console.log(list);
						var data = list.results[Math.floor(Math.random() * list.results.length)];
						console.log(data);
						var info = {};
						info["category"] = labels[category];
						$.each(data, function(key, value) {
							if (value !== "unknown" && key !== "created" && key !== "edited" && value != "n/a" && value.constructor !== Array && !value.match("^http://swapi.co/api/"))
								info[key] = value;
						});
						if (data.homeworld !== "unknown")
						$.ajax({
							type: 'GET',
							url: data.homeworld,
							dataType: 'json',
							success: function(planet) {
								info["home_planet"] = planet.name;
								formatAndPrint(info);
							},
							error: function() {
								formatAndPrint(info);
							}
						})
					}
				});
				break;
			case 1:
			case 3:
			case 4:
				$.ajax({
					type: 'GET',
					url: 'http://swapi.co/api/' + categories[category] + "/?page=" + page + "",
					dataType: 'json',
					success: function(list) {
						var data = list.results[Math.floor(Math.random() * list.results.length)];
						var info = {};
						info["category"] = labels[category];
						$.each(data, function(key, value) {
							if (value !== "unknown" && key !== "created" && key !== "edited" && value != "n/a" && value.constructor !== Array && !value.match("^http://swapi.co/api/"))
								info[key] = value;
						});
						formatAndPrint(info);
					}
				});
				break;
		}
	});

function formatAndPrint(info)
{
	var text = "<p><b>Did you know these facts about the Star Wars " + info.category + " " + info.name + "?</b></p><ul>";
	$.each(info, function(key, value) {
		if (key === "mass")
			text += "<li><b>" + key.replace(/_/g, " ") + "</b>: " + value + " kg</li>";
		else if (key === "height" || key === "average_height")
			text += "<li><b>" + key.replace(/_/g, " ") + "</b>: " + value + " cm</li>";
		else if (key === "diameter")
			text += "<li><b>" + key.replace(/_/g, " ") + "</b>: " + value + " km</li>";
		else if (key === "rotation_period")
			text += "<li><b>" + key.replace(/_/g, " ") + "</b>: " + value + " standard hours</li>";
		else if (key === "orbital_period")
			text += "<li><b>" + key.replace(/_/g, " ") + "</b>: " + value + " standard days</li>";
		else if (key === "gravity")
			text += "<li><b>" + key.replace(/_/g, " ") + "</b>: " + value + " standard Gs</li>";
		else if (key === "surface_water")
			text += "<li><b>" + key.replace(/_/g, " ") + "</b>: " + value + " %</li>";
		else if (key === "average_lifespan")
			text += "<li><b>" + key.replace(/_/g, " ") + "</b>: " + value + " years</li>";
		else if (key === "length")
			text += "<li><b>" + key.replace(/_/g, " ") + "</b>: " + value + " m</li>";
		else if (key === "MGLT")
			text += "<li><b>Maximum number of Megalights per hour: </b> " + value + " years</li>";
		else if (key !== "name" && key !== "category")
			text += "<li><b>" + key.replace(/_/g, " ") + "</b>: " + value + "</li>";
	});
	text += "</ul>";
	$("#funfact").hide().html(text).fadeIn("slow");

}

})();