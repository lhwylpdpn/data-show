$(function() {
	var seriesOptions = [],
		yAxisOptions = [],
		seriesCounter = 0,
		names = ['private'];
	
	var path = "../json/";
	$.each(names, function(i, name) {
	
		$.getJSON(path+ name.toLowerCase() +'.json',	function(result) {
			
			var data = result;

	

			// As we're loading the data asynchronously, we don't know what order it will arrive. So
			// we keep a counter and create the chart when all the data is loaded.
			seriesCounter++;

			if (seriesCounter == names.length) {
			
				document.getElementById("data1").innerHTML='<h3>'+result.all_in+'</h3>'+"<div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width: "+parseInt(result.all_in/4000)+"%;'>"+parseInt(result.all_in/4000)+"%</div></div>"
				document.getElementById("data2").innerHTML='<h3>'+parseFloat(result.weixin+result.yuebao+result.xianjin+result.stock+result.credit+result.loans)+'</h3>'+"<div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width: "+parseInt(parseFloat(result.weixin+result.yuebao+result.xianjin+result.stock+result.credit+result.loans)/3000)+"%;'>"+parseInt(parseFloat(result.weixin+result.yuebao+result.xianjin+result.stock+result.credit+result.loans)/3000)+"%</div></div>"
				document.getElementById("data3").innerHTML='<h3>'+result.fixedcharges+'</h3>'+"<div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width: "+parseInt(result.fixedcharges/250)+"%;'>"+parseInt(result.fixedcharges/250)+"%</div></div>"
				document.getElementById("data4").innerHTML='<h3>'+parseInt(result.stock-96244)+'</h3>'+"<div class='progress'><div class='progress-bar' role='progressbar' aria-valuenow='60' aria-valuemin='0' aria-valuemax='100' style='width: "+parseInt((result.stock-96244)/962.44)+"%;'>"+parseInt((result.stock-96244)/962.44)+"%</div></div>"
				document.getElementById("data5").innerHTML='<h1>'+result.gongjijin+'</h1>'
				document.getElementById("data6").innerHTML='<h1>'+result.tizhong+'</h1>'
				document.getElementById("data7").innerHTML=" <a href='#'' class='list-group-item list-group-item-success'>日常生活支出（广发基金天天）<span class='badge'>"+result.salary_richang+"%</span><span class='badge'>"+parseInt(result.salary_richang*result.salary/100)+"</span></a>"
				document.getElementById("data7").innerHTML=document.getElementById("data7").innerHTML+"<a href='#'' class='list-group-item list-group-item-sucinfocess'>定期固定存款（余额宝）<span class='badge'>"+result.salary_cunkuan+"%</span><span class='badge'>"+parseInt(result.salary_cunkuan*result.salary/100)+"</span></a>"
				document.getElementById("data7").innerHTML=document.getElementById("data7").innerHTML+"<a href='#'' class='list-group-item list-group-item-warning'>股市投资<span class='badge'>"+result.salary_touzi+"%</span><span class='badge'>"+parseInt(result.salary_touzi*result.salary/100)+"</span></a>"
				document.getElementById("data7").innerHTML=document.getElementById("data7").innerHTML+"<a href='#'' class='list-group-item list-group-item-danger'>学习基金（华夏基金）<span class='badge'>"+result.salary_study+"%</span><span class='badge'>"+parseInt(result.salary_study*result.salary/100)+"</span></a>"
				document.getElementById("data7").innerHTML=document.getElementById("data7").innerHTML+"<a href='#'' class='list-group-item list-group-item-dark'>老人赡养<span class='badge'>"+result.salary_muqin+"%</span><span class='badge'>"+parseInt(result.salary_muqin*result.salary/100)+"</span></a>"

//"                <a href="#" class="list-group-item list-group-item-success">日常生活支出<span class="badge">11500</span><span class="badge">11500</span></a>
 //               <a href="#" class="list-group-item list-group-item-info">电费余额  <span class="badge">532.5</span></a>
    //            <a href="#" class="list-group-item list-group-item-warning">水费和煤气费余额   <span class="badge">99</span></a>
  //              <a href="#" class="list-group-item list-group-item-danger">固定购物账户余额  <span class="badge">1934.5</span></a>
      //          <a href="#" class="list-group-item list-group-item-dark">物业费待缴纳日期  <span class="badge">2016-1-3</span></a>"



			}
		});
	});

});	