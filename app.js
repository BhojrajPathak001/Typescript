function add(n1, n2) {
    //return type typescript infer kr leta hai
    return n1 + n2; //here the
}
function printResult(num) {
    console.log(num);
    return undefined;
}
console.log(printResult(add(5, 12)));
