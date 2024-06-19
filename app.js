var product = {
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
product.tuple.push("hello");
console.log(product);
