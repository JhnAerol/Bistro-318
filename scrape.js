const fs = require('fs');

// Manually verified image URL mapping from HTML snippets
const imageMap = {
    // Signature Rice Meals
    "Breaded Pork Chop": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/df2eff0b-5483-4fc6-a0af-ad160d5c4f2e.jpg",
    "Beef Pepper Rice": "https://images.deliveryhero.io/image/fd-ph/Products/61105382.jpg",
    "Salisbury Steak": "https://images.deliveryhero.io/image/fd-ph/products/72754360.jpg",
    "Chicken Rice Bowl": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/936c5520-3cd4-434b-8880-d978a97c3a16.jpg",
    // Rice Meals
    "Chicken Fingers": "https://images.deliveryhero.io/image/fd-ph/products/38004739.jpg",
    // Pasta
    "Carbonara": "https://images.deliveryhero.io/image/fd-ph/products/53643661.jpg",
    "Sweet Style Spaghetti": "https://images.deliveryhero.io/image/fd-ph/products/53643665.jpg",
    // Sandwich
    "Bacon & Egg Toast": "https://images.deliveryhero.io/image/fd-ph/products/65219881.jpg",
    "Ham & Egg Toast": "https://images.deliveryhero.io/image/fd-ph/Products/33656267.jpg",
    "Chocolate Fudge Sandwich": "https://images.deliveryhero.io/image/fd-ph/products/43754025.jpg",
    "Chicken Overload Sandwich": "https://images.deliveryhero.io/image/fd-ph/products/65219877.jpg",
    "Tuna Melt Sandwich": "https://images.deliveryhero.io/image/fd-ph/products/65219876.jpg",
    // Noodles
    "Chili Cheese Ramen": "https://images.deliveryhero.io/image/fd-ph/products/50003716.jpg",
    // Appetizers
    "Overload Nachos": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/7000ba85-d9a9-4b33-a94f-6c9171c69a02.jpg",
    "Lumpia Shanghai Platter (10PCS)": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/16a213ec-580a-450e-9060-0953c8875273.jpg",
    "Crispy Chicken Skin": "https://images.deliveryhero.io/image/fd-ph/products/39975779.jpg",
    "10 Pc Chicken Nuggets": "https://images.deliveryhero.io/image/fd-ph/products/64331680.jpg",
    // Blended Coffee
    "Coffe Almond": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/da0e8cb4-52cf-439e-bc4a-e6a10b81917d.jpg",
    "Coffee Caramel": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/d04c30d1-8313-40ef-9973-a1da942e6a03.jpg",
    "Coffee Dark Mocha": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/e5944fe2-2b92-43ef-8b14-844b19e86906.jpg",
    "Coffee Matcha": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/04aa6290-d9f6-4484-8ed7-5f84e5be5a34.jpg",
    "Coffee Salted Caramel": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/ede1f294-5259-4fbb-9257-ff53dee22397.jpg",
    // Non-Coffee Blended
    "Blended Java Chip": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/5a7b4bd7-d742-48f4-aa78-8d5bb25736de.jpg",
    "Blended Dark Chocolate": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/4cc32671-fd81-4f4b-a41b-ac8788fb710f.jpg",
    "Blended Salted Caramel Cream": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/69db006e-2f8d-4ce2-a49e-7bf235564349.jpg",
    "Blended Strawberry Cream": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/80608bfa-67fa-4524-bf12-6ee7a9c719e7.jpg",
    "Blended Caramel Cream": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/dcbc76d7-dbd1-4b67-bbc4-247452632bd9.jpg",
    "Blended Matcha Cream": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/6f8c3250-0704-43f1-98c5-28e906d79f5c.jpg",
    "Blended Vanilla Cream": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/1d25ef31-9089-44a2-9f47-55de194d8075.jpg",
    "Blended Green Apple": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/ac3fbfc7-f3b4-46d2-bc8f-ff425c8be3d3.jpg",
    // Hot Coffee
    "Hot Coffee Americano": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/37345172/2cb6d08e-202e-4b13-8155-6bba1b7eb92e.jpg",
    "Hot Coffee Latte": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/964d99dd-c366-4925-97ad-0ce16273bc02.jpg",
    "Hot Coffee Cappuccino": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/bf600ca8-e065-48da-bf77-8c444a4039a9.jpg",
    "Hot Coffee Mocha": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/e89e0cc5-7365-491d-918f-2b6829bf8f7e.jpg",
    "Hot Coffee Spanish Latte": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/558b410e-e5d5-48dc-8059-36b9534f84b4.jpg",
    // Hot Non-Coffee Drinks
    "Hot Chocolate": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/e846bd5f-bd29-4d70-aa24-b2e22a652683.jpg",
    "Hot White Matcha Latte": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/e7bd14f0-e2e6-4dc9-a553-d2d49b9a0ed8.jpg",
    // Iced Non - Coffee
    "Milky Oreo": "https://images.deliveryhero.io/image/fd-ph/Products/65223391.jpg",
    "Chocolate": "https://images.deliveryhero.io/image/fd-ph/Products/65223395.jpg",
    "White Matcha Latte": "https://images.deliveryhero.io/image/fd-ph/Products/65223399.jpg",
    "Blueberry Milk": "https://images.deliveryhero.io/image/fd-ph/Products/65223403.jpg",
    "Matcha Berry": "https://images.deliveryhero.io/image/fd-ph/Products/65223474.jpg",
    "Strawberry Latte": "https://images.deliveryhero.io/image/fd-ph/Products/65223477.jpg",
    "Pure Matcha Latte": "https://images.deliveryhero.io/image/fd-ph/Products/65223479.jpg",
    // Flavored Soda
    "Green Apple Lemon Soda": "https://images.deliveryhero.io/image/fd-ph/Products/53521812.jpg",
    "Strawberry Lemon Soda": "https://images.deliveryhero.io/image/fd-ph/products/53521818.jpg",
    // Cold Drinks
    "Sola Raspberry Iced Tea 437ml": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/0d711508-6073-48de-90f8-ba8792406cd8.jpg",
    "Sola Peach Iced Tea 437ml": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/314408a3-4f63-43d6-9837-d48ba62511cb.jpg",
    "Sola Lemon Iced Tea 437ml": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/95508896/32f82a02-fefa-4d07-9820-2524c19b4c49.jpg",
    "Coke Regular Can 320ml": "https://images.deliveryhero.io/image/fd-ph/Products/53521310.jpg",
    "Coke Zero Can 320ml": "https://images.deliveryhero.io/image/fd-ph/Products/53521320.jpg",
    "Pepsi Regular Can 320ml": "https://images.deliveryhero.io/image/fd-ph/Products/53521343.jpg",
    "Sprite Regular Can 320ml": "https://images.deliveryhero.io/image/fd-ph/Products/53521354.jpg",
    "Nature's Spring Bottled Water": "https://images.deliveryhero.io/image/fd-ph/Products/59347467.jpg",
    "Royal Regular Can": "https://images.deliveryhero.io/image/fd-ph/Products/59347549.jpg",
    "C2 Green Tea Lemon": "https://images.deliveryhero.io/image/fd-ph/Products/59347576.jpg",
    "C2 Green Tea Apple": "https://images.deliveryhero.io/image/fd-ph/Products/59347582.jpg",
    // Coolers
    "Ocean Cooler": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/8f359a53-d98c-4635-8726-671a687651d7.jpg",
    "Island Cooler": "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/51c70063-d093-407c-af71-0617d3b10c26.jpg",
    // Premium Iced Coffee
    "Americano": "https://images.deliveryhero.io/image/fd-ph/products/50111760.jpg",
    "Latte": "https://images.deliveryhero.io/image/fd-ph/Products/65222719.jpg",
    "Caramel Macchiato": "https://images.deliveryhero.io/image/fd-ph/Products/65222748.jpg",
    "Spanish Latte": "https://images.deliveryhero.io/image/fd-ph/Products/65222775.jpg",
    "Dirty Matcha": "https://images.deliveryhero.io/image/fd-ph/Products/65222778.jpg",
    "Mocha": "https://images.deliveryhero.io/image/fd-ph/products/65222784.jpg",
    "French Vanilla": "https://images.deliveryhero.io/image/fd-ph/Products/65222790.jpg",
    "Salted Caramel Latte": "https://images.deliveryhero.io/image/fd-ph/products/65222792.jpg",
    "Biscoff Latte": "https://images.deliveryhero.io/image/fd-ph/products/71692479.jpg",
    // Ice cream - text only
};

