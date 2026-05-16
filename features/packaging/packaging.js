function optimizePackaging(items) {
    let totalWeight = 0;

    items.forEach(item => {
        totalWeight += item.weight;
    });

    if (totalWeight < 5) {
        return "Use Small Box";
    } else if (totalWeight < 10) {
        return "Use Medium Box";
    } else {
        return "Use Large Box";
    }
}

// Test
const order = [
    { name: "Laptop", weight: 2 },
    { name: "Mouse", weight: 1 },
    { name: "Keyboard", weight: 2 }
];

console.log(optimizePackaging(order));