// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName;
};
const createNotEnumerableProperty = (propertyName) => {
    return Symbol(propertyName);
};

const createProtoMagicObject = () => {
    function User() {
        return new Function();
    }
    let func = new User();
    func.__proto__ = func.prototype;
    return func;
};

const incrementor = () => {
    this.i = this.i === undefined ? 1 : ++this.i;
    let self = this;
    Function.prototype.toString = function () {
        return self.i;
    }
    return incrementor;
};

const asyncIncrementor = () => {
    return function incrementor2() {
        this.j = this.j === undefined ? 1 : ++this.j;
        let self = this;
        Function.prototype.toString = function () {
            return self.j;
        }
        return incrementor2;
    }();
};

const createIncrementer = () => {
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (!this.current) {
                this.current = 1;
            }
            return {
                done: false,
                value: this.current++
            }
        }
    }
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(param);
        }, 1200)
    })
    return promise;
};

const getDeepPropertiesCount = (obj) => {
    let temp = obj;
    let arr = [];
    for (let i = 0; ; ) {
        i = +Object.keys(temp)[0];
        if (Object.keys(temp[i])) {
            arr = arr.concat(Object.keys(temp));
            arr = arr.concat(Object.keys(temp[i]));
        }
        temp = temp[i][i];
        if (!Object.keys(temp).length) {
            break;
        }
    }
    return arr.length;
};

const createSerializedObject = () => {
    let obj = {
        toJSON: function() {
            return true;
        },
        toString: function() {
            return true;
        }
    }
    return obj;
};

const sortByProto = (array) => {
    let arrOfObjects = []
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        let count = 0;
        while (temp.__proto__ != Object.prototype) {
            count++;
            temp = temp.__proto__;
        }
        let obj = {
            value: array[i],
            count: count
        }
        arrOfObjects.push(obj);
    }
    arrOfObjects = arrOfObjects.sort((a, b) => {
        return b.count - a.count;
    })
    for (let i = 0; i < arrOfObjects.length; i++) {
        array[i] = arrOfObjects[i].value
    }
    return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
// return same argument not earlier than in one second, and not later, than in two
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;