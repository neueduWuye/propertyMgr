<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <title>投诉管理</title>
	<link type="text/css" href="css/table.css" rel="stylesheet" />
</head>
<body>
	<h1>投诉管理</h1>
	<table class="bordered new-bordered">
		<tr>
			<td><input type="text" style="width:175px;color:gray;height:20px;font-size:18px;" value="房间号/主题" onfocus="if(this.value=='房间号/主题'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='房间号/主题'){this.value='房间号/主题';this.style.color='gray';}"/><a id="inquire-submit">查询</a></td>
		</tr>
	</table>
	<table class="bordered rules-bordered">
		<thead>
		<tr>
			<th>用户名</th>        
			<th>房间号</th>
			<th>日期</th>      
			<th>主题</th>
			<th>社区号</th>
			<th>状态</th>
			<th>编辑</th>      
			<th>删除</th>			
		</tr>
		</thead>
		<tr> 
			<td>111</td>  
			<td>辽A</td>		
			<td>22</td>  
			<td>30</td> 
			<td>11</td>
			<td>11</td>
			<td><a id="table-submit">编辑</a></td>
			<td><a id="table-submit">删除</a></td>     			
		</tr>
	</table>
	<table class="page">
		<tr>
			<td><a href="">首页</a></td>
			<td><a href="">上页</a></td>
			<td style="width:50px;">1/5</td>
			<td><a href="">下页</a></td>
			<td><a href="">尾页</a></td>
		</tr>
	</table>
	<a id="submit" href="admin-newparking.html">新增</a>
</body>
</html>