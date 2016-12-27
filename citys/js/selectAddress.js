

var createAddressMod = {

	addressCache: {},

	// 生成头部
	genInnerHeader: function(_, title, url) {
		var html = '<li data-url="'+url+'" class="current show"><span>'+ title +'</span></li>';
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
			html += '<a href="'+ url+'?id='+data[i].id+'">'+data[i].orgName+'</a>'
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
					'<input placeholder="查询..." type="text">' +
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
					'</div>' +
				'</div>';

		return result;
	},

	// 读取数据
	getJson: function(_, url, title) {

		var self = this;

		$.ajax({
			url: url,
			type: 'get',
			dataType: 'json'
		})
		.done(function(data) {
			self.genALink(_, data, url);

			if (title) {
				self.genInnerHeader(_, title, url)
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

			if (options.localData) {
				let file = this.search.match(/id=(\d+)$/)[1];
				url = this.pathname.replace(/\d+\.json$/, file+'.json')
			}

			_self.getJson($(this).parents('.sel-get-inner'), url, this.innerText)

		})

		// 头部标题切换
		.on('click', '.breadCrumbs-mod li', function() {
			var _ = $(this),
				box = _.closest('.sel-get-inner'),
				boxW = parseInt(box.attr('data-w'));

			// 先恢复到原来默认大小
			_.parent().width( parseInt(box.attr('data-w')) );

			_.addClass('current').nextAll().hide();

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
		.on('click', 'button', function() {
			this.classList.remove('show')
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

		_self.getJson(_, options.url, options.title);

		_self.event(options);

	}
}