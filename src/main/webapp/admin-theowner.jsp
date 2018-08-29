<%-- <%@ taglib uri=http://java.sun.com/jsp/jstl/fmt" pr" prefix="fmt"%> --%>
 <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <title>用户管理</title>
	<link type="text/css" href="css/table.css" rel="stylesheet" />
	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
</head>
<body>
	<h1>用户管理</h1>
	<form action="http://localhost:8080/PropertyMgr/getTheOwner">
	<table class="bordered new-bordered" >
		<tr>
			<td><input id="input" name="nORn" type="text" style="width:200px;color:gray;height:20px;font-size:18px;" 
			value="姓名/房号" onfocus="if(this.value=='姓名/房号'){this.value=''};this.style.color='black';"
			onblur="if(this.value==''||this.value=='姓名/房号'){this.value='姓名/房号';this.style.color='gray';}"/>
			<input id="inquire-submit" class="search" type="submit" ></input></td>
		</tr>
	</table>
	</form>
	
	
	
	<table class="bordered rules-bordered" id="tb" style="padding-left: 0">
		<thead>
		<tr>      
			<th>房间号</th>
			<th>姓名</th>
			<th>密码</th>      
			<th>性别</th>
			<th>电话</th>
			<th>邮箱</th>      
			<th>生日</th>
			<th>家庭人数</th>    
			<th>删除</th>			
		</tr>
		</thead>
		<tr> 
			<td>${owner.number }</td>  
			<td>${owner.name }</td>		
			<td>${owner.pwd }</td>  
			<td>${owner.sex }</td> 
			<td>${owner.phone }</td>
			<td>${owner.email }</td>
			<td>${owner.birthday }</td> 
			<td>${owner.family }</td>
			<td><a id="table-submit">删除</a></td>     			
		</tr>
	</table>
	<table class="page">
		<tr>
			<td><a href="">首页</a></td>
			<td><a href="">上页</a></td>
			<td style="width:50px;">1/1</td>
			<td><a href="">下页</a></td>
			<td><a href="">尾页</a>
			<c:forEach begin="1" end="${pager.pageCount }" varStatus="obj">
	 	<a href="${pageContext.request.contextPath }/usertype/getPager/${pager.pageSize }/${obj.index }">${obj.index }</a>
	</c:forEach></td>
			
		</tr>
	</table>
	<a id="submit" href="admin-newowner.jsp">新增</a>
</body>
<script type="text/javascript">


	/* $(function(){
		$.ajax({
			type:"get",
			url:"http://localhost:8080/PropertyMgr/getTheOwner",
			// data:{"list":list},
			 contentType: "application/json; charset=utf-8",
            dataType: "json",
			success:function (data)
			{
				 $('#tb tr:gt(0)').remove();//删除之前的数据
	                var s = '';
				 	var sex,birth;
	                for (var i = 0; i < data.length; i++){
	                	if(data[i].sex==1){
		                	sex="男";
		                	
		                }else{
		                	sex="女";
		                }
	                	//+ "<fmt:formatDate value="+" pattern='yyyy-mm-dd' /> "
		                s += '<tr><td>' + data[i].number + '</td><td>' + data[i].name + '</td><td>' + data[i].pwd + '</td>'
		                    + '<td>' +sex+ '</td><td>' + data[i].phone+ '</td><td>' + data[i].email 
		                    + '</td><td>' +data[i].birthday + '</td><td>' + data[i].family 
		                    +'<td><a id="table-submit"  href="http://localhost:8080/PropertyMgr/deleteOwner?number='+data[i].number+'">删除</a></td> </tr>';
		            
		                    
		               
	                }  $('#tb').append(s);
	                
			},
			error:function(){
				alert("没有值")	
			}
			})
		
		$(".search").click(function() {
			var input= $("#input").val();
			if(input){
				
			} 
		})
	})*/
		
</script>
</html>
