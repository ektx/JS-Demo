
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


	return findObj(obj, obj2)
}