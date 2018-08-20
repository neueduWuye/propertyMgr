<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<script type="text/javascript" src="js/jquery.js","js/jquery-1.4.2.min.js">
		
	</script>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <title>费用查询</title>
	<link type="text/css" href="css/table.css" rel="stylesheet" />
	
</head>
<body>
	<h1>费用查询</h1>
	<table class="bordered"> 
	<tr>
		<th style="width:100px;text-align:center;">房间号</th><td id="number" style="width: 100px;"></td>
		<th style="width:100px;text-align:center;">时间</th>
		<td style="width:50px;"><input type="date" id="date1"/></td>
		<td><input style="width:50px;" type="button" value="查询" id="search"/></td>
	</tr>
	</table>
	<table class="bordered"> 
		<thead>
		<tr>
			<th>维修费</th>        
			<th>物业费</th>
			<th>固定车位费</th>
			<th>其他</th>
			<th>合计</th>
		</tr>
		</thead>
		<tr> 
			<td ><span id="repair"></span></td>  
			<td ><div id="pro"></div></td>  
			<td ><div id="park"></div></td>  
			<td ><div id="other"></div></td>  
			<td  ><div id="all"></div></td>  
						
		</tr>        
	</table>
	<table class="bordered">
		<tr>
			<th style="width:100px;text-align:center;">已付</th><td id="ed"></td>
			<th style="width:100px;text-align:center;">未付</th><td style="width:120px;text-align:center;" id="not"></td>
		</tr>
		<button style="width: 115px;height: 30px;" class="pay1">支付</button>
		<tr>
			<th style="width:100px;text-align:center;">支付状态</th><td id="sta">未支付</td>
			<th style="width:100px;text-align:center;">付款时间</th><td style="width:120px;text-align:center;" id="date"></td>
		</tr>
	</table>
	
</body> 
</html>
<script type="text/javascript">
	$(function(){
		alert("xxx") 
		$("#search").click(function(){
		var num,repair=1,pro=2,park=3,other=4;
		$("#number").html();
		$("#repair").html();
		$("#pro").html();
		$("#park").html();
		$("#other").html();
		$("#number").html();
			alert($("#date1").val())
			$("#all").html(repair+pro+park+other);
		})
		$(".pay1").click(function(){
			var todo; 
			todo=prompt("请支付");
			$("#ed").html(todo);
			$("#sta").html("已支付")
			$("#date").html(Date) 
		})
	})
</script>