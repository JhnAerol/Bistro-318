const menuData = [
    {
        category: "Bistro 318 Signature Rice Meals",
        items: [
            { name: "Breaded Pork Chop", price: "295", description: "Perfectly seasoned pork chop coated in crunchy breadcrumbs, fried to golden perfection, and served with rice and rich gravy on the side.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/df2eff0b-5483-4fc6-a0af-ad160d5c4f2e.jpg" },
            { name: "Beef Pepper Rice", price: "355", description: "For reference: Sizzling beef slices served over pepper-seasoned rice.", image: "https://images.deliveryhero.io/image/fd-ph/Products/61105382.jpg" },
            { name: "Salisbury Steak", price: "355", description: "Our Salisbury steak is pan seared to lock in its juicy, meaty flavor, then smothered in a rich mushroom gravy that packed with umami. Served with steamed white rice topped with herbs and a colorful medley of carrots, corn, and peas, this plate brings together comfort and flavor.", image: "https://images.deliveryhero.io/image/fd-ph/products/72754360.jpg" },
            { name: "Chicken Rice Bowl", price: "200", description: "Chicken Tenders in Choice of Sauce.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/936c5520-3cd4-434b-8880-d978a97c3a16.jpg" }
        ]
    },
    {
        category: "Ice cream",
        items: [
            { name: "Samanco Chocolate box", price: "388", description: "1 box Samanco Chocolate (4pcs)" },
            { name: "Strawberry Melona box", price: "459", description: "1 box Strawberry Melona (8pcs)" },
            { name: "Samanco Chocolate", price: "99", description: "1pc Samanco chocolate" },
            { name: "Strawberry Melona", price: "58", description: "1pc strawberry melona" }
        ]
    },
    {
        category: "Rice Meals",
        items: [
            { name: "Chicken Fingers", price: "179", description: "Chicken breast fillet with rice and sauce", image: "https://images.deliveryhero.io/image/fd-ph/products/38004739.jpg" }
        ]
    },
    {
        category: "Pasta",
        items: [
            { name: "Carbonara", price: "295", description: "Our Carbonara pasta for two is loaded with crispy bacon, fresh Parmesan cheese, and a velvety sauce that binds it all together. (Good for 2)", image: "https://images.deliveryhero.io/image/fd-ph/products/53643661.jpg" },
            { name: "Sweet Style Spaghetti", price: "295", description: "Pasta in signature sweet style tomato sauce with ground meat and hotdog and a sprinkle of of cheddar cheese. (Good for 2)", image: "https://images.deliveryhero.io/image/fd-ph/products/53643665.jpg" }
        ]
    },
    {
        category: "Sandwich",
        items: [
            { name: "Tuna Melt Sandwich", price: "255", description: "Made with flaky tuna, tomatoes, egg, cheese, lettuce and creamy mayonnaise all layered between of bread.", image: "https://images.deliveryhero.io/image/fd-ph/products/65219876.jpg" },
            { name: "Chicken Overload Sandwich", price: "255", description: "Sandwich with Lettuce, Tomato, Cheese, Egg & Chicken.", image: "https://images.deliveryhero.io/image/fd-ph/products/65219877.jpg" },
            { name: "Bacon & Egg Toast", price: "159", description: "Crispy Bacon, Cheese & Egg.", image: "https://images.deliveryhero.io/image/fd-ph/products/65219881.jpg" },
            { name: "Ham & Egg Toast", price: "159", description: "Ham, Cheese & Egg", image: "https://images.deliveryhero.io/image/fd-ph/Products/33656267.jpg" },
            { name: "Chocolate Fudge Sandwich", price: "159", description: "Grilled chocolate hazelnut sandwich with melted marshmallows", image: "https://images.deliveryhero.io/image/fd-ph/products/43754025.jpg" }
        ]
    },
    {
        category: "Noodles",
        items: [
            { name: "Chili Cheese Ramen", price: "225", description: "Buldak Cheese Ramen", image: "https://images.deliveryhero.io/image/fd-ph/products/50003716.jpg" }
        ]
    },
    {
        category: "Appetizers",
        items: [
            { name: "Overload Nachos", price: "285", description: "Loaded with seasoned ground meat, fresh tomatoes, cucumbers, and a generous drizzle of creamy cheese sauce our nachos are the perfect mix of crunch and flavor in every bite.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/7000ba85-d9a9-4b33-a94f-6c9171c69a02.jpg" },
            { name: "Lumpia Shanghai Platter (10PCS)", price: "298", description: "Crispy golden Lumpia filled with flavorful minced pork and vegetables, served with our creamy Thousand Island dip. Garnished with fresh green scallions for that perfect finishing touch a classic Filipino favorite that’s crunchy, savory, and satisfying in every bite.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/16a213ec-580a-450e-9060-0953c8875273.jpg" },
            { name: "Crispy Chicken Skin", price: "245", description: "Crispy Salted Chicken skin", image: "https://images.deliveryhero.io/image/fd-ph/products/39975779.jpg" },
            { name: "10 Pc Chicken Nuggets", price: "196", description: "10 pc Juicy Chicken nuggets with choice of dipping sauce", image: "https://images.deliveryhero.io/image/fd-ph/products/64331680.jpg" }
        ]
    },
    {
        category: "Premium Iced Coffee",
        items: [
            { name: "Americano", price: "140", description: "Rich espresso shot with cold water", image: "https://images.deliveryhero.io/image/fd-ph/products/50111760.jpg" },
            { name: "Latte", price: "205", description: "Creamy milk with rich espresso", image: "https://images.deliveryhero.io/image/fd-ph/Products/65222719.jpg" },
            { name: "Caramel Macchiato", price: "205", description: "Rich espresso, creamy milk & caramel sauce", image: "https://images.deliveryhero.io/image/fd-ph/Products/65222748.jpg" },
            { name: "Spanish Latte", price: "205", description: "Creamy milk, sweetened milk &  rich coffee", image: "https://images.deliveryhero.io/image/fd-ph/Products/65222775.jpg" },
            { name: "Dirty Matcha", price: "205", description: "Sweetened matcha, creamy milk and rich coffee", image: "https://images.deliveryhero.io/image/fd-ph/Products/65222778.jpg" },
            { name: "Mocha", price: "205", description: "Rich coffee, creamy milk and mocha flavor", image: "https://images.deliveryhero.io/image/fd-ph/products/65222784.jpg" },
            { name: "French Vanilla", price: "205", description: "French vanilla syrup, creamy milk, and rich espresso", image: "https://images.deliveryhero.io/image/fd-ph/Products/65222790.jpg" },
            { name: "Salted Caramel Latte", price: "205", description: "Coffee with caramel flavor with a hint of salt", image: "https://images.deliveryhero.io/image/fd-ph/products/65222792.jpg" },
            { name: "Biscoff Latte", price: "225", description: "Smooth and creamy iced coffee blended with the rich, caramelized flavor of Biscoff. Perfectly chilled for a sweet and refreshing pick-me-up.", image: "https://images.deliveryhero.io/image/fd-ph/products/71692479.jpg" }
        ]
    },
    {
        category: "Blended Coffee",
        items: [
            { name: "Coffe Almond", price: "165", description: "Coffee blend with nutty almond flavor.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/da0e8cb4-52cf-439e-bc4a-e6a10b81917d.jpg" },
            { name: "Coffee Caramel", price: "165", description: "Caramel  blended with coffee,milk and ice then topped with whipped cream and caramel syrup", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/d04c30d1-8313-40ef-9973-a1da942e6a03.jpg" },
            { name: "Coffee Dark Mocha", price: "165", description: "Blend of mocha & coffee", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/e5944fe2-2b92-43ef-8b14-844b19e86906.jpg" },
            { name: "Coffee Matcha", price: "165", description: "Creamy sweetened matcha blend with rich flavors", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/04aa6290-d9f6-4484-8ed7-5f84e5be5a34.jpg" },
            { name: "Coffee Salted Caramel", price: "165", description: "Coffee based blended with salted caramel & whipped cream", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/ede1f294-5259-4fbb-9257-ff53dee22397.jpg" }
        ]
    },
    {
        category: "Non-Coffee Blended",
        items: [
            { name: "Blended Java Chip", price: "165", description: "Blended chocolate chips and creamy milk topped with whipped cream and chocolate sauce.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/5a7b4bd7-d742-48f4-aa78-8d5bb25736de.jpg" },
            { name: "Blended Dark Chocolate", price: "165", description: "A rich blend of dark chocolate,milk and ice. Finished with whipped cream & chocolated sauce on top", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/4cc32671-fd81-4f4b-a41b-ac8788fb710f.jpg" },
            { name: "Blended Salted Caramel Cream", price: "165", description: "Salted caramel syrup blended with milk and ice. Finished with whipped cream & caramel sauce.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/69db006e-2f8d-4ce2-a49e-7bf235564349.jpg" },
            { name: "Blended Strawberry Cream", price: "165", description: "A smooth and creamy blend of milk,ice and strawberry sauce. Finished with whipped cream & strawberry sauce on top.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/80608bfa-67fa-4524-bf12-6ee7a9c719e7.jpg" },
            { name: "Blended Caramel Cream", price: "165", description: "Caramel syrup blended with milk and ice topped with whipped cream & caramel drizzle.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/dcbc76d7-dbd1-4b67-bbc4-247452632bd9.jpg" },
            { name: "Blended Matcha Cream", price: "165", description: "Blend of sweetened matcha green tea,milk and ice topped with whipped cream.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/6f8c3250-0704-43f1-98c5-28e906d79f5c.jpg" },
            { name: "Blended Vanilla Cream", price: "165", description: "Creamy blend of vanilla syrup,milk & ice topped with whipped cream.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/1d25ef31-9089-44a2-9f47-55de194d8075.jpg" },
            { name: "Blended Green Apple", price: "165", description: "Refreshing blended creamy green apple.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/ac3fbfc7-f3b4-46d2-bc8f-ff425c8be3d3.jpg" }
        ]
    },
    {
        category: "Hot Coffee",
        items: [
            { name: "Hot Coffee Americano", price: "140", description: "Full shot & water", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/37345172/2cb6d08e-202e-4b13-8155-6bba1b7eb92e.jpg" },
            { name: "Hot Coffee Latte", price: "205", description: "Ristretto + Milk.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/964d99dd-c366-4925-97ad-0ce16273bc02.jpg" },
            { name: "Hot Coffee Cappuccino", price: "205", description: "Ristretto + Frothy Milk.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/bf600ca8-e065-48da-bf77-8c444a4039a9.jpg" },
            { name: "Hot Coffee Mocha", price: "205", description: "Ristretto + Milk + Chocolate.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/e89e0cc5-7365-491d-918f-2b6829bf8f7e.jpg" },
            { name: "Hot Coffee Spanish Latte", price: "205", description: "Rich, creamy Spanish Latte.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/558b410e-e5d5-48dc-8059-36b9534f84b4.jpg" }
        ]
    },
    {
        category: "Hot Non-Coffee Drinks",
        items: [
            { name: "Hot Chocolate", price: "205", description: "Rich, creamy hot chocolate.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/e846bd5f-bd29-4d70-aa24-b2e22a652683.jpg" },
            { name: "Hot White Matcha Latte", price: "205", description: "Sweetened creamy matcha with distinct green tea flavor, served with steamed milk.", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/e7bd14f0-e2e6-4dc9-a553-d2d49b9a0ed8.jpg" }
        ]
    },
    {
        category: "Iced Non - Coffee",
        items: [
            { name: "Milky Oreo", price: "205", description: "For reference: Creamy and indulgent with milky oreo, a delicious treat in every sip.", image: "https://images.deliveryhero.io/image/fd-ph/Products/65223391.jpg" },
            { name: "Chocolate", price: "205", description: "For reference: Indulge in the velvety smoothness of chocolate.", image: "https://images.deliveryhero.io/image/fd-ph/Products/65223395.jpg" },
            { name: "White Matcha Latte", price: "205", description: "For reference: A smooth and creamy matcha latte with a white chocolate twist.", image: "https://images.deliveryhero.io/image/fd-ph/Products/65223399.jpg" },
            { name: "Blueberry Milk", price: "205", description: "For reference only: Refreshing milk infused with the sweet taste of blueberries.", image: "https://images.deliveryhero.io/image/fd-ph/Products/65223403.jpg" },
            { name: "Matcha Berry", price: "205", description: "For Reference: Unique and refreshing Matcha Berry drink.", image: "https://images.deliveryhero.io/image/fd-ph/Products/65223474.jpg" },
            { name: "Strawberry Latte", price: "205", description: "For reference only: Creamy latte infused with the luscious sweetness of strawberries for a delightful sip.", image: "https://images.deliveryhero.io/image/fd-ph/Products/65223477.jpg" },
            { name: "Pure Matcha Latte", price: "205", description: "For reference: Offering a smooth and earthy matcha flavor with creamy steamed milk.", image: "https://images.deliveryhero.io/image/fd-ph/Products/65223479.jpg" }
        ]
    },
    {
        category: "Flavored Soda",
        items: [
            { name: "Green Apple Lemon Soda", price: "149", description: "For reference: A refreshing, tangy fusion of green apple and lemon with a crisp, fizzy finish.", image: "https://images.deliveryhero.io/image/fd-ph/Products/53521812.jpg" },
            { name: "Strawberry Lemon Soda", price: "149", description: "For Reference: A fizzy, tangy soda with a refreshing strawberry-lemon twist.", image: "https://images.deliveryhero.io/image/fd-ph/products/53521818.jpg" }
        ]
    },
    {
        category: "Cold Drinks",
        items: [
            { name: "Sola Raspberry Iced Tea 437ml", price: "150", description: "Sola Raspberry Iced Tea 437ml", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/0d711508-6073-48de-90f8-ba8792406cd8.jpg" },
            { name: "Sola Peach Iced Tea 437ml", price: "150", description: "Sola Peach Iced Tea 437ml", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/314408a3-4f63-43d6-9837-d48ba62511cb.jpg" },
            { name: "Sola Lemon Iced Tea 437ml", price: "150", description: "Sola Lemon Iced Tea 437ml", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/95508896/32f82a02-fefa-4d07-9820-2524c19b4c49.jpg" },
            { name: "Coke Regular Can 320ml", price: "75", description: "For reference: Quench your thirst with Coke.", image: "https://images.deliveryhero.io/image/fd-ph/Products/53521310.jpg" },
            { name: "Coke Zero Can 320ml", price: "75", description: "For reference: Chilled, carbonated beverage with a sweet, refreshing taste and zero calories.", image: "https://images.deliveryhero.io/image/fd-ph/Products/53521320.jpg" },
            { name: "Pepsi Regular Can 320ml", price: "75", description: "Canned Soda", image: "https://images.deliveryhero.io/image/fd-ph/Products/53521343.jpg" },
            { name: "Sprite Regular Can 320ml", price: "75", description: "For reference: Chilled carbonated beverage with a refreshing lemon-lime flavor in a 320ml can.", image: "https://images.deliveryhero.io/image/fd-ph/Products/53521354.jpg" },
            { name: "Nature's Spring Bottled Water", price: "25", description: "Nature's Spring Bottled Water 500ml", image: "https://images.deliveryhero.io/image/fd-ph/Products/59347467.jpg" },
            { name: "Royal Regular Can", price: "75", description: "Royal Regular Can 320ml", image: "https://images.deliveryhero.io/image/fd-ph/Products/59347549.jpg" },
            { name: "C2 Green Tea Lemon", price: "75", description: "C2 Green Tea Lemon 500ml", image: "https://images.deliveryhero.io/image/fd-ph/Products/59347576.jpg" },
            { name: "C2 Green Tea Apple", price: "75", description: "C2 Green Tea Apple 455ml", image: "https://images.deliveryhero.io/image/fd-ph/Products/59347582.jpg" }
        ]
    },
    {
        category: "Coolers",
        items: [
            { name: "Ocean Cooler", price: "99", description: "Blue Lemonade", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/8f359a53-d98c-4635-8726-671a687651d7.jpg" },
            { name: "Island Cooler", price: "99", description: "Cucumber Lemonade", image: "https://images.deliveryhero.io/image/global-menu-service/FP_PH/vendor/y4w9/product/51c70063-d093-407c-af71-0617d3b10c26.jpg" }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.getElementById('menu-container');

    // Inject Menu
    menuData.forEach(cat => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'menu-category reveal';

        const h3 = document.createElement('h3');
        h3.textContent = cat.category;
        categoryDiv.appendChild(h3);

        const itemsGrid = document.createElement('div');
        itemsGrid.className = 'menu-items-grid';

        cat.items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'menu-card';

            const imageHtml = item.image 
                ? `<div class="menu-card-img-wrap">
                     <img src="${item.image}" alt="${item.name}" loading="lazy">
                   </div>` 
                : '';

            itemCard.innerHTML = `
                <div class="menu-card-content">
                    <h4 class="item-name">${item.name}</h4>
                    <div class="item-price">&#8369; ${item.price}</div>
                    <p class="item-desc">${item.description}</p>
                </div>
                ${imageHtml}
            `;
            itemsGrid.appendChild(itemCard);
        });

        categoryDiv.appendChild(itemsGrid);
        menuContainer.appendChild(categoryDiv);
    });

    // Intersection Observer for Reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Contact form submit
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.form-submit');
            btn.textContent = 'Sending…';
            btn.disabled = true;
            // Simulate network delay then show success
            setTimeout(() => {
                contactForm.reset();
                btn.textContent = 'Send Message';
                btn.disabled = false;
                formSuccess.style.display = 'block';
                setTimeout(() => { formSuccess.style.display = 'none'; }, 5000);
            }, 1000);
        });
    }
});
