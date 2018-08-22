<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <title>个人信息</title>
	<link type="text/css" href="css/table.css" rel="stylesheet" />
	<script type="text/javascript" src="js/jquery.js">
		
	</script>
</head>
<body>
	<h1>个人信息</h1>
	<table class="bordered new-bordered">
		<tr>
			<th>房号</th>        
			<td id="number"></td> 
		</tr>        
		<tr>
			<th>姓名</th>         
			<td id="name"></td>
		</tr>
		<tr>
			<th>性别</th>         
			<td id="sex"></td>
		</tr>  
		<tr>
			<th>生日</th> 
			<td id="birth"></td>
		</tr>
		<tr>
			<th>身份证</th> 
			<td id="idcard"></td>
		</tr>
		<tr>
			<th>电话号码</th> 
			<td id="phone"></td>
		</tr>
		<tr>
			<th>电子邮件</th> 
			<td id="email"></td>
		</tr>
	</table>
	<a id="submit" href="user-alter.jsp">修改</a>
</body>
</html>
<script type="text/javascript">
	$(function(){
		$("#number").html();
		$("#name").html();
		$("#sex").html();
		$("#birth").html();
		$("#idcard").html();
		$("#phone").html();
		$("#email").html();
	})
</script>