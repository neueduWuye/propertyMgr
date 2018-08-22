<!DOCTYPE html>
 <%@ page contentType="text/html;charset=UTF-8" trimDirectiveWhitespaces="true" language="java" %> 
<html>
	<head>
		 
		<title>欢迎登陆东软物业管理系统</title>
		<link rel="stylesheet" href="css/style02.css" />
		<script type="text/javascript" src="js/jquery.js" ></script>
		<script type="text/javascript" src="js/cloud.js" ></script>
		<script type="text/javascript " src="js/jquery-3.3.1.min.js"></script>
	</head>
	<body style="background-color:#1c77ac ; background-image: url(img/light.png);background-repeat: no-repeat;background-position: center top;overflow: hidden;">
		<form action="http://localhost:8080/PropertyMgr/getManager">
		<div id="mainBody">
			<div id="cloud1" class="cloud"></div>
			<div id="cloud2" class="cloud"></div>
		</div>
		<div class="logintop">
			<span>欢迎登陆东软物业管理系统</span>
		</div>
		<div class="loginbody">
			<div class="systemlogo">
				<img src="/img/图标2.png"/><p class="systemlogo2">东软物业管理系统</p>
			</div>
			
			<div class="loginbox">
				<ul>
					<li>
						<input type="text" class="loginuser" name="name" placeholder="用户名" value="" onclick=""/><span id="nameMsg"></span>
					</li>
					<li>
						<input type="password" class="loginpwd" name="pwd" placeholder="密码" onclick=""/><span id="pwdMsg"></span>
					</li>
					<li class="yzm">
						<span>
							<input name="" type="text" placeholder="验证码" value="" onclick=""/><span id="verifyMsg"></span>
						</span>
						<cite>X3D5S</cite>
					</li>
					<li id="usertype">
						<input name="type" type="radio" class="logintype" value="0"/><span>管理员</span>
						<input name="type" type="radio" class="logintype" value="1"/><span>业主</span>
					</li>
					<li>
						<input type="submit" class="loginbtn" name="" id="login" value="登录"/>
						<input type="submit" class="loginregist" name="" id="regist" value="注册"/>
					</li>
				</ul>
			</div>		
		</div>
		</form>
	</body>
	<script type="text/javascript">

	</script>
</html>
