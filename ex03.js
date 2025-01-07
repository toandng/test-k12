let highlightKeyword= "Học lập trình tại F8 rất thú vị, bạn có biết điều gì THÚ VỊ hơn không?";
function highlighKeyWord(content, keyword) {
    

    const regx = new RegExp(`(${keyword})`,  "gi");
    const hightlightContent = content.replace(regx, '<strong style= "color: red;">$1</strong>');
    // document.write(hightlightContent);
    if(!Array.isArray(String)) {
                return "Invalid";
    }
} 
console.log(highlighKeyWord(highlightKeyword,"thú vị")); 
console.log(highlighKeyWord(highlightKeyword," "));



