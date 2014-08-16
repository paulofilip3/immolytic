// charts

var
	//berlinChart = dc.geoChoroplethChart("#s1"),
	chart1 = dc.barChart("#s1"),
	chart2 = dc.pieChart("#s2"),
	chart3 = dc.bubbleChart("#s3"),
	chart4 = dc.bubbleChart("#s4"),
	chart5 = dc.bubbleChart("#s5"),
	chart6 = dc.bubbleChart("#s6"),
	chart7 = dc.bubbleChart("#s7"),
	chart8 = dc.bubbleChart("#s8");

d3.json("/js/data.json", function (error, json) {
	var data = crossfilter(json);

	var dimDistrict = data.dimension(function(d){
		return d.quarter;
	});
	var groupDistrictPropertyCount = dimDistrict.group().reduceCount();

	//d3.json("/js/us-states.json", function (error, berlinJson) {
		chart1
			//.width(990)
			.height(300)
                	.dimension(dimDistrict)
                	.group(groupDistrictPropertyCount)
                	//.overlayGeoJson(berlinJson.features, "district", function(d) {
                        //	return d.properties.Name;
			//})
			.x(d3.scale.ordinal())
			.xUnits(dc.units.ordinal)
			.title(function (d) {
			    return d.value;
			})
			//.xAxis().ticks(4)
			.elasticX(true)
			.render();
		chart2
			//.width(990)
			.height(300)
                	.dimension(dimDistrict)
                	.group(groupDistrictPropertyCount)
                	//.overlayGeoJson(berlinJson.features, "district", function(d) {
                        //	return d.properties.Name;
			//})
			//.x(d3.scale.ordinal())
			//.xUnits(dc.units.ordinal)
			.title(function (d) {
			    return d.value;
			})
			//.xAxis().ticks(4)
			//.elasticX(true)
			.render();
	//});
});
