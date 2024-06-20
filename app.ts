function add(n1: number, n2: number) {
  //return type typescript infer kr leta hai
  return n1 + n2; //here the
}

function printResult(num: number): void {
  console.log(num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  const n = cb(result);
  n.toString();
}

let combineValues: (n1: number, n2: number) => number;
combineValues = add;

// combineValues = printResult;

// console.log(combineValues(8, 8));

console.log(
  "main log",
  addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
  })
);
