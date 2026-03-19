// ==================== Product Data ====================
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 2499,
        category: "electronics",
        description: "High-quality sound & noise cancellation",
        image: "🎧",
        rating: 4.5
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 5999,
        category: "electronics",
        description: "Track fitness & receive notifications",
        image: "⌚",
        rating: 4.2
    },
    {
        id: 3,
        name: "USB-C Cable",
        price: 399,
        category: "electronics",
        description: "Fast charging & data transfer",
        image: "🔌",
        rating: 4.0
    },
    {
        id: 4,
        name: "Casual T-Shirt",
        price: 599,
        category: "fashion",
        description: "Comfortable cotton material",
        image: "👕",
        rating: 4.3
    },
    {
        id: 5,
        name: "Blue Jeans",
        price: 1299,
        category: "fashion",
        description: "Premium denim quality",
        image: "👖",
        rating: 4.4
    },
    {
        id: 6,
        name: "Running Shoes",
        price: 3999,
        category: "fashion",
        description: "Ergonomic design for comfort",
        image: "👟",
        rating: 4.6
    },
    {
        id: 7,
        name: "Coffee Maker",
        price: 2999,
        category: "home",
        description: "Brew perfect coffee every time",
        image: "☕",
        rating: 4.5
    },
    {
        id: 8,
        name: "Cooking Pan Set",
        price: 1899,
        category: "home",
        description: "Non-stick cookware collection",
        image: "🍳",
        rating: 4.2
    },
    {
        id: 9,
        name: "LED Desk Lamp",
        price: 899,
        category: "home",
        description: "Energy-efficient lighting",
        image: "💡",
        rating: 4.1
    },
    {
        id: 10,
        name: "JavaScript Guide",
        price: 499,
        category: "books",
        description: "Learn JS from basics",
        image: "📖",
        rating: 4.7
    },
    {
        id: 11,
        name: "Web Design Book",
        price: 599,
        category: "books",
        description: "Design principles & best practices",
        image: "📚",
        rating: 4.4
    },
    {
        id: 12,
        name: "React Mastery",
        price: 799,
        category: "books",
        description: "Advanced React patterns",
        image: "⚛️",
        rating: 4.8
    },
    {
        id: 13,
        name: "Wireless Mouse",
        price: 1299,
        category: "electronics",
        description: "Ergonomic & precision control",
        image: "🖱️",
        rating: 4.4
    },
    {
        id: 14,
        name: "Mechanical Keyboard",
        price: 4999,
        category: "electronics",
        description: "RGB backlit gaming keyboard",
        image: "⌨️",
        rating: 4.7
    },
    {
        id: 15,
        name: "Phone Case",
        price: 449,
        category: "electronics",
        description: "Durable protection & style",
        image: "📱",
        rating: 4.3
    },
    {
        id: 16,
        name: "Winter Jacket",
        price: 2499,
        category: "fashion",
        description: "Warm & waterproof material",
        image: "🧥",
        rating: 4.5
    },
    {
        id: 17,
        name: "Sports Cap",
        price: 399,
        category: "fashion",
        description: "Customizable sports cap",
        image: "🧢",
        rating: 4.2
    },
    {
        id: 18,
        name: "Casual Sneakers",
        price: 1899,
        category: "fashion",
        description: "Comfortable everyday shoes",
        image: "👞",
        rating: 4.4
    },
    {
        id: 19,
        name: "Microwave Oven",
        price: 3499,
        category: "home",
        description: "Fast & efficient cooking",
        image: "🔥",
        rating: 4.3
    },
    {
        id: 20,
        name: "Dining Table",
        price: 8999,
        category: "home",
        description: "Modern wooden dining table",
        image: "🪑",
        rating: 4.6
    },
    {
        id: 21,
        name: "Pillow Set",
        price: 1499,
        category: "home",
        description: "Comfortable cotton pillows",
        image: "🛏️",
        rating: 4.4
    },
    {
        id: 22,
        name: "Python Programming",
        price: 699,
        category: "books",
        description: "Master Python from scratch",
        image: "🐍",
        rating: 4.6
    },
    {
        id: 23,
        name: "UI/UX Design Guide",
        price: 749,
        category: "books",
        description: "Complete design methodology",
        image: "🎨",
        rating: 4.5
    },
    {
        id: 24,
        name: "Node.js Deep Dive",
        price: 849,
        category: "books",
        description: "Server-side JavaScript mastery",
        image: "🚀",
        rating: 4.7
    }
];

// ==================== Coupon Codes ====================
const coupons = {
    "SAVE10": 0.10,
    "SAVE20": 0.20,
    "WELCOME": 0.15,
    "TECH50": 0.50,
};

// ==================== Cart Management ====================
class Cart {
    constructor() {
        this.loadCart();
    }

    loadCart() {
        const savedCart = localStorage.getItem("cart");
        this.items = savedCart ? JSON.parse(savedCart) : [];
    }

    saveCart() {
        localStorage.setItem("cart", JSON.stringify(this.items));
        this.updateCartCount();
    }

    addItem(product, quantity = 1) {
        const existingItem = this.items.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }
        
