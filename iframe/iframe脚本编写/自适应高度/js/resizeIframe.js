/**
自适应框架大小

自动监测页面所有框架的大小，并自动调整大小。

注意事项：
1、无法实现跨域的调整
2、网页的格式必须规范

**/

function resizeIframe() {
	setInterval(function() {
		// document.domain = 'http://myos.me';

		for (var i = 0; i < frames.length; i++) {
			var iframes = window.frames[i];

			// iframe 内部页面大小 
			var framesInnerH = iframes.document.documentElement.scrollHeight;
			// var framesInnerH = iframes.document.body.scrollHeight;

			// iframe 框架现有高度
			var frameStyle = iframes.frameElement.style;
			var frameH = frameStyle.height;

			// 如果框架不显示则不用绘制
			// 当框架为显示有状态时则去绘制他的大小
			if (frameStyle.display == 'none') {
				// console.log('iframe not have');
			} else {

				// 如果框架内页面大小和框架本身大小不一，则绘制大小
				if (parseFloat(framesInnerH) != parseFloat(frameH)) {
					window.frames[i].frameElement.style.height = framesInnerH + 'px';
					
				}

			}

		};

	}, 300);	
}
resizeIframe();