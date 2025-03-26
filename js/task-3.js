// Function to calculate the width of an element with box-sizing: border-box.
function getElementWidth(content, padding, border) {
    const elementWidth = Number.parseFloat(content) + Number.parseFloat(padding) * 2 + Number.parseFloat(border) * 2;
    return elementWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200

console.assert(getElementWidth("50px", "8px", "4px") === 74, "Test failed");
console.assert(getElementWidth("60px", "12px", "8.5px") === 101, "Test failed");
console.assert(getElementWidth("200px", "0px", "0px") === 200, "Test failed");
