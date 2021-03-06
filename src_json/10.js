$(function () {                                                                
    $('#container10').highcharts({                                           
        chart: {                                                           
            type: 'bar'                                                    
        },                                                                 
        title: {                                                           
            text: '操作系统分布'                    
        },                                                                 
        subtitle: {                                                        
            text: ''                                  
        },                                                                 
        xAxis: {                                                           
            categories: ['android-360', 'android-百度', '苹果appstone', '苹果同步推', 'android-豌豆荚'],
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
            data: [133, 156, 31, 408, 6]                                  
        }, {                                                               
            name: '启动次数',                                             
            data: [973, 914, 44, 732, 34]                                
        }]                                                                 
    });                                                                    
});                                                                                                                                              				
