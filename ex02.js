const listCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateId(length, prefix = "") {

    if (typeof length !== 'number' || length <= 0 || length >= 100) {
        return 'length phải là số nguyên dương nhỏ hơn 100';
    }
    if (typeof prefix !== 'string' || prefix.length >= 10) {
        return 'prefix nếu có phải là chuỗi nhỏ hơn 10 ký tự ';
    }
    let id = prefix;
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * listCharacters.length);
        id += listCharacters[randomIndex];
    }
    return id;
}

console.log(generateId(8, "user")); 
console.log(generateId(4, "product-")); 
console.log(generateId(6, "category-")); 
console.log(generateId(10)); 
