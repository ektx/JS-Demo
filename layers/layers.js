/*
	layers 弹层
	----------------------------------------
	@ektx
	@2017-4-19
	@v0.0.3


	<section class="layers-mod" style="display: none">
		<div class="layers-box">
			<header>
				<h3>标题</h3>
				<div class="layers-close-btn">
					<button>×</button>
				</div>
			</header>
			<div class="layers-main">
				<div class="layers-inner">
					<!-- contents -->
					
				</div>
			</div>
		</div>
	</section>

*/
Layers = {
	id: '',
	options: {
		width: 300,
		height: 200,
		winW: 0,
		minW: 100,
		winH: 0,
		minH: 80,
		title: 'Title',
		resize: false,
		zIndex: false
	},
	isResize: false,

	layerPosition: {
		isHold: false,
		start: {},
		end: {}
	},

	layerEvent: function() {

		_ = this;

		$(document).on('mousedown', '.layers-box header, .layer-resize', function(e) {
			_this = $(this);
			_.layerPosition.isHold = true;

			if (_this.hasClass('layer-resize')) _.isResize = true;

			var __ = $(this).parent();

			_.layerPosition.start = {
				x: e.pageX,
				y: e.pageY,
				top: !__.css('top') ? 0 : parseFloat(__.css('top')),
				left: !__.css('left') ? 0 : parseFloat(__.css('left'))
			};

			_.options.winW = window.innerWidth;
			_.options.winH = window.innerHeight;
		})
		.on('click', '.layers-close-btn', function(e){
			_.close($(this).parents('.layers-box').attr('id'))
		})
	
		$(document).mousemove(function(e) {
			if (_.layerPosition.isHold) {
				e.preventDefault();

				if (_.isResize) {

					var _nowW = _.options.width + e.pageX - _.layerPosition.start.x;
					var _nowH = _.options.height + e.pageY - _.layerPosition.start.y;

					$(this).find('.layers-box').css({
						width: _nowW > _.options.minW ? _nowW : _.options.minW,
						height: _nowH > _.options.minH ? _nowH : _.options.minH
					})
				} 
				// Move
				else {
					var top = _.layerPosition.start.top + e.pageY - _.layerPosition.start.y;
					var left = _.layerPosition.start.left + e.pageX - _.layerPosition.start.x;
					var moveH = _.options.winH - _.options.height;
					var moveW = _.options.winW - _.options.width;

					top = top > 0 ? top > moveH ? moveH : top : 0;
					left = left > 0 ? left > moveW ? moveW: left : 0;

					$(this).find('.layers-box').css({
						top: top ,
						left: left
					})
					
				}
			}
		})

		.mouseup(function(e) {
			_.layerPosition.isHold = false;

			if (_.isResize) {
				var box = $('#'+_.id);
				_.isResize = false;
				_.options.width = parseFloat(box.css('width'));
				_.options.height =  parseFloat(box.css('height'));
			}
		});


		// 窗口事件
		_.resize();
		

	},

	createTitle: function(title) {
		return  '<header>' + 
			    	'<h3>'+title+'</h3>'+
			    	'<div class="layers-close-btn">' + 
			    		'<button>×</button>'+
			    	'</div>' +
			    '</header>';
	},

	createInner: function(content) {
		var html = '<div class="layers-main"><div class="layers-inner">';

		switch (content.type) {
			// str
			case 'str':
				html += content.inner;
				break;

			// http
			case 'http':
				html += '<iframe src="' + content.inner + '"></iframe>';
				break;

			// ajax
			case 'ajax':
				html += '<div class="layers-loading"><b></b><p>Loading...</p></div>';

				break;
		}

		html += '</div></div>';

		return html
	},

	// 组装
	assembly: function(options) {

		var html = '<section class="layers-mod show">',
			top = 0,
			left = 0,
			width = options.width,
			height = options.height,
			resize = resizeHTML = '';

		this.id = 'layers-' + new Date().getTime();
		this.options.winW = window.innerWidth;
		this.options.winH = window.innerHeight;
		
		// 窗口不能大于浏览器的
		width = width < this.options.winW ? width : this.options.winW;
		height = height < this.options.winH ? height : this.options.height;
		top = (this.options.winH - height) / 2;
		left = (this.options.winW - width) / 2;

		if (this.options.resize) {
			resize = 'overflow:auto; resize:'+this.options.resize;
			resizeHTML = '<button class="layer-resize"></button>';
		}

		html +=	'<div id="'+this.id+'" class="layers-box show" style="width:'+width+'px; height:'+height+'px; top:'+top+'px; left:'+left+'px; z-index:'+ (this.options.zIndex || this.id.substr(7)) +';' +resize+'">';

		html += this.createTitle(options.title);
		html += this.createInner(options.content);


		html += resizeHTML + '</section></div>'

		return html;
	},

	resize: function() {
		var _ = this;
		var t ;

		$(window).resize(function() {

			clearTimeout(t)
			t = setTimeout(function() {
				var now_winW = window.innerWidth;
				var now_winH = window.innerHeight;

				$('.layers-mod').find('.layers-box').each(function(i) {
					var __ = $(this);
					var __top = parseFloat( __.css('top') );
					var __left = parseFloat( __.css('left') );
					var maxWidth = 'none';
					var maxHeight = 'none';

					// 位置控制
					if (__left + _.options.width > now_winW) {
						__left = now_winW - _.options.width;
					}

					if (__top + _.options.height > now_winH) {
						__top = now_winH - _.options.height
					}

					// 大小控制
					if (_.options.width > now_winW) {
						maxWidth= now_winW
					}


					if (_.options.height > now_winH) {
						maxHeight = now_winH
					}

					__.css({
						top: __top > 0 ? __top : 0,
						left: __left > 0 ? __left : 0,
						maxWidth: maxWidth,
						maxHeight: maxHeight
					})
				});

				_.options.winW = now_winW;
				_.options.winH = now_winH;
				console.log(_.options.winW, _.options.winH);
				
			}, 400)
		})

	},

	close: function(id) {
		var layerMod = $('.layers-mod');

		if (typeof id === 'object') {
			id = $(id).parents('.show')[0].id
		}

		if (id) {
			var _id = $('#'+id);
			_id.removeClass('show').addClass('hide');

			setTimeout(function() {
				_id.remove()
			}, 400)
		}


		if (layerMod.children('.show').length === 0) {
			layerMod.addClass('hide')
			setTimeout(function() {
				layerMod.remove()
			}, 410)
		}
			
	},

	open: function(options) {
		var _ = this;

		options = extendObj(options, _.options)

		var html = _.assembly(options);

		$('body').append(html);

		if ( options.content.type == 'ajax' ) {
			$('#'+_.id).find('.layers-inner').load( options.content.inner, function(response, status){
				console.log(response, status)
			});
		}

		if (_.layerEvent) {
			_.layerEvent();
			_.layerEvent = 0;
		}

		if (options.callback) {
			options.callback();
			delete options.callback;
		}
	}
}


/*
	合并对象
	-----------------------------------------
	@obj 要输出的对象
	@obj2 用来添加的对象
*/
function extendObj(obj, obj2) {

	var findObj = function(_obj, _obj2) {

		for (var key in _obj2) {

			if (typeof _obj2[key] == 'object') {
				if ( !_obj.hasOwnProperty(key) ) {

					_obj[key] = _obj2[key]
				} else {
					// get 组合过的
					_obj[key] = findObj(_obj[key], _obj2[key])
				}
				
			}
			else {
				_obj[key] = _obj2[key]
			}

		}

		return _obj
	}


	return findObj(obj2, obj)
}