try {
    let rawHtml = fs.readFileSync('C:\\Users\\User\\OneDrive\\Desktop\\sourcecode.txt', 'utf8');

    // Decode unicode escapes
    rawHtml = rawHtml.replace(/\\u([\dA-Fa-f]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
    // Decode HTML entities in the FULL HTML so that background-image URLs become readable
    rawHtml = rawHtml
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, '&')
        .replace(/&#39;/g, "'");

    const unescapeHtml = (text) => {
        if (!text) return '';
        return text
            .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(dec)).trim();
    };

    const categorySections = rawHtml.split(/(?=<div[^>]*dish-category-section[^>]*>)/g);

    const menuData = [];

    for (const section of categorySections) {
        const titleMatch = section.match(/data-testid="menu-category-section-title"[^>]*>[\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>/);
        if (!titleMatch) continue;
        const categoryName = unescapeHtml(titleMatch[1].replace(/<[^>]+>/g, '').trim());
        if (!categoryName || categoryName.toLowerCase() === 'popular') continue;

        const itemMatches = [...section.matchAll(/<li[^>]*data-testid="menu-product"[^>]*>([\s\S]*?)<\/li>/g)];
        if (!itemMatches.length) continue;

        const items = [];
        for (const itemMatch of itemMatches) {
            const itemHtml = itemMatch[1];
            const nameMatch = itemHtml.match(/data-testid="menu-product-name"[^>]*>([\s\S]*?)<\/span>/);
            if (!nameMatch) continue;
            const name = unescapeHtml(nameMatch[1].trim());

            const priceMatch = itemHtml.match(/data-testid="menu-product-price"[^>]*>(?:from\s*)?[^\d]*(\d[\d,.]*)<\/p>/);
            const price = priceMatch ? priceMatch[1].trim() : "0";

            const descMatch = itemHtml.match(/data-testid="menu-product-description"[^>]*>([\s\S]*?)<\/p>/);
            const description = descMatch ? unescapeHtml(descMatch[1].trim()) : "";

            // Try to find image: <img src> first, then background-image url
            let image = imageMap[name] || "";

            if (!image) {
                const imgMatch = itemHtml.match(/data-testid="menu-product-image"[\s\S]*?<img[^>]+src="([^"?]+)/);
                if (imgMatch && imgMatch[1].includes('deliveryhero.io')) {
                    image = imgMatch[1];
                }
            }

            if (!image) {
                const bgMatch = itemHtml.match(/data-testid="menu-product-image"[\s\S]*?background-image:\s*url\("([^"?]+)/);
                if (bgMatch && bgMatch[1].includes('deliveryhero.io')) {
                    image = bgMatch[1];
                }
            }

            items.push({ name, price, description, ...(image && { image }) });
        }

        if (items.length > 0) {
            menuData.push({ category: categoryName, items });
        }
    }

    // Format and write to main.js
    const mainJsPath = 'C:\\Users\\User\\OneDrive\\Desktop\\SideProjects\\Bistro 318\\main.js';
    let mainJs = fs.readFileSync(mainJsPath, 'utf8');

    const formatItems = (items) => items.map(item =>
        `            { name: ${JSON.stringify(item.name)}, price: ${JSON.stringify(item.price)}, description: ${JSON.stringify(item.description)}${item.image ? `, image: ${JSON.stringify(item.image)}` : ''} }`
    ).join(',\n');

    const formatCategories = (cats) => cats.map(cat =>
        `    {\n        category: ${JSON.stringify(cat.category)},\n        items: [\n${formatItems(cat.items)}\n        ]\n    }`
    ).join(',\n');

    const newMenuData = `const menuData = [\n${formatCategories(menuData)}\n];\n\n`;
    const finalJs = mainJs.replace(/const menuData = \[[\s\S]+?\];\s*\n+(?=document\.addEventListener)/, newMenuData);
    fs.writeFileSync(mainJsPath, finalJs);

    let totalItems = 0, totalImages = 0;
    for (const cat of menuData) {
        console.log(`\n[${cat.category}] - ${cat.items.length} items`);
        for (const item of cat.items) {
            totalItems++;
            const imgStatus = item.image ? '✓ img' : '  ---';
            if (item.image) totalImages++;
            console.log(`  ${imgStatus}  ${item.name}`);
        }
    }
    console.log(`\n✅ DONE: ${menuData.length} categories, ${totalItems} items, ${totalImages} with images`);

} catch (e) {
    console.error('ERROR:', e);
}
