

var createAddressMod = {

	addressCache: {},

	// 生成头部
	genInnerHeader: function(_, title, url, code) {
		var html = '<li data-url="'+url+'" data-code="'+code+'" class="current show"><span>'+ title +'</span></li>';
		var box = _.find('.breadCrumbs-mod');
		var _parent  = box.parents('.sel-get-inner');
		var _parentW = parseInt(_parent.attr('data-w')) || _parent.width();

		box.find('.current').removeClass().end().append(html);

		if ( box[0].scrollWidth > _parentW ) {
			_parent.attr('data-w', _parentW).width(box[0].scrollWidth + 10)
		}

		setTimeout(function() {
			box.find('.show').removeClass('show')
		}, 310)
	},

	// 生成选择的链接
	genALink: function(_, data, url) {
		var html = '';

		for (var i = 0, l = data.length; i < l; i++) {
			var _h = data[i].id ? url + '?id='+data[i].id : '';
			_h = _h ? ' href="'+_h+'"' : '';
			html += '<a'+ _h + '>'+data[i].orgName+'</a>'
		}

		_.find('.alternative-address-box').html(html)
	},

	genSearch: function(placeholder) {
		/*
			<form class="search-input-mod" action="">
				<input placeholder="查询..." type="text">
				<button type="reset">✕</button>
			</form>
		*/
		return 	'<form class="search-input-mod" action="">' +
					'<input placeholder="'+placeholder+'" type="text">' +
					'<button type="reset">✕</button>' +
				'</form>'
	},


	genHead: function(city) {
		/*
			<div class="sel-show-header">
				<span>全国</span>
				<span class="arrow-ico down-arrow"></span>
			</div>
		*/
		return '<div class="sel-show-header">' +
					'<span>'+city+'</span>' +
					'<span class="arrow-ico down-arrow"></span>'+
				'</div>'
	},

	genBox: function(options) {
		var result = '';

		/* <div class="sel-get-box">
				<div class="sel-get-inner">
					<form class="search-input-mod" action="">
						<input placeholder="查询..." type="text">
						<button type="reset">✕</button>
					</form>

					<div class="sel-table-box">
						<ul class="breadCrumbs-mod"></ul>
						<div class="alternative-address-box"></div>
					</div>
				</div>
			</div>
		*/

		result += '<div class="sel-get-box">' +
					'<div class="sel-get-inner" style="width:'+options.width+'px">' +
						(options.search ? this.genSearch(options.search): '') +
						'<div class="sel-table-box">' +
							'<ul class="breadCrumbs-mod"></ul>' +
							'<div class="alternative-address-box"></div>' +
						'</div>' +
						'<div class="sel-btns">' +
							'<button>确认</button>'+
							'<button>取消</button>'+
						'</div>'+
					'</div>' +
				'</div>';

		return result;
	},

	// 读取数据
	getJson: function(_, url, title, code) {

		var self = this;

		$.ajax({
			url: url,
			type: 'get',
			dataType: 'json'
		})
		.done(function(data) {
			self.genALink(_, data, url);

			if (title) {
				self.genInnerHeader(_, title, url, code)
			}

		})
		.fail(function(err) {
			console.warn(err)
		})
	},

	// 事件委托
	event: function(options) {
		var _self = this;
		var _ = $(options.id);

		// 切换显示
		_.on('click', '.sel-show-header', function() {
			$(this).parent().toggleClass('work')
		})
		
		// 地市选择
		.on('click', '.alternative-address-box a', function(e) {
			e.preventDefault();

			let url = this.href;

			if (!url) {
				$(this).addClass('current').siblings().removeClass();

				return;
			}

			let file = this.search.match(/id=(\d+)$/)[1];

			if (options.localData) {
				url = this.pathname.replace(/\d+\.json$/, file+'.json')
			}

			_self.getJson($(this).parents('.sel-get-inner'), url, this.innerText, file)

		})

		// 头部标题切换
		.on('click', '.breadCrumbs-mod li', function() {
			var _ = $(this),
				box = _.closest('.sel-get-inner'),
				boxW = parseInt(box.attr('data-w'));

			// 先恢复到原来默认大小
			_.parent().width( parseInt(box.attr('data-w')) );

			_.addClass('current').nextAll().remove();

			// 取得最新状态下的滚动宽度
			let	scrW = _.parent()[0].scrollWidth;

			// 如果滚动的距离比宽度小,那么就在原来默认之内了
			// 这时让整个大小收缩回来反之不变
			if (scrW <= boxW) {
				box.width( boxW );
			} else {
				box.width( scrW + 10)
			}

			// 移除测试数据
			_.parent().removeAttr('style')

			_self.getJson(box, _.data().url, '')
		})

		// 搜索功能
		.on('input', 'input', function() {

			if (this.value.trim().length > 0) {
				if (!$(this).next().is('visibility')) {
					$(this).next().addClass('show')
				}
			} else {
				if ($(this).next().hasClass('show')) {
					$(this).next().removeClass()
				}
			}
		})
		.on('click', 'button[type="reset"]', function() {
			this.classList.remove('show')
		})
		.on('click', '.sel-btns button', function(e) {

			var that = _.find('.current');
			var head = _.find('.sel-show-header');
			var data = {
				index: $(this).index(),
				code: that.attr('data-code'),
				name: that.text()
			}

			if (options.callback) options.callback(data)
			
			if (!data.index) {
				head.find('span:first').text(data.name);
			}

			head.click();
		})
	},

	init: function(options) {
		url = options.url;
		var _self = this;
		var _ = $(options.id);
		var html = '';

		html += this.genHead(options.title);
		html += this.genBox(options);

		_.addClass('select-address-mod').html( html );

		_self.getJson(_, options.url, options.title, 0);

		_self.event(options);

	}
}