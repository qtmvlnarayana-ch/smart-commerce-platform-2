function addReview(productName, rating, comment) {
    return {
        product: productName,
        rating: rating,
        comment: comment
    };
}

function showReview(review) {
    console.log("Product:", review.product);
    console.log("Rating:", review.rating, "/5");
    console.log("Comment:", review.comment);
}

const review1 = addReview("Phone", 4, "Good quality product");
showReview(review1);