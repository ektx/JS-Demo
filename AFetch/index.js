
/*
	AFetch
	-------------------------------
	对 fetch 添加语法糖

	@url [string] 请求地址
	@option [object] 请求方法
	@resolve [callback] 成功回调方法
	@reject  [callback] 失败请求方法
*/
export default function AFetch(url, option = false) {

	return new Promise((resolve, reject) => {

		if (!option) {
			option = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			}
		}

		// options = { local: true } 强制使用本地数据
		if (window.SERVER_ENV === 'dev' || (option.local && option.local === true)) {
			url = url.replace('.action', '.json')
			url = url.replace(/^\/api/i, '/mock')
		} else {
			url += location.search
		}


		fetch(url, option)
			.then(res => res.json())
			.then(res => {
				if (resolve) resolve(res)
				else return res
			})
			.catch(err => reject(err)) 
		
	})
	
}