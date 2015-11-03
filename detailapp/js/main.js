define(function(require,exports,module){
	require.async(['zepto','js/touch'],function($,touch){
		var h = $(window).height();
		$('.mainimg').css('height',h+'px');
		new touch('.mainimg',function(obj){
			if(this.endweight){
				var to = '-'+h+'px',canshow = true;
				if(this.endweight[1]<h/4){
					to = 0;
					canshow = false;
				}
				$(obj).animate({'top':to},200,function(){
					if(canshow)
					$('.content').css({'position':'relative','display':'block'});
				});
				return;
			}
			$(obj).css({'top':-this.moveweight[1]+'px'});
			// console.log(this.moveweight[1])
		});
		new touch('.content',function(obj){
			// console.log(this.moveweight[1]<0,this.moveweight[1]<this.top)
			var top = this.moveweight[1]||this.endweight[1];
			if(top<0&&top<this.top)
			top = top - this.top;
			if(top<0&&top<this.top){
				if(this.endweight){
					var to = 0,canshow = true;
					if(-this.endweight[1]<h/4){
						to = -h+'px';
						canshow = false;
					}
					$(obj).prev().animate({'top':to},200,function(){
						if(canshow)
						$('.content').css({'position':'fixed','display':'none'});
					});
					return;
				}
				$(obj).prev().css({'top':-h-top+'px'});
				// console.log(this.moveweight[1])
			}else{
				top = this.top-top;
				// console.log($(obj).css('top'));
				if(-top>$(obj).height()-h){
					return;
				}
				$(obj).css({'top':top+'px'});
			}
		});
		//流程是否是三个以上
		$.fn.extend = $.extend;
		$.fn.gt = function(ind){
				return $(this).slice(ind,$(this).length);
			};
		if($('.redline').length>3){
			$('.more').show();
			$('.proccess').css('padding-bottom','0.5rem');
			var gtall = $('.redline').gt(3);
			gtall.hide();
			var firsttop;
			$('.proccess .more').tap(function(){
				if(!$(this).is('.act')){
					firsttop = parseInt($('.content').css('top'))
					$(this).html('收起<i></i>');
				}else{
					$('.content').css('top',firsttop+'px');
					$(this).html('查看更多步骤<i></i>');
				}
				gtall.toggle();
				$(this).toggleClass('act');
			})
		}

	});
});