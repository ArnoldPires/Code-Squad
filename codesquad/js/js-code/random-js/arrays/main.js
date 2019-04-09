// Replace
		function replace(){
			capitalizeColors[2] = "ORANGE";
			document.getElementById("map").innerHTML = capitalizeColors;
		}
		// Reverse
		function reverse(){
			capitalizeColors.reverse();
			document.getElementById("reverse").innerHTML = capitalizeColors;
		}
		// Sort
		function sort(){
			capitalizeColors.sort();
			document.getElementById("sort").innerHTML = capitalizeColors;
		}
		// Mapping
		let colors = ["red", "blue", "green","indigo", "violet"];
		let capitalizeColors = [];
		for(i=0; i < colors.length; i++){
			capitalizeColors[i] = colors[i].toUpperCase();
		};
		document.getElementById("map").innerHTML = capitalizeColors;
