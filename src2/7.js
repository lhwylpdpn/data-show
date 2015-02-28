$(function () {                                                                
    $('#container7').highcharts({                                           
        chart: {                                                           
            type: 'bar'                                                    
        },                                                                 
        title: {                                                           
            text: '机型分布状况'                    
        },                                                                 
        subtitle: {                                                        
            text: ''                                  
        },                                                                 
        xAxis: {                                                           
            categories: ['小米', 'iPhone4S', 'iPhone5C', '三星SM344', '小米2'],
            title: {                                                       
                text: null                                                 
            }                                                              
        },    
         credits: {          enabled:false},                                                              
        yAxis: {                                                           
            min: 0,                                                        
            title: {                                                       
                text: '用户数',                             
                align: 'high'                                              
            },                                                             
            labels: {                                                      
                overflow: 'justify'                                        
            }                                                              
        },                                                                 
        tooltip: {                                                         
            valueSuffix: ' millions'                                       
        },                                                                 
        plotOptions: {                                                     
            bar: {                                                         
                dataLabels: {                                              
                    enabled: true                                          
                }                                                          
            }                                                              
        },                                                                 
        legend: {                                                          
            layout: 'vertical',                                            
            align: 'right',                                                
            verticalAlign: 'top',                                          
            x: -40,                                                        
            y: 100,                                                        
            floating: true,                                                
            borderWidth: 1,                                                
            backgroundColor: '#FFFFFF',                                    
            shadow: true                                                   
        },                                                                 
        credits: {                                                         
            enabled: false                                                 
        },                                                                 
        series: [{                                                         
            name: '新增用户数',                                             
            data: [107, 31, 635, 203, 2]                                   
        }, {                                                               
            name: '活跃用户数',                                             
            data: [133, 156, 947, 408, 6]                                  
        }, {                                                               
            name: '启动次数',                                             
            data: [973, 914, 4054, 732, 34]                                
        }]                                                                 
    });                                                                    
});                                                                                                                                              				