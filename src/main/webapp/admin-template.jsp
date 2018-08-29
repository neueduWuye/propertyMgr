<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <title>办公室管理系统</title>
	<link rel="stylesheet" href="css/style.css" type="text/css" />
	<link type="text/css" href="css/template.css" rel="stylesheet" />
    <link type="text/css" href="css/menu.css" rel="stylesheet" />
	<link href="css/move.css" type="text/css" rel="stylesheet" />
	<link rel="stylesheet" type="text/css" href="css/jscrollpane2.css" />
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/menu.js"></script>
	<script type="text/javascript" src="js/plugins.js"></script>
	<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
	<script type="text/javascript" src="js/jquery.mousewheel.js"></script>
	<script type="text/javascript" src="js/jquery.jscrollpane.min.js"></script>
	<script type="text/javascript" src="js/scroll-startstop.events.jquery.js"></script>
	<script type="text/javascript">
			 jQuery(document).ready(function($) {
			
				// the element we want to apply the jScrollPane
				var $el					= $('#jp-container').jScrollPane({
					verticalGutter 	: -16
				}),
						
				// the extension functions and options 	
					extensionPlugin 	= {
						
						extPluginOpts	: {
							// speed for the fadeOut animation
							mouseLeaveFadeSpeed	: 500,
							// scrollbar fades out after hovertimeout_t milliseconds
							hovertimeout_t		: 1000,
							// if set to false, the scrollbar will be shown on mouseenter and hidden on mouseleave
							// if set to true, the same will happen, but the scrollbar will be also hidden on mouseenter after "hovertimeout_t" ms
							// also, it will be shown when we start to scroll and hidden when stopping
							useTimeout			: false,
							// the extension only applies for devices with width > deviceWidth
							deviceWidth			: 980
						},
						hovertimeout	: null, // timeout to hide the scrollbar
						isScrollbarHover: false,// true if the mouse is over the scrollbar
						elementtimeout	: null,	// avoids showing the scrollbar when moving from inside the element to outside, passing over the scrollbar
						isScrolling		: false,// true if scrolling
						addHoverFunc	: function() {
							
							// run only if the window has a width bigger than deviceWidth
							if( $(window).width() <= this.extPluginOpts.deviceWidth ) return false;
							
							var instance		= this;
							
							// functions to show / hide the scrollbar
							$.fn.jspmouseenter 	= $.fn.show;
							$.fn.jspmouseleave 	= $.fn.fadeOut;
							
							// hide the jScrollPane vertical bar
							var $vBar			= this.getContentPane().siblings('.jspVerticalBar').hide();
							
							/*
							 * mouseenter / mouseleave events on the main element
							 * also scrollstart / scrollstop - @James Padolsey : http://james.padolsey.com/javascript/special-scroll-events-for-jquery/
							 */
							$el.bind('mouseenter.jsp',function() {
								
								// show the scrollbar
								$vBar.stop( true, true ).jspmouseenter();
								
								if( !instance.extPluginOpts.useTimeout ) return false;
								
								// hide the scrollbar after hovertimeout_t ms
								clearTimeout( instance.hovertimeout );
								instance.hovertimeout 	= setTimeout(function() {
									// if scrolling at the moment don't hide it
									if( !instance.isScrolling )
										$vBar.stop( true, true ).jspmouseleave( instance.extPluginOpts.mouseLeaveFadeSpeed || 0 );
								}, instance.extPluginOpts.hovertimeout_t );
								
								
							}).bind('mouseleave.jsp',function() {
								
								// hide the scrollbar
								if( !instance.extPluginOpts.useTimeout )
									$vBar.stop( true, true ).jspmouseleave( instance.extPluginOpts.mouseLeaveFadeSpeed || 0 );
								else {
								clearTimeout( instance.elementtimeout );
								if( !instance.isScrolling )
										$vBar.stop( true, true ).jspmouseleave( instance.extPluginOpts.mouseLeaveFadeSpeed || 0 );
								}
								
							});
							
							if( this.extPluginOpts.useTimeout ) {
								
								$el.bind('scrollstart.jsp', function() {
								
									// when scrolling show the scrollbar
									clearTimeout( instance.hovertimeout );
									instance.isScrolling	= true;
									$vBar.stop( true, true ).jspmouseenter();
									
								}).bind('scrollstop.jsp', function() {
									
									// when stop scrolling hide the scrollbar (if not hovering it at the moment)
									clearTimeout( instance.hovertimeout );
									instance.isScrolling	= false;
									instance.hovertimeout 	= setTimeout(function() {
										if( !instance.isScrollbarHover )
											$vBar.stop( true, true ).jspmouseleave( instance.extPluginOpts.mouseLeaveFadeSpeed || 0 );
									}, instance.extPluginOpts.hovertimeout_t );
									
								});
								
								// wrap the scrollbar
								// we need this to be able to add the mouseenter / mouseleave events to the scrollbar
								var $vBarWrapper	= $('<div/>').css({
									position	: 'absolute',
									left		: $vBar.css('left'),
									top			: $vBar.css('top'),
									right		: $vBar.css('right'),
									bottom		: $vBar.css('bottom'),
									width		: $vBar.width(),
									height		: $vBar.height()
								}).bind('mouseenter.jsp',function() {
									
									clearTimeout( instance.hovertimeout );
									clearTimeout( instance.elementtimeout );
									
									instance.isScrollbarHover	= true;
									
									// show the scrollbar after 100 ms.
									// avoids showing the scrollbar when moving from inside the element to outside, passing over the scrollbar								
									instance.elementtimeout	= setTimeout(function() {
										$vBar.stop( true, true ).jspmouseenter();
									}, 100 );	
									
								}).bind('mouseleave.jsp',function() {
									
									// hide the scrollbar after hovertimeout_t
									clearTimeout( instance.hovertimeout );
									instance.isScrollbarHover	= false;
									instance.hovertimeout = setTimeout(function() {
										// if scrolling at the moment don't hide it
										if( !instance.isScrolling )
											$vBar.stop( true, true ).jspmouseleave( instance.extPluginOpts.mouseLeaveFadeSpeed || 0 );
									}, instance.extPluginOpts.hovertimeout_t );
									
								});
								
								$vBar.wrap( $vBarWrapper );
							
							}
						
						}
						
					},
					
					// the jScrollPane instance
					jspapi 			= $el.data('jsp');
					
				// extend the jScollPane by merging	
				$.extend( true, jspapi, extensionPlugin );
				jspapi.addHoverFunc();
			
			});
	</script>
