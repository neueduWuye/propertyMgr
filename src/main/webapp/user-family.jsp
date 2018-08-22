<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <title>家庭成员</title>
	<link type="text/css" href="css/table.css" rel="stylesheet" />
</head>
<body>
	<h1>家庭成员信息</h1>
	
	<table class="bordered rules-bordered">
		<thead>
		<tr>
			<th>姓名</th>        
			<th>性别«</th>
			<th>生日</th>      
			<th>与业主关系</th>
			<th>电话号码</th>
			<th>身份证号</th>
			<th>编辑</th>      
			<th>删除</th>			
		</tr>
		</thead>
		<tr> 
			<td id="name">111</td>  
			<td id="sex">辽A</td>		
			<td id="birth">22</td>  
			<td id="ralation">30</td> 
			<td id="phone">11</td>
			<td id="email">11</td>
			<td><a id="table-submit" name="edit">编辑</a></td>
			<td><a id="table-submit" name="delete">删除</a></td>     			
		</tr>
	</table>
	<table class="page">
		<tr>
			<td><a href="">首页</a></td>
			<td><a href="">上页</a></td>
			<td style="width:50px;">1/1</td>
			<td><a href="">下页</a></td>
			<td><a href="">尾页</a></td>
		</tr>
	</table>
	<a id="submit" href="user-newfamily.jsp">新增</a>
</body>
</html>