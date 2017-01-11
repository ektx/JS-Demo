//身份证验证
function IdentityVer(str) {
    this.Valid = false;
    this.id15 = '';
    this.id18 = '';
    this.local = '';
    str = str.replace(/\s/g, '');
    if (!!str) this.SetCardNo(str)
}

IdentityVer.prototype.SetCardNo = function (str) {
    this.id15 = '';
    this.id18 = '';
    this.local = '';

    var strNo;

    if (str.length == 18) {
        var patt = /^\d{17}(\d|x)$/i;
        if (patt.exec(str) == null) return;
        strNo = str.toUpperCase();
    } else if (str.length == 15) {
        var patt = /^\d{15}$/;
        if (patt.exec(str) == null) return;
        strNo = str.substr(0, 6) + '19' + str.substr(6, 9);
        strNo += this.GetVerCode(strNo)
    }
    this.Valid = this.CheckValid(strNo);
}

IdentityVer.prototype.IsValid = function () {
    return this.Valid;
}

// 返回出生日
IdentityVer.prototype.GetDate = function () {
    var iDate = '';
    if (this.Valid)
        iDate = this.GetYear() + '-' + this.GetMonth() + '-' + this.GetDay();
    return iDate;
}

IdentityVer.prototype.GetYear = function () {
    var iYaer = '';
    if (this.Valid)
        iYaer = this.id18.substr(6, 4);
    return iYaer;
}

IdentityVer.prototype.GetMonth = function () {
    var iMonth = '';
    if (this.Valid)
        iMonth = this.id18.substr(10, 2);
    if (iMonth.charAt(0) == '0')
        iMonth = iMonth.charAt(1);
    return iMonth;
}

IdentityVer.prototype.GetDay = function () {
    var iDay = '';
    if (this.Valid)
        iDay = this.id18.substr(12, 2);
    return iDay;
}

IdentityVer.prototype.GetSex = function () {
    var iSex = '';
    if (this.Valid)
        iSex = this.id18.charAt(16) % 2;
    return iSex;
}

IdentityVer.prototype.Get15 = function () {
    var ID15 = '';
    if (this.Valid) ID15 = this.id15;
    return ID15;
}

IdentityVer.prototype.Get18 = function () {
    return this.Valid ? this.id18 : '';
}

IdentityVer.prototype.GetLocal = function () {
    return this.Valid ? this.local : '';
}

IdentityVer.prototype.GetVerCode = function (strNo) {
    var wi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1);
    var ai = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
    var cardNoSum = 0;
    for (var i = 0; i < strNo.length; i++)
        cardNoSum += strNo.charAt(i) * wi[i];
    var seq = cardNoSum % 11;
    return ai[seq]
}

IdentityVer.prototype.CheckValid = function (str) {
    if (this.GetVerCode(str.substr(0, 17)) != str.charAt(17)) return false;
    if (!this.IsDate(str.substr(6, 8))) return false;

    var citys = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外"
    };
    if (citys[parseInt(str.substr(0, 2))] == null) return false;
    this.id18 = str;
    this.id15 = str.substr(0, 6) + str.substr(8, 9);
    this.local = citys[parseInt(str.substr(0, 2))];
    return true
}

IdentityVer.prototype.IsDate = function (strdate) {
    var r = strdate.match(/^(\d{1,4})(\d{1,2})(\d{1,2})$/);
    if (r == null) return false;
    var d = new Date(r[1], r[2] - 1, r[3]);
    return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[2] && d.getDate() == r[3]);
}


//邮箱验证
function EmailVer(str) {
    //对电子邮件的验证
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!myreg.test(str)) {
        return false;
    }
    return true;
}