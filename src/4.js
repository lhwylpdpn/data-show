$(function () {
    $('#container4').highcharts({
        chart: {
            zoomType: 'xy'
        },
        title: {
            text: '用户遗失漏斗'
        },
        subtitle: {
            text: ''
        },
         credits: {          enabled:false}, 
        xAxis: [{
            categories: ['首日新增', '+1日', '+2日', '+3日', '+4日', '+5日',
                '+6日', '+7日']
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}°%',
                style: {
                    color: '#89A54E'
                }
            },
            title: {
                text: '用户遗失数',
                style: {
                    color: '#89A54E'
                }
            }
        }, { // Secondary yAxis
            title: {
                text: '用户遗失百分比',
                style: {
                    color: '#4572A7'
                }
            },
            labels: {
                format: '{value} 人数',
                style: {
                    color: '#4572A7'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor: '#FFFFFF'
        },
        series: [{
            name: '用户遗失数',
            color: '#4572A7',
            type: 'column',
            yAxis: 1,
            data: [1439.9, 171.5, 106.4, 89.2, 44.0, 36.0, 5.6, 1.5],
            tooltip: {
                valueSuffix: ' 人数'
            }

        }, {
            name: '用户遗失百分比',
            color: '#89A54E',
            type: 'spline',
            data: [137.0, 36.9, 29.5, 14.5, 11.2, 5.5, 2.2, 0.5],
            tooltip: {
                valueSuffix: '%'
            }
        }]
    });
});
                