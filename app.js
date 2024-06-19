var product = {
    id: "abc1",
    price: 12.99,
    tags: ["great-offer", "hot-and-new"],
    details: {
        title: "Red Carpet",
        description: "A great carpet - almost brand-new!",
    },
};
console.log(product);
for (var _i = 0, _a = product.tags; _i < _a.length; _i++) {
    var tag = _a[_i];
    console.log(tag.toUpperCase());
    //   tag.map()
}
