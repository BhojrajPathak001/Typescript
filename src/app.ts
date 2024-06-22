const names: Array<number> = [2, 3];

// names[0].split(" ");

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});
promise.then((data) => {
  data.split(" ");//this will give error since generic type is number
});
