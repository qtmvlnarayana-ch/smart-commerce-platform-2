function verifyProduct(isVerified) {
    if (isVerified) {
        return "Product is Verified ✅";
    } else {
        return "Product is NOT Verified ❌";
    }
}

console.log(verifyProduct(true));