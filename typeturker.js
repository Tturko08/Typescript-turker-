var Smartphones;
(function (Smartphones) {
    Smartphones[Smartphones["AppleIphone"] = 1] = "AppleIphone";
    Smartphones[Smartphones["SamsungAndroid"] = 2] = "SamsungAndroid";
    Smartphones[Smartphones["XiaomiAndroid"] = 3] = "XiaomiAndroid";
    Smartphones[Smartphones["HuaweiAndroid"] = 4] = "HuaweiAndroid";
})(Smartphones || (Smartphones = {}));
var Smartphones1 = /** @class */ (function () {
    function Smartphones1() {
    }
    Smartphones1.prototype.create = function (event) {
        return { xname: phones.xname, event: size, xtype: event.xtype };
    };
    return Smartphones1;
}());
var Smartphones1 = new Smartphones1();
console.log(Smartphones);
console.log(phones);