        this.saveCart();
        return true;
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(1, quantity);
            if (item.quantity === 0) {
                this.removeItem(productId);
            } else {
                this.saveCart();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    clearCart() {
        this.items = [];
        this.saveCart();
    }

    updateCartCount() {
        const cartCountElement = document.getElementById("cartCount");
        if (cartCountElement) {
            cartCountElement.textContent = this.getItemCount();
        }
    }
}

// ==================== Initialize Cart ====================
const cart = new Cart();

// ==================== Toast Notification ====================
function showToast(message, type = "success") {
    const toastElement = document.getElementById("toast");
    toastElement.textContent = message;
    toastElement.className = `toast show ${type}`;
    
    setTimeout(() => {
        toastElement.classList.remove("show");
    }, 3000);
}

// ==================== Index Page Functions ====================
function displayProducts(productsToShow = products) {
    const productsList = document.getElementById("productsList");
    
    if (!productsList) return;
    
    if (productsToShow.length === 0) {
        productsList.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px;"><p>No products found</p></div>';
        return;
    }

    productsList.innerHTML = productsToShow.map(product => `
        <div class="product-card">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-rating">⭐ ${product.rating}/5</div>
                <div class="product-price">₹${product.price}</div>
                <div class="product-controls">
                    <div class="quantity-control">
                        <button onclick="decreaseQuantity(${product.id})">−</button>
                        <input type="number" id="qty-${product.id}" value="1" min="1" readonly>
                        <button onclick="increaseQuantity(${product.id})">+</button>
                    </div>
                    <button class="btn-add-cart" onclick="addTCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join("");
}

function increaseQuantity(productId) {
    const input = document.getElementById(`qty-${productId}`);
    input.value = parseInt(input.value) + 1;
}

function decreaseQuantity(productId) {
    const input = document.getElementById(`qty-${productId}`);
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

function addTCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantity = parseInt(document.getElementById(`qty-${productId}`).value);
    
    if (cart.addItem(product, quantity)) {
        showToast(`✨ ${product.name} added to cart!`, "success");
        document.getElementById(`qty-${productId}`).value = 1;
    }
}

// ==================== Search & Filter ====================
function setupFilters() {
    const searchBox = document.getElementById("searchBox");
    const categoryFilter = document.getElementById("categoryFilter");
    const sortFilter = document.getElementById("sortFilter");

    if (searchBox) {
        searchBox.addEventListener("input", filterProducts);
    }
    if (categoryFilter) {
        categoryFilter.addEventListener("change", filterProducts);
    }
    if (sortFilter) {
        sortFilter.addEventListener("change", filterProducts);
    }
}

function filterProducts() {
    let filteredProducts = [...products];

    // Search filter
    const searchBox = document.getElementById("searchBox");
    if (searchBox) {
        const searchTerm = searchBox.value.toLowerCase();
        filteredProducts = filteredProducts.filter(p =>
            p.name.toLowerCase().includes(searchTerm) ||
            p.description.toLowerCase().includes(searchTerm)
        );
    }

    // Category filter
    const categoryFilter = document.getElementById("categoryFilter");
    if (categoryFilter && categoryFilter.value) {
        filteredProducts = filteredProducts.filter(p => p.category === categoryFilter.value);
    }

    // Sort filter
    const sortFilter = document.getElementById("sortFilter");
    if (sortFilter) {
        switch (sortFilter.value) {
            case "price-low":
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case "name":
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }
    }

    displayProducts(filteredProducts);
}

// ==================== Cart Page Functions ====================
function displayCart() {
    const cartItems = document.getElementById("cartItems");
    const emptyCart = document.getElementById("emptyCart");
    const cartTable = document.getElementById("cartTable");

    if (!cartItems) return;

    if (cart.items.length === 0) {
        emptyCart.style.display = "block";
        cartTable.style.display = "none";
        updateSummary();
        return;
    }

    emptyCart.style.display = "none";
    cartTable.style.display = "table";

    cartItems.innerHTML = cart.items.map(item => `
        <tr>
            <td>
                <div class="product-cell">
                    <div class="product-cell-icon">${item.image}</div>
                    <div>
                        <div style="font-weight: bold;">${item.name}</div>
                        <div style="font-size: 12px; color: #666;">${item.description}</div>
                    </div>
                </div>
            </td>
            <td>₹${item.price}</td>
            <td>
                <div class="quantity-control">
                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity - 1})">−</button>
                    <input type="number" value="${item.quantity}" readonly style="width: 40px;">
                    <button onclick="updateCartQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </td>
            <td>₹${item.price * item.quantity}</td>
            <td>
                <button class="btn-remove" onclick="removeFromCart(${item.id})">Remove</button>
            </td>
        </tr>
    `).join("");

    updateSummary();
}

function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
    } else {
        cart.updateQuantity(productId, newQuantity);
        displayCart();
    }
}

function removeFromCart(productId) {
    const product = cart.items.find(p => p.id === productId);
    cart.removeItem(productId);
    displayCart();
    showToast(`🗑️ ${product.name} removed from cart`, "warning");
}

function updateSummary() {
    const subtotal = cart.getTotal();
    const deliveryCharge = subtotal > 0 ? (subtotal > 5000 ? 0 : 99) : 0;
    let discount = 0;

    // Apply coupon if any
    const couponCode = localStorage.getItem("appliedCoupon");
    if (couponCode && coupons[couponCode]) {
        discount = subtotal * coupons[couponCode];
    }

    const total = subtotal + deliveryCharge - discount;

    document.getElementById("subtotalPrice").textContent = `₹${subtotal}`;
    document.getElementById("deliveryCharge").textContent = `₹${deliveryCharge}`;
    document.getElementById("totalPrice").textContent = `₹${total}`;

    // Show/hide discount row
    const discountRow = document.getElementById("discountRow");
    const discountPrice = document.getElementById("discountPrice");
    
    if (discount > 0) {
        discountRow.style.display = "flex";
        discountPrice.textContent = `-₹${Math.round(discount)}`;
    } else {
        discountRow.style.display = "none";
    }

    // Update checkout modal total
    const finalTotal = document.getElementById("finalTotal");
    if (finalTotal) {
        finalTotal.textContent = `₹${Math.round(total)}`;
    }
}

// ==================== Coupon Functionality ====================
function setupCoupon() {
    const applyCouponBtn = document.getElementById("applyCoupon");
    if (applyCouponBtn) {
        applyCouponBtn.addEventListener("click", applyCoupon);
    }
}

function applyCoupon() {
    const couponInput = document.getElementById("couponCode");
    const code = couponInput.value.toUpperCase().trim();

    if (!code) {
        showToast("❌ Please enter a coupon code", "error");
        return;
    }

    if (coupons[code]) {
        localStorage.setItem("appliedCoupon", code);
        const discount = (coupons[code] * 100).toFixed(0);
        showToast(`✅ Coupon applied! ${discount}% off`, "success");
        couponInput.value = "";
        updateSummary();
    } else {
        showToast("❌ Invalid coupon code", "error");
        couponInput.value = "";
    }
}

// ==================== Checkout Functionality ====================
function setupCheckout() {
    const checkoutBtn = document.getElementById("checkoutBtn");
    const continueShopping = document.getElementById("continueShopping");
    const closeModal = document.getElementById("closeModal");
    const placeOrderBtn = document.getElementById("placeOrderBtn");
    const backToShop = document.getElementById("backToShop");

    if (checkoutBtn) checkoutBtn.addEventListener("click", openCheckoutModal);
    if (continueShopping) continueShopping.addEventListener("click", () => window.location.href = "index.html");
    if (closeModal) closeModal.addEventListener("click", closeCheckoutModal);
    if (placeOrderBtn) placeOrderBtn.addEventListener("click", placeOrder);
    if (backToShop) backToShop.addEventListener("click", () => window.location.href = "index.html");
}

function openCheckoutModal() {
    if (cart.items.length === 0) {
        showToast("🛒 Your cart is empty!", "error");
        return;
    }

    const modal = document.getElementById("checkoutModal");
    modal.style.display = "flex";
}

function closeCheckoutModal() {
    const modal = document.getElementById("checkoutModal");
    modal.style.display = "none";
}

function placeOrder() {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const city = document.getElementById("city").value.trim();
    const zipcode = document.getElementById("zipcode").value.trim();

    // Validation
    if (!fullName || !email || !phone || !address || !city || !zipcode) {
        showToast("❌ Please fill all fields", "error");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showToast("❌ Invalid email address", "error");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        showToast("❌ Phone number must be 10 digits", "error");
        return;
    }

    // Close checkout modal
    document.getElementById("checkoutModal").style.display = "none";

    // Show success modal
    const orderNumber = "ORD" + Math.random().toString(36).substr(2, 9).toUpperCase();
    document.getElementById("orderNumber").textContent = `Order ID: ${orderNumber}`;
    
    const successModal = document.getElementById("successModal");
    successModal.style.display = "flex";

    // Clear cart
    setTimeout(() => {
        cart.clearCart();
        localStorage.removeItem("appliedCoupon");
    }, 2000);
}

// ==================== Close Modal on Escape Key ====================
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        const checkoutModal = document.getElementById("checkoutModal");
        const successModal = document.getElementById("successModal");
        
        if (checkoutModal) checkoutModal.style.display = "none";
        if (successModal) successModal.style.display = "none";
    }
});

// ==================== Close Modal on Outside Click ====================
window.addEventListener("click", (e) => {
    const checkoutModal = document.getElementById("checkoutModal");
    const successModal = document.getElementById("successModal");
    
    if (e.target === checkoutModal) {
        checkoutModal.style.display = "none";
    }
    if (e.target === successModal) {
        successModal.style.display = "none";
    }
});

// ==================== Initialize on Page Load ====================
document.addEventListener("DOMContentLoaded", () => {
    // Update cart count on every page
    cart.updateCartCount();

    // Index page initialization
    if (document.getElementById("productsList")) {
        displayProducts();
        setupFilters();
    }

    // Cart page initialization
    if (document.getElementById("cartItems")) {
        displayCart();
        setupCheckout();
        setupCoupon();
    }
});
