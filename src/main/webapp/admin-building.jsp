<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <title>住宅楼管理</title>
	<link type="text/css" href="css/table.css" rel="stylesheet" />
</head>
<body>
	<h1>住宅楼管理</h1>
	<table class="bordered new-bordered">
		<tr>
			<td><input type="text" style="width:200px;color:gray;height:20px;font-size:18px;" value="车牌号" onfocus="if(this.value=='车牌号'){this.value=''};this.style.color='black';" onblur="if(this.value==''||this.value=='车牌号'){this.value='车牌号';this.style.color='gray';}"/><a id="inquire-submit">查询</a></td>
		</tr>
	</table>
	<table class="bordered rules-bordered">
		<thead>
		<tr>
			<th>编号</th>        
			<th>楼名</th>
			<th>层数</th>      
			<th>房间数</th>
			<th>社区号</th>
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