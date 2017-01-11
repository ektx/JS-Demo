/*
	云标签功能 v0.0.2
	---------------------------------------------
	根据数组生成
	---------------------------------------------
	kings <530675800@qq.com>     	   2016/11/22
*/

;function cloudTags(id, arr) {

	// 设置球面点
	function setPoint(){

		for(var i=0;i<tagEle.length;i++){

			// 平均分布
			var k = -1+(2*(i+1)-1)/tagEle.length;
			var a = Math.acos(k);
			var b = a*Math.sqrt(tagEle.length*Math.PI);
			var x = RADIUS * Math.sin(a) * Math.cos(b);
			var y = RADIUS * Math.sin(a) * Math.sin(b); 
			var z = RADIUS * Math.cos(a);

			// 自由分布
			// phi = Math.acos(Math.random() * 2 - 1);
			// theta = Math.random()*2*Math.PI;
			// var x = Math.sin(phi) * Math.cos(theta) * RADIUS;
			// var y = Math.sin(phi) * Math.sin(theta) * RADIUS;
			// var z = RADIUS * Math.cos(phi);
			
			// 共用部分
			var t = new tag(tagEle[i] , x , y , z);
			tags.push(t);
			t.move();
		}
	}

	// 动画
	function animate(){
		setInterval(function(){
			rotateX();
			rotateY();
			tags.forEach(function(val){
				val.move();
			})
		} , 16)
	}

	// x 轴旋转
	function rotateX(){
		var cos = Math.cos(angleX);
		var sin = Math.sin(angleX);
		tags.forEach(function(val){
			var x1 = val.y * cos - val.z * sin;
			var z1 = val.z * cos + val.y * sin;
			val.y = x1;
			val.z = z1;
		})
		
	}

	// y 轴旋转
	function rotateY(){
		var cos = Math.cos(angleY);
		var sin = Math.sin(angleY);
		tags.forEach(function(val){
			var x1 = val.x * cos - val.z * sin;
			var z1 = val.z * cos + val.x * sin;
			val.x = x1;
			val.z = z1;
		})
	}

	// 生成html
	function createHTML(arr) {
		if (arr) {
			var _html = '';
			arr.forEach(function(val) {
				_html += '<a href="">' + val +'</a>'
			})

			$(id).html(_html);
		}

		$(id).find('a').each(function() {
			var _ = $(this);
			var _w = _.width();
			var _h = _.height();

			_.css({ margin: _h/-2 + 'px ' + _w/-2 + 'px'})
		})
	}

	// 点对象 
	var tag = function(ele , x , y , z){
		this.ele = ele;
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = ele.clientWidth;
		this.h = ele.clientHeight;
	}

	tag.prototype = {
		move:function(){

			var opacity = (this.z + RADIUS)/(2* RADIUS) + .2;
			var y = this.y - this.h /2 * this.y/ RADIUS;
			var x = this.x - this.w/2 * this.x / RADIUS;
			// var y = this.y > 0 ? this.y - this.h/2: this.y + this;

			$(this.ele).css({
				opacity: opacity,
				'-ms-transform': 'translateY('+y+'px) translateX('+x+'px) scale('+opacity+')',
				transform: 'translateY('+y+'px) translateX('+x+'px) scale('+opacity+')'
			})
		}
	}

	createHTML(arr);
	var tagEle = $(id + ' a'),
		paper = $(id),
		CX = paper.width()/2,
		CY = paper.height()/2,
		RADIUS = Math.min(CX, CY),
		tags=[],
		angleX = Math.PI / 1000,
	    angleY = Math.PI/ 1000,
		EX = paper.offset().left + document.body.scrollLeft + document.documentElement.scrollLeft,
		EY = paper.offset().top + document.body.scrollTop + document.documentElement.scrollTop;


	paper.on("mousemove" , function(event){
		var x = event.clientX - EX - CX;
		var y = event.clientY - EY - CY;
		angleY = x*0.00005;
		angleX = y*0.00005;
	});
	
	setPoint();
	animate();
}