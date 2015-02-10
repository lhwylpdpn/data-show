

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
    $('#container5').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '用户生命周期'
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
            name: '用户占比',
            data: [
                ['1日用户数',   453],
                ['2~3日用户数',       26],
                ['4~7日用户数',    81],
                ['8~15日用户数',     3],
                ['15~30日用户数',   7],
                ['30~90日用户数',   7],
                ['90日以上用户数',   1]
            ]
        }]
    });
});				