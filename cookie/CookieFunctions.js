function setCookie(cookieName, cookieValue, cookiePath, cookieExprice) {
	// 将非字母或数字字符串转换为 Latin-1 字符集中对应的十六进制编码，并加上%字符前缀
	cookieValue = escape(cookieValue);

	// 设置过期时间
	if (cookieExprice == '') {
		var nowDate = new Date();
		nowDate.setMonth(nowDate.getMonth() + 6);
		cookieExprice = nowDate.toGMTString();
	}
	
}