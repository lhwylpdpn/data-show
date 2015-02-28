$(function() {
	var seriesOptions = [],
		yAxisOptions = [],
		seriesCounter = 0,
		names = ['private'];
	
	var path = "../json/";
	$.each(names, function(i, name) {
	
		$.getJSON(path+ name.toLowerCase() +'.json',	function(result) {
			var data = result.dat3a;
			seriesOptions[i] = {
				name: name,
				data: data
			};

			// As we're loading the data asynchronously, we don't know what order it will arrive. So
			// we keep a counter and create the chart when all the data is loaded.
			seriesCounter++;

			if (seriesCounter == names.length) {
			
				document.getElementById("data1").innerHTML='<h1>'+result.Passiveincome+','+result.Passiveper+'</h1>'
				document.getElementById("data2").innerHTML='<h1>'+result.money+','+result.moneyper+'</h1>'
				document.getElementById("data3").innerHTML='<h1>'+result.in_out_in+','+result.in_out_inper+','+result.in_out_out+','+result.in_out_outper+'</h1>'
				document.getElementById("data4").innerHTML='<h1>'+result.weight+'</h1>'
				document.getElementById("data5").innerHTML='<h1>'+result.salary+','+result.salaryper+'</h1>'
			}
		});
	});

});	