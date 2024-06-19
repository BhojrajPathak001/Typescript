const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
  tuple: [number, string];
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
  tuple: [1, "kuchbhi"],
};

// product.tuple[0] = "2";
// product.tuple[1] = 1;
// product.tuple[2] = "hello";
product.tuple.push("hello"); //tuple me push chal jata hai but baaki nhi chlta hai suppose just upar jese assign kiya hai wese kiya tou
console.log(product);
