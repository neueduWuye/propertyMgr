﻿<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <title>修改消息</title>
	<link type="text/css" href="css/table.css" rel="stylesheet" />
</head>
<body>
	<h1>修改消息</h1>
	<table class="bordered new-bordered">
		<tr>
			<th>编号</th>         
			<td><input type="text"></td>
		</tr>	
		<tr>
			<th>社区号</th>         
			<td><input type="text"></td>
		</tr>
		<tr>
			<th>日期</th>         
			<td><input type="text"></td>
		</tr>    
		<tr>
			<th>主题</th> 
			<td><input type="text"></td>
		</tr>
		<tr>
			<th>内容</th> 
			<td><textarea id="admin-textarea"></textarea></td>
		</tr>
	</table>
	<a id="submit" href="user-alter.html">修改</a>
</body>
</html>