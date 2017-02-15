
console.log('you can use "winner=Mac" to set get mac')

// 后台传来指定的奖品
var winner = 'iPhone';

$(function() {

	// 奖品数组，来至后台
	var arr = ['Mac', '谢谢参与',  '谢谢参与', 'iPhone','谢谢参与', 'iPhone', '谢谢参与',  'Mac', '谢谢参与',  '谢谢参与', 'iPhone','谢谢参与', 'iPhone','谢谢参与'];

	// 自动生成转盘数据
	// 如果用图片的，请忽略此
	var listHTML = '';
	for (var i = 0; i < arr.length; i++) {
		listHTML += '<li><div class="wheel-info-box"><p>'+arr[i]+'</p></div></li>'
	}

	$('.big-wheel-box').html(listHTML);


	var lists = $('.big-wheel-box li');
	var listSize = lists.size();
	var rotateZ = 360 / listSize;
	var skewX = 90 - rotateZ;
	lists.each(function(i) {
		$(this).css({
			'transform': ' rotateZ('+(rotateZ * i)+'deg) skewX('+skewX+'deg)'
		})
	})

	$('.wheel-info-box').css({
		'transform': 'skewX(-'+skewX+'deg) rotateZ(-'+((90 - rotateZ) + rotateZ/2)+'deg)'
	});


	$('.wheel-axis-box').click(function() {
		
		console.log('Go~~~ ', winner);

		var wheelBox = $('.big-wheel-box');
		var oldTransform = wheelBox.css('transform');

		if (oldTransform === 'none') { 
			oldTransform = 0;
		} else {
			oldTransform = parseFloat( oldTransform.match(/\d+/)[0] );
		}

		// 转盘数据
		// gifts 用来采集所有的奖品类型,同时也把产品的位置收集起来
		var gifts = {};

		for (var i = 0; i < arr.length; i++) {
			var val = arr[i];

			if (!(val in gifts)) {
				gifts[val] = {};
				gifts[val].size = 1;
				gifts[val].index = [];

			} else {
				gifts[val].size = gifts[val].size + 1;
			}

			gifts[val].index.push(i);
		}

		// get gift
		var giftIndex = gifts[winner].index;
		var giftSzie = giftIndex.length;
		var whereis = giftIndex[Math.floor(Math.random() * giftSzie)];
		var offset = 90 - rotateZ/2;

		var goRotateZ = 360 - (rotateZ * whereis) + (360 - (oldTransform%360)) + oldTransform + offset + 360*5;

		wheelBox.css({
			transform: 'rotateZ('+ goRotateZ + 'deg)'
		})
	})
	
});