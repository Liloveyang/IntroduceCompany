(function($){
	$(function(){

			//Show dropdown on hover only for desktop devices
		//-----------------------------------------------
		var delay=0, setTimeoutConst;
		if (Modernizr.mq('only all and (min-width: 768px)') && !Modernizr.touch) {
			$('.main-navigation .navbar-nav>li.dropdown, .main-navigation li.dropdown>ul>li.dropdown').hover(
			function(){
				var $this = $(this);
				setTimeoutConst = setTimeout(function(){
					$this.addClass('open').slideDown();
					$this.find('.dropdown-toggle').addClass('disabled');
				}, delay);

			},	function(){ 
				clearTimeout(setTimeoutConst );
				$(this).removeClass('open');
				$(this).find('.dropdown-toggle').removeClass('disabled');
			});
		};
		//Show dropdown on click only for mobile devices
		//-----------------------------------------------
		if (Modernizr.mq('only all and (max-width: 767px)') || Modernizr.touch) {
			$('.main-navigation [data-toggle=dropdown], .header-top [data-toggle=dropdown]').on('click', function(event) {
			// Avoid following the href location when clicking
			event.preventDefault(); 
			// Avoid having the menu to close when clicking
			event.stopPropagation(); 
			// close all the siblings
			$(this).parent().siblings().removeClass('open');
			// close all the submenus of siblings
			$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
			// opening the one you clicked on
			$(this).parent().toggleClass('open');
			});
		};
		//Main slider
		//-----------------------------------------------
		//Revolution Slider
			//edit by houjin @ 2017/4/13
			//reset the slider height when window has been resized
			window.resetRevolutionSlider=(function(){
				var startHeight = $(window).height()*0.86;
				if($(window).width()<=767){
					$(".nav-new li").attr('display','none');
					$(".navbar-header").off('click').on('click',function(){
						$(".nav-new li").toggle("fast");
					});
				}else{
					$(".navbar-header").off("click");
					$(".nav-new li").attr("display","block");
				}
				if ($(".slider-banner-container").length>0) {
					var h = $(window).height();
					var w = $(window).width();
					var hn = 0.28,wn=0.2;//大屏使用系数，hn高度系数，wn宽度系数
					if(w<=767){
						startHeight = $(window).height()*0.72;
						$(".nr_img1").hide();
						$(".nr_img2").hide();
						wn=0.04;
						hn=0.2;
						$("#img1").attr("src","images/mobile_slide-1.jpg"/*tpa=http://www.flaginfo.com.cn/js/images/mobile_slide-1.jpg*/);
						$("#img2").attr("src","images/mobile_slide-2.jpg"/*tpa=http://www.flaginfo.com.cn/js/images/mobile_slide-2.jpg*/);
					}else{
						startHeight = $(window).height()*0.77;
						hn = 0.28;
						wn=0.2;
						$("#img1").attr("src","images/slider-1-slide-1.jpg"/*tpa=http://www.flaginfo.com.cn/js/images/slider-1-slide-1.jpg*/);
						$("#img2").attr("src","images/slider-1-slide-2.jpg"/*tpa=http://www.flaginfo.com.cn/js/images/slider-1-slide-2.jpg*/);
					}
					var center = $(window).width()/wn-$(window).width()*0.1,
						setHeight = $(".banner").height()*hn;
					$(".nr1").data("x",w*wn);
					$(".nr1").data("y",setHeight-30);
					$(".nr2").data("x",$(".nr1").data("x"));
					$(".nr2").data("y",setHeight+$(".nr1").height());
					$(".nr3").data("x",$(".nr1").data("x")+$(".nr2").width()+8);
					$(".nr3").data("y",setHeight+$(".nr1").height());
					$(".nr4").data("x",$(".nr1").data("x"));
					$(".nr4").data("y",setHeight+$(".nr1").height()+$(".nr3").height()+7);
					$(".nr5").data("x",$(".nr1").data("x")+$(".nr4").width()+8);
					$(".nr5").data("y",setHeight+$(".nr1").height()+$(".nr3").height()+7);
					$(".nr6").data("x",$(".nr1").data("x"));
					$(".nr6").data("y",setHeight+$(".nr1").height()+$(".nr3").height()+$(".nr5").height()+13);
					$(".nr7").data("x",$(".nr1").data("x")+$(".nr6").width()+8);
					$(".nr7").data("y",setHeight+$(".nr1").height()+$(".nr3").height()+$(".nr5").height()+13);
					$(".nr8").data("x",$(".nr1").data("x")+$(".nr6").width());
					$(".nr8").data("y",setHeight+$(".nr1").height()+$(".nr3").height()+$(".nr5").height()+$(".nr7").height()+35);
					$(".nr9").data("x",$(".nr1").data("x"));
					$(".nr9").data("y",setHeight+$(".nr1").height()+$(".nr3").height()+$(".nr5").height()+$(".nr7").height()+25);
					$(".nr10").data("x",$(".nr1").data("x")+$(".nr6").width()+8);
					$(".nr10").data("y",setHeight+$(".nr1").height()+$(".nr3").height()+$(".nr5").height()+$(".nr7").height()+25);
					$(".nr11").data("x",$(".nr1").data("x")+2);
					$(".nr11").data("y",setHeight+$(".nr1").height()+$(".nr3").height()+$(".nr5").height()+$(".nr7").height()+$(".nr9").height()+65);
					$(".nr_img1").data("x",w*0.6);//调整尾数(wn/x)x为可调系数
					$(".nr_img1").data("y",setHeight+100*hn);//(x*hn) x为可调系数
					$(".nr_img2").data("x",w*0.6);//调整尾数(wn/x)x为可调系数
					$(".nr_img2").data("y",setHeight+100*hn);//(x*hn) x为可调系数
					$(".tp-bannertimer").show();
					$('.slider-banner-container .slider-banner').show().revolution({
						delay:10000,
						startwidth:Math.ceil($(window).width()),
						//startwidth:1140,
						startheight:Math.ceil(startHeight),
						navigationArrows:"solo",
						navigationStyle: "round",
						navigationHAlign:"center",
						navigationVAlign:"bottom",
						navigationHOffset:0,
						navigationVOffset:20,
						soloArrowLeftHalign:"left",
						soloArrowLeftValign:"center",
						soloArrowLeftHOffset:20,
						soloArrowLeftVOffset:0,
						soloArrowRightHalign:"right",
						soloArrowRightValign:"center",
						soloArrowRightHOffset:20,
						soloArrowRightVOffset:0,
						fullWidth:"on",
						spinner:"spinner0",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						onHoverStop: "off",
						shuffle:"off",
						autoHeight:"off",
						forceFullWidth:"off",
						hideThumbsOnMobile:"off",
						hideNavDelayOnMobile:1500,
						hideBulletsOnMobile:"off",
						hideArrowsOnMobile:"off",
						hideThumbsUnderResolution:0,
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						startWithSlide:0
					});
					$(".icon-check").addClass("iconfont icon-yaodian1");
				}
				return arguments.callee;
			})();
			window.resetRevolutionSlider();

		// Animations
		//-----------------------------------------------
		if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
			$("[data-animation-effect]").each(function() {
				var $this = $(this),
				animationEffect = $this.attr("data-animation-effect");
				if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
					$this.appear(function() {
						var delay = ($this.attr("data-effect-delay") ? $this.attr("data-effect-delay") : 1);
						if(delay > 1) $this.css("effect-delay", delay + "ms");
						setTimeout(function() {
							$this.addClass('animated object-visible ' + animationEffect);
						}, delay);
					}, {accX: 0, accY: -130});
				} else {
					$this.addClass('object-visible');
				}
			});
		}

		//Scroll totop
		//-----------------------------------------------
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$(".scrollToTop").fadeIn();
			} else {
				$(".scrollToTop").fadeOut();
			}
		});

		$(".scrollToTop").click(function() {
			$("body,html").animate({scrollTop:0},800);
		});


		//added by houjin @ 2017/4/13
		// drop down menu
		$('.nav-new li').hover(function(e){
			var cur = $(e.currentTarget);
			var name = e.target.tagName;
			if(name=== 'LI'){
				$(e.target).find('.drop-menu').fadeIn();
			}else if(name ==='A'){
				$(e.target).next('.drop-menu').fadeIn();
			}
			$('.header-new').addClass('header-new-hover');
		},function(e){
			var tar = $(e.currentTarget);
			tar.find('.drop-menu').fadeOut();
			$('.header-new').removeClass('header-new-hover');
		});

		$(window).on('resize',function(){
			resetRevolutionSlider && resetRevolutionSlider();
		});
	}); // End document ready
})(this.jQuery);