</head>
<body>
<div id="container">
	<div id="header">
		<div id="header-main">
			<div id="menu-container">
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
			</div>
			<a id="exit" href="login.jsp">退出登录</a>
		</div>
	</div>
	<div id="content">
		<div id="content-main">
			<div id="content-menu">
				<div id="jp-container" style="float:left;width:100%;height:447px;margin-top:50px;">
					<ul class="list">
						<li>
							<div class="border"></div>
							<span class="icon">U</span>
							<div class="text">
								<h2><a href="admin-owner.jsp" target="iframe_a">用户管理</a></h2>
								<h3>owner information</h3>
							</div>
						</li>
						<li>
							<div class="border"></div>
							<span class="icon">u</span>
							<div class="text">
								<h2><a href="admin-room.html" target="iframe_a">住宅管理</a></h2>
								<h3>personsl information</h3>
							</div>
						</li>
						<li>
							<div class="border"></div>
							<span class="icon">n</span>
							<div class="text">
								<h2><a href="admin-building.html" target="iframe_a">住宅楼管理</a></h2>
								<h3>personsl information</h3>
							</div>
						</li>
						<li>
							<div class="border"></div>
							<span class="icon">C</span>
							<div class="text">
								<h2><a href="admin-community.html" target="iframe_a">社区管理</a></h2>
								<h3>personsl information</h3>
							</div>
						</li>
						<li>
							<div class="border"></div>
							<span class="icon">q</span>
							<div class="text">
								<h2><a href="admin-expense.html" target="iframe_a">费用管理</a></h2>
								<h3>expense entry</h3>
							</div>
						</li>
						<li>
							<div class="border"></div>
							<span class="icon">K</span>
							<div class="text">
								<h2><a href="admin-waterpowermeter.html" target="iframe_a">水电管理</a></h2>
								<h3>expense entry</h3>
							</div>
						</li>
						<li>
							<div class="border"></div>
							<span class="icon">Q</span>
							<div class="text">
								<h2><a href="admin-vehicle.html" target="iframe_a">访客管理</a></h2>
								<h3>vehicle management</h3>
							</div>
						</li>
						<li>
							<div class="border"></div>
							<span class="icon">P</span>
							<div class="text">
								<h2><a href="admin-vehicle.html" target="iframe_a">临时车辆管理</a></h2>
								<h3>vehicle management</h3>
							</div>
						</li>
						<li>
							<div class="border"></div>
							<span class="icon">l</span>
							<div class="text">
								<h2><a href="admin-parking.html" target="iframe_a">停车位管理</a></h2>
								<h3>parking space management</h3>
							</div>
						</li>
						<li>
							<div class="border"></div>
							<span class="icon">w</span>
							<div class="text">
								<h2><a href="admin-access.html" target="iframe_a">门禁卡管理</a></h2>
								<h3>Access card</h3>
							</div>
						</li>
						<li>
							<div class="border"></div>
							<span class="icon">I</span>
							<div class="text">
								<h2><a href="admin-ad.html" target="iframe_a">广告与门店管理</a></h2>
								<h3>advertising and store</h3>
							</div>
						</li>
						<li>
							<div class="border"></div>
							<span class="icon">Z</span>
							<div class="text">
								<h2><a href="admin-complaint.html" target="iframe_a">投诉信箱</a></h2>
								<h3>complaints box</h3>
							</div>
						</li>
						<li>
							<div class="border"></div>
							<span class="icon">e</span>
							<div class="text">
								<h2><a href="admin-notice.html" target="iframe_a">通知管理</a></h2>
								<h3>notice management</h3>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div id="content-inline">
				<iframe id="iframe" frameborder="0" name="iframe_a">
				</iframe>
			</div>
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
							jQuery.noConflict(true);						
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