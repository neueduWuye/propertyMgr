<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <title>新增用户信息</title>
	<link type="text/css" href="css/table.css" rel="stylesheet" />
	<link type="text/css" href="css/mail.css" rel="stylesheet" />
</head>
<body>
	<h1>新增用户信息</h1>
	<form action="http://localhost:8080/PropertyMgr/newOwner">
	<table class="bordered new-bordered" >
		
		<tr>
			<th>房间号</th>        
			<td><input type="text" name="number"></td>
		</tr>       
		
		<tr>
			<th>姓名</th>         
			<td><input type="text" name="name"></td>
		</tr>
		<tr>
			<th>密码</th>         
			<td><input type="text" name="pwd"></td>
		</tr>
		<tr>
			<th>确认密码</th>         
			<td><input type="text" name="pwd1"></td>
		</tr>
		
	</table>
	<input id="submit" type="submit" value="提交">
	</form>
</body>
</html>
<script type="text/javascript">
	$(function(){
		
	})
</script>