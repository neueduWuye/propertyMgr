<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <title>智能社区管理系统</title>
	<link rel="stylesheet" href="css/style.css" type="text/css" />
	<link type="text/css" href="css/index.css" rel="stylesheet" />
    <link type="text/css" href="css/menu.css" rel="stylesheet" />
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/menu.js"></script>
	<script type="text/javascript" src="js/plugins.js"></script>
</head>
<body>
<div id="container"> 
	<div id="header">
		<div id="header-main"> 
			<div id="menu">
				<ul class="menu">
					<li><a href="#" class="parent"><span>楼盘信息</span></a>
						<div>
							<ul>
								<li><a href="#" class="parent"><span>项目介绍</span></a>
									<div>
										<ul>
										<li><a href="#"><span>设计理念</span></a></li>
										<li><a href="#"><span>楼盘简介</span></a></li>
										<li><a href="#"><span>区位优势</span></a></li>
										</ul>
									</div>
								</li>
								<li><a href="#" class="parent"><span>建筑品质</span></a>
									<div>
										<ul>
										<li><a href="#"><span>项目规划</span></a></li>
										<li><a href="#"><span>技术指标</span></a></li>
										<li><a href="#"><span>建筑科技</span></a></li>
										<li><a href="#"><span>配套设施</span></a></li>
										<li><a href="#"><span>开发团队</span></a></li>
										</ul>
									</div>
								</li>
								<li><a href="#" class="parent"><span>景观环境</span></a>
									<div>
										<ul>
										<li><a href="#"><span>设计理念</span></a></li>
										<li><a href="#"><span>黄河北岸</span></a></li>
										<li><a href="#"><span>湿地公园</span></a></li>
										<li><a href="#"><span>山水映像</span></a></li>
										<li><a href="#"><span>古曲观园</span></a></li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</li>
					<li><a href="#" class="parent"><span>相关配套</span></a>
						<div>
							<ul>
								<li><a href="#" class="parent"><span>公共配套</span></a>
									<div>
										<ul>
										<li><a href="#"><span>商务写字楼</span></a></li>
										<li><a href="#"><span>商圈</span></a></li>
										<li><a href="#"><span>周边配套</span></a></li>
										</ul>
									</div>
								</li>
								<li><a href="#"><span>物业管理</span></a></li>
							</ul>
						</div>
					</li>
					<li><a href="#" class="parent" class="last"><span>用户中心</span></a>
						<div>
							<ul>
								<li><a href="#"><span>户型体验</span></a></li>
								<li><a href="#"><span>售楼中心</span></a></li>
								<li><a href="#"><span>业主论坛</span></a></li>
							</ul>
						</div>
					</li>
				</ul>
			</div>
			<div id="login">
				<div id="tip">密码错误！</div>
				<input id="username" type="text" name="username" style="color:gray" value="用户名" onfocus="if(this.value=='用户名'){this.value='';this.style.color='black';}" onblur="if(this.value==''||this.value=='用户名'){this.value='用户名';this.style.color='gray';}"/>
				<input id="password" type="text" name="password" style="color:gray" value="密码" onfocus="if(this.value=='密码'){this.value=''};this.style.color='black';this.type='password';" onblur="if(this.value==''||this.value=='密码'){this.value='密码';this.style.color='gray';this.type='text';}"/>
				<a id="login-button"></a>
				<div id="link">
					<a id="losepassword"></a>
				</div>
			</div>
		</div>
	</div>
	<div id="content">
		<div id="content-main">
		</div>
	</div>
	<div id="footer">
		<div id="footer-images">
			<div class="container clearfix">                                                  
                <div style="position: relative;">         
                        <h4>广告位<span>招租</span></h4>                   
                        <ul id="clients-scroller" class="our-clients clearfix">                     
                            <li><a href=""><img src="images/ad/1.jpg" alt="Ad 1" title="Ad 1" /></a></li>
                            <li><a href=""><img src="images/ad/2.jpg" alt="Ad 2" title="Ad 2" /></a></li>
                            <li><a href=""><img src="images/ad/3.jpg" alt="Ad 3" title="Ad 3" /></a></li>
                            <li><a href=""><img src="images/ad/4.jpg" alt="Ad 4" title="Ad 4" /></a></li>
                            <li><a href=""><img src="images/ad/5.jpg" alt="Ad 5" title="Ad 5" /></a></li>
                            <li><a href=""><img src="images/ad/6.jpg" alt="Ad 6" title="Ad 6" /></a></li>
                            <li><a href=""><img src="images/ad/7.jpg" alt="Ad 7" title="Ad 7" /></a></li>
                            <li><a href=""><img src="images/ad/8.jpg" alt="Ad 8" title="Ad 8" /></a></li>
                            <li><a href=""><img src="images/ad/9.jpg" alt="Ad 9" title="Ad 9" /></a></li>
                            <li><a href=""><img src="images/ad/10.jpg" alt="Ad 10" title="Ad 10" /></a></li>                     
                        </ul>                     
                        <div class="widget-scroll-prev" id="ourclients_prev"></div>
                        <div class="widget-scroll-next" id="ourclients_next"></div>                   
                        <script type="text/javascript">                
                            jQuery(document).ready(function($) {                        
                                var clientsCarousel = $("#clients-scroller");                         
                                clientsCarousel.carouFredSel({
                                    width : "100%",
                                    height : "auto",
                                    circular : false,
                                    responsive : true,
                                    infinite : false,
                                    auto : false,
                                    items : {
                                        width : 160,
                                        visible: {
                                            min: 1,
                                            max: 6
                                        }
                                    },
                                    scroll : {
                                        wipe : true
                                    },
                                    prev : {	
                                        button : "#ourclients_prev",
                                        key : "left"
                                    },
                                    next : { 
                                        button : "#ourclients_next",
                                        key : "right"
                                    },
                                    onCreate : function () {
                                        $(window).on('resize', function(){
                                            clientsCarousel.parent().add(clientsCarousel).css('height', clientsCarousel.children().first().outerHeight() + 'px');
                                        }).trigger('resize');
                                    }
                                });                    
                            });                    
                        </script>           
                    </div>
			</div>
		</div>
		<div id="footer-city">
		</div>
		<div id="footer-main">
			<div id="FAQ">
				<a href="#">在线客服</a>
				<a href="#">疑难解答</a>
				<a href="#">咨询热线</a>
			</div>
		</div>
	</div>
</div>
</body>
</html>
<a href="http://apycom.com/"></a>