
function AFetch(options) {
	this.option = options;

}

AFetch.prototype.request = function (str) {
	console.log(str)
}


function createInstance (defaultConfig) {
	var context = new AFetch(defaultConfig)
	var instance = bind(AFetch.prototype.request, context)

	return instance
}

var afetch = createInstance(options);

afetch.AFetch = AFetch;

export default afetch;