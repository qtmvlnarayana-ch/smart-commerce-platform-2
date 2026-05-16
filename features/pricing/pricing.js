function calculateTotalPrice(productPrice, shippingFee) {
    const total = productPrice + shippingFee;

    return {
        productPrice: productPrice,
        shippingFee: shippingFee,
        totalPrice: total
    };
}

const result = calculateTotalPrice(500, 50);

console.log("Product Price:", result.productPrice);
console.log("Shipping Fee:", result.shippingFee);
console.log("Total Price:", result.totalPrice);