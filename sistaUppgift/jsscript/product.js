const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get('id');const products = {
    "1": {
        image: "../bilder/smallareBilder/thirdproduct.webp",
        title: "Fancy Chess Board",
        description: "Is there an important date coming soon and you don't know what gift to give? No worries! For only $499, you can gift a full chess board.",
        price: "Price: $499.99"
    },
    "2": {
        image: "../bilder/smallareBilder/secondproduct.webp",
        title: "Arabian Chess Board",
        description: "For only $599, you can get a full chess set Arabian style with gold paint.",
        price: "Price: $599.99"
    },
    "3": {
        image: "../bilder/smallareBilder/firstproduct.webp",
        title: "Certified Chess Board",
        description: "For only $399, you can get your hands on a certified chess board from ABI Not chess.com.",
        price: "Price: $399.99"
    }
};

if (products[productId]) {
    const product = products[productId];
    document.getElementById("productImage").src = product.image;
    document.getElementById("productTitle").innerHTML = product.title;
    document.getElementById("productDescription").innerHTML = product.description;
    document.getElementById("price").innerHTML = product.price;
} else {
    document.getElementById("productDescription").innerHTML = "The URL is wrong or the product does not exist anymore.";
}