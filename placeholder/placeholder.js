/* 
	IE placeholder
	--------------------------------------
	对于早期IE的placeholder的支持扩展

	使用方法:
	- 全局使用
	IEplaceholder.init()

	- 指定元素使用
	IEplaceholder.init('#id')
	IEplaceholder.init('#id, #id2')

*/
function IEplaceholder (elements) {
	var change = function(e) {
		var _ = $(this);
		var _val = this.value;
		var _pla = _.attr('placeholder');

		if (e.type === 'focus') {
			if (_val === _pla) _val = '';
		} 
		else if (e.type === 'blur') {
			if (!_val) _val = _pla;
		}

		_.val(_val);
	};

	if (!/msie/i.test(navigator.userAgent)) return;

	if (!elements) elements = 'input[placeholder]';

	$(elements).each(function() {
		var _ = $(this);
		var _val = _.attr('placeholder');

		_.val(_val);

	}).on('focus', change)
	.on('blur', change)
}