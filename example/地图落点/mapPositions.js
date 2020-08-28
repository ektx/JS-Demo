/*
	地图落点 Demo
	-----------------------------------
	@ektx
	@2016-11-16
*/

var mapPosition = {
	times: 0,
	init: function (options) {

		var pointSize = options.data.length;
		var citys = [];

		var pointHTML = '';
		var pointW = $(options.id).find('li').width();
		var pointH = Math.sqrt((pointW/2)*(pointW/2)*2) + pointW/2;


		for (var i = 0; i < pointSize; i++) {
			var thisData = options.data[i];
			var cityInfo = options.mapArea[ thisData.addr ];

			var _left = cityInfo.x + (cityInfo.w * Math.random()) - pointW/2;

			var _top = cityInfo.y + (cityInfo.h * Math.random()) - pointH;

			var liHtml = $('<li></li>');

			if (options.fun) {
				liHTML = options.fun(thisData, liHtml)
			}

			liHtml.css({
				top: _top,
				left: _left,
				'animation-delay': (Math.random() * 1000)+'ms'
			})

			pointHTML += liHtml[0].outerHTML;
		}

		if (!this.times) {
			$(options.id).addClass('fadeIn').html(pointHTML);
		}
		else {
			$(options.id).toggleClass('fadeIn fadeOut');
			setTimeout(function() {
				$(options.id).toggleClass('fadeOut fadeIn').html(pointHTML)
			}, 1000)
		}

		this.times++;
	}	
}

