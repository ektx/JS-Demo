var s = 'aaa_aa_a';
var y = /a+_/y
var r = /a+_/

// y具有粘性，可以记录之前匹配的位置，在下次匹配时从记录位置开始
console.log(y.exec(s))
console.log(y.exec(s))

// 没有y时，则为默认情况匹配，每次匹配的位置都是从0开始
console.log(r.exec(s))
console.log(r.exec(s))