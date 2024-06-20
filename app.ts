function add(n1: number, n2: number) {
  //return type typescript infer kr leta hai
  return n1 + n2; //here the
}

function printResult(num: number): void {  
  console.log(num);
}

console.log(printResult(add(5, 12)));
