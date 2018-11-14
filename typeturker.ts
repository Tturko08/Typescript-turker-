enum Smartphones {
    AppleIphone = 1,
    SamsungAndroid,
    XiaomiAndroid,
    HuaweiAndroid,
}

interface Phones {
    xname:string;
    size:string;
    xtype:string;
}

class Smartphones1 {
   create(event:phones) {
    return {xname:phones.xname,event:size,xtype: event.xtype};
}
}
const Smartphones1 = new Smartphones1();
console.log(Smartphones);

console.log(phones);


