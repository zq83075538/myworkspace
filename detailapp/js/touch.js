define(function(require,exports,module){
	require.async('zepto',function($){
		function touch(element,fun){
			this.fun = fun;
			$(element).on('touchstart',this,this.start);
			$(element).on('touchmove',this,this.move);
			$(element).on('touchend',this,this.end);

		}
		touch.prototype = {
			retsize:function(event){
				if(this.startdoc){
					return [this.startdoc[0]-event.touches[0].clientX,this.startdoc[1]-event.touches[0].clientY];
				}else{
					return [event.touches[0].clientX,event.touches[0].clientY];
				}
			},
			start:function(event){
				var this_ = event.data;
				this_.scrollTop = $(window).scrollTop();
				this_.top = parseInt($(this).css('top'));
				if(this_.endweight){
					this_.endweight = undefined;
				}
				// console.log(event)
				this_.startdoc = this_.retsize(event);
			},
			move:function(event){
				var this_ = event.data;
				// console.log(event);
				this_.moveweight = this_.retsize(event);
				this_.fun(this);
				return false;
			},
			end:function(event){
				var this_ = event.data;
				this_.startdoc = undefined;
				this_.endweight = this_.moveweight;
				this_.moveweight = [0,0];
				this_.fun(this);
			}
		}
		module.exports = touch;
	})
})