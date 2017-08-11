
// Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

// Object.assign(target, ...sources)

// 复制一个 object
let obj = { a: 1};
let copy = Object.assign({}, obj)

console.log(copy); // => {a: 1}

let a = { b: {c: 4, s: 0}, d: { e: {f:1} }, h: [ { a: 1}]};
console.log(Object.assign({}, a)) // => { b: { c: 4 }, d: { e: { f: 1 } } }

console.log(Object.assign({b: {c: 1, g: 2}}, a)) //=> { b: { c: 4 }, d: { e: { f: 1 } } }

console.log(Object.assign(a, {b: {c: 1, g: 2}})) //=>{ b: { c: 1, g: 2 }, d: { e: { f: 1 } } }

console.log(Object.assign(a, { b: {c: 5}, h: [ {a: 2, b: 3}] }) )


let defOption = {
	    "title": {
	        "x": "right",
	        textStyle:{
	            color: '#75A9FF'
	        }
	    },
	    tooltip: {
	        trigger: 'axis'
	    },
	    calculable: true,
	    xAxis: [
	        {
	            type: 'category',
	            boundaryGap: false,
	            axisLine: {
	                lineStyle: {
	                    color: '#00DCFD',
	                    width: 13
	                }
	            },
	            axisTick: {
	                show :false,
	                inside: true,
	                lineStyle: {
	                    type: 'dashed'
	                }
	            }
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value',
	            name: '单位/件',
	            axisLine: {
	                lineStyle: {
	                    color: '#00DCFD',
	                    width: 2
	                }
	            },
	            splitLine: {
	                lineStyle: {
	                    type: 'dashed',
	                    color: '#043544'
	                }
	            },
	            axisTick: {
	                inside: true,
	                lineStyle: {
	                    type: 'dashed'
	                }
	            }
	        }
	    ]
	};

let option = {
	"title": {
			"text": "便民服务"
		},
	"xAxis": [
		{
			"data": ["2016.12","2017.01","2017.02","2017.03","2017.04","2017.05"]
		}
	],
	"yAxis": [
		{
			"name": "单位/件"
		}
	],
	"series": [
		{
			"type": "line",
			"data": [ 10500, 15000, 20500, 15000, 7500, 10000]
		}
	]
}

console.log( Object.assign(defOption, option) )
