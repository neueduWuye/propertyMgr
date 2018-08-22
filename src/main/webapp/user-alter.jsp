<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <title>修改个人信息</title>
	<link type="text/css" href="css/table.css" rel="stylesheet" />
	<link type="text/css" href="css/mail.css" rel="stylesheet" />
	<script type="text/javascript" src="js/jquery.js" ></script>
</head>
<body>
	<h1>修改个人信息</h1>
	<table class="bordered new-bordered" >
		<tr>
			<th>房号</th>        
			<td><input type="text" id="number"></td>
		</tr>        
		<tr>
			<th>姓名</th>         
			<td><input type="text" id="name"></td>
		</tr>
		<tr>
			<th>密码</th>         
			<td><input type="password" id="pwd1"></td>
		</tr>    
		<tr>
			<th>确认密码</th>         
			<td><input type="password" id="pwd2" ><span style="position: absolute;left: 550px;bottom: 330px;" id="alter" ></span></td>
			
		</tr> 
		<tr>
			<th>性别</th>         
			<td><input type="text" id="sex"></td>
		</tr>  
		<tr>
			<th>电话号码</th> 
			<td><input type="text" id="phone"></td>
		</tr>
		<tr>
			<th>电子邮件</th> 
			<td><input type="text" id="email"></td>
		</tr>
	</table>
	<a id="submit" href="user-information.jsp">确认</a>
</body>
</html>
<script type="text/javascript">
	
	$(function(){
		$("#pwd2").blur(function(){
		var pwd1=document.getElementById("pwd1");
		var pwd2=document.getElementById("pwd2");
		if($("#pwd1").val()!=$("#pwd2").val()){
			$("#alter").html("密码不一致").css("color","red");
			//$("#alter").CSS("color","red");
		}else{
			$("#alter").html("")
		}
	
		})
		
		
	})
		
</script>