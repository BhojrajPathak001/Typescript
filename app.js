function add(n1, n2) {
    //return type typescript infer kr leta hai
    return n1 + n2; //here the
}
function printResult(num) {
    console.log(num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    var n = cb(result);
    return n;
}
var combineValues;
combineValues = add;
// combineValues = printResult;
// console.log(combineValues(8, 8));
console.log("main log", addAndHandle(10, 20, function (result) {
    console.log(result);
    return result;
}));
