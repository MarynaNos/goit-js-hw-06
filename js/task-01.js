const itemListEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemListEl.length}`);

for (const itemList of itemListEl) {
    
console.log(`Category: ${itemList.querySelector("h2").textContent}
Elements: ${itemList.querySelector("ul").children.length}`);
    
};

