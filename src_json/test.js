$(function() {
	var seriesOptions = [],
		yAxisOptions = [],
		seriesCounter = 0,
		names = ['panel1'];
	
	var path = "../json/";
	$.each(names, function(i, name) {
	
		$.getJSON(path+ name.toLowerCase() +'.json',	function(result) {
			var data = result.data;
			seriesOptions[i] = {
				name: name,
				data: data
			};

			// As we're loading the data asynchronously, we don't know what order it will arrive. So
			// we keep a counter and create the chart when all the data is loaded.
			seriesCounter++;

			if (seriesCounter == names.length) {
				document.getElementById("data1").innerHTML='<h1>'+seriesOptions[0].data+'</h1>'
				
			}
		});
	});

});	