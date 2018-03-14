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

{
    const createIncrementer = () => { };
    // return same argument not earlier than in one second, and not later, than in two
    const returnBackInSecond = () => { };
    const getDeepPropertiesCount = () => { };
    const createSerializedObject = () => { };
    const toBuffer = () => { };
    const sortByProto = () => { };
}

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;


// exports.createIncrementer = createIncrementer;

// return same argument not earlier than in one second, and not later, than in two
// exports.returnBackInSecond = returnBackInSecond;
// exports.getDeepPropertiesCount = getDeepPropertiesCount;
// exports.createSerializedObject = createSerializedObject;
// exports.sortByProto = sortByProto;