function checkAvailability(product, stock) {
    if (stock > 0) {
        return product + " is available";
    } else {
        return product + " is out of stock";
    }
}

function checkDelivery(location) {
    const availableLocations = ["Hyderabad", "Bangalore", "Chennai"];

    if (availableLocations.includes(location)) {
        return "Delivery available in " + location;
    } else {
        return "Delivery not available in " + location;
    }
}

// Test
console.log(checkAvailability("Laptop", 5));
console.log(checkDelivery("Hyderabad"));
console.log(checkDelivery("Village Area"));