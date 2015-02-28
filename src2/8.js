

$(function () {
		Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function(color) {
    return {
        radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
        stops: [
            [0, color],
            [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        ]
    };
});
    $('#container8').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '用户网络分布'
        },
         credits: {          enabled:false}, 
        tooltip: {
    	    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    formatter: function() {
                        return '<b>'+ this.point.name +'</b>: '+ this.point.y;
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '网络类型',
            data: [
                ['2G用户',   453],
                ['3G用户',       26],
                ['WIFI用户',    81],
                ['其他类型',     3]

            ]
        }]
    });
});				