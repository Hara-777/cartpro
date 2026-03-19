# 🛒 ShopHub - E-Commerce Cart System

A fully functional, professional e-commerce shopping cart application built with **vanilla HTML, CSS, and JavaScript**. Perfect for your portfolio!

## ✨ Features

### 🏠 Product Page (index.html)
- ✅ Display products in a responsive grid
- ✅ Product cards with images, names, descriptions, and ratings
- ✅ Add to cart with quantity selection
- ✅ Search functionality to find products
- ✅ Filter by category (Electronics, Fashion, Home, Books)
- ✅ Sort by price (low to high, high to low) or name
- ✅ Toast notifications when items are added
- ✅ Real-time cart count badge

### 🛍️ Shopping Cart Page (cart.html)
- ✅ Display all cart items in a table format
- ✅ Increase/decrease quantity for each item
- ✅ Remove items from cart
- ✅ Real-time total price calculation
- ✅ Delivery charge calculation (free above ₹5000)
- ✅ Coupon code application
- ✅ Order summary section with sticky positioning

### 💾 LocalStorage Integration
- ✅ Cart persists even after page refresh
- ✅ Coupon codes are saved
- ✅ Complete browsing history maintained

### 💳 Checkout System
- ✅ Delivery address form
- ✅ Payment method selection (Card, UPI, COD)
- ✅ Order validation
- ✅ Order success confirmation
- ✅ Order ID generation

### 🎨 UI/UX Features
- ✅ Beautiful gradient design
- ✅ Smooth animations and transitions
- ✅ Responsive mobile design
- ✅ Toast notifications
- ✅ Modal windows for checkout
- ✅ Professional styling

---

## 🚀 How to Use

### 1️⃣ Open the Application
Simply open `index.html` in your web browser:
```
D:\cartpro\index.html
```

Or use a local server:
```bash
python -m http.server 8000
# Then open: http://localhost:8000
```

### 2️⃣ Shopping Experience

**On Product Page (`index.html`):**
1. Browse products in the grid
2. Use search bar to find specific products
3. Filter by category using the dropdown
4. Sort products by price or name
5. Adjust quantity using +/- buttons
6. Click "Add to Cart" to add items
7. View cart count badge in the header
8. Click "Cart" button to go to cart page

**On Cart Page (`cart.html`):**
1. View all items in your cart
2. Modify quantities or remove items
3. View order summary on the right
4. Apply coupon codes for discounts
5. Click "Proceed to Checkout"
6. Fill in delivery address
7. Select payment method
8. Click "Place Order"

---

## 🎁 Available Coupon Codes

Test these coupon codes to get discounts:

| Code | Discount |
|------|----------|
| SAVE10 | 10% off |
| SAVE20 | 20% off |
| WELCOME | 15% off |
| TECH50 | 50% off |

---

## 📦 Product Catalog

### Electronics (4 items)
- 🎧 Wireless Headphones - ₹2,499
- ⌚ Smart Watch - ₹5,999
- 🔌 USB-C Cable - ₹399
- 💡 LED Desk Lamp - ₹899

### Fashion (3 items)
- 👕 Casual T-Shirt - ₹599
- 👖 Blue Jeans - ₹1,299
- 👟 Running Shoes - ₹3,999

### Home & Kitchen (3 items)
- ☕ Coffee Maker - ₹2,999
- 🍳 Cooking Pan Set - ₹1,899

### Books (3 items)
- 📖 JavaScript Guide - ₹499
- 📚 Web Design Book - ₹599
- ⚛️ React Mastery - ₹799

---

## 🛠️ Project Structure

```
cartpro/
├── index.html          # Product listing page
├── cart.html           # Shopping cart page
├── style.css          # All styling & responsive design
├── script.js          # All JavaScript logic
└── README.md          # This file
```

---

## 🔑 Key JavaScript Features

### Cart Class
```javascript
class Cart {
    loadCart()           // Load from localStorage
    saveCart()           // Save to localStorage
    addItem()            // Add product to cart
    removeItem()         // Remove product from cart
    updateQuantity()     // Update item quantity
    getTotal()           // Get total price
    getItemCount()       // Get total items count
    clearCart()          // Empty cart
}
```

### Functions
- `displayProducts()`     - Render products grid
- `filterProducts()`      - Apply search/category/sort filters
- `displayCart()`         - Show cart items in table
- `applyCoupon()`         - Validate and apply coupon codes
- `updateSummary()`       - Calculate totals with delivery charge
- `placeOrder()`          - Process checkout form

---

## 📱 Responsive Design

- ✅ Works on desktops, tablets, and mobile phones
- ✅ Optimized layouts for all screen sizes
- ✅ Mobile-friendly navigation
- ✅ Touch-friendly buttons and controls

---

## 🎯 Bonus Features Included

✅ **Search & Filter** - Find products instantly
✅ **Sort Options** - Organize by price or name
✅ **Toast Notifications** - Visual feedback for actions
✅ **Animations** - Smooth transitions and effects
✅ **Coupon System** - Apply discount codes
✅ **Delivery Charges** - Free shipping over ₹5000
✅ **Order Confirmation** - Get order ID
✅ **Data Persistence** - Cart survives page refresh

---

## 💡 How It Uses LocalStorage

1. **Cart Data**: Stored as JSON array
   ```javascript
   localStorage.setItem("cart", JSON.stringify(cart.items));
   ```

2. **Applied Coupon**: Stored for persistence
   ```javascript
   localStorage.setItem("appliedCoupon", couponCode);
   ```

3. **Auto-Load**: Loaded automatically on page load
   ```javascript
   const savedCart = localStorage.getItem("cart");
   ```

---

## 🎨 Customization Guide

### Change Product List
Edit `script.js` - Find the `products` array and modify:
```javascript
const products = [
    {
        id: 1,
        name: "Product Name",
        price: 5000,
        category: "category-name",
        description: "Product description",
        image: "emoji-icon",
        rating: 4.5
    }
];
```

### Add New Coupon Code
Edit `script.js` - Find the `coupons` object:
```javascript
const coupons = {
    "NEWCODE": 0.25,  // 25% discount
};
```

### Change Colors
Edit `style.css` - Modify CSS variables at the top:
```css
:root {
    --primary-color: #ff6b6b;
    --secondary-color: #4ecdc4;
    /* ... other colors ... */
}
```

---

## 🔍 Testing Scenarios

1. **Add Items Test**
   - Add multiple items to cart
   - Verify cart count updates
   - Check total price calculation

2. **Coupon Test**
   - Try valid coupon code: `SAVE10`
   - Try invalid code
   - Verify discount is applied to total

3. **Persistence Test**
   - Add items to cart
   - Refresh page
   - Verify cart items still exist

4. **Checkout Test**
   - Fill complete form
   - Apply coupon before checkout
   - Verify order success modal appears

5. **Mobile Test**
   - Open on mobile device
   - Verify responsive layout
   - Test touch interactions

---

## 📝 Browser Compatibility

✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🌟 Portfolio Tips

This project demonstrates:
- ✅ **ES6+ JavaScript** (Arrow functions, Classes, Template literals)
- ✅ **DOM Manipulation** (querySelector, innerHTML, addEventListener)
- ✅ **LocalStorage API** (Data persistence)
- ✅ **CSS Grid & Flexbox** (Responsive layouts)
- ✅ **Form Validation** (Email, phone, required fields)
- ✅ **Event Handling** (Click, input, keydown events)
- ✅ **CSS Animations** (Transitions and keyframes)
- ✅ **Professional UI/UX** (Clean design, smooth interactions)

---

## 🚀 Future Enhancements

You can extend this project by adding:
- 🔐 User authentication (login/signup)
- 🌙 Dark mode toggle
- 💳 Real payment gateway integration
- 📊 Admin panel for managing products
- 🔔 Email notifications
- ⭐ Product reviews and ratings
- 🔍 Advanced filtering with price range
- 📈 Order history tracking
- 🎯 Wishlist feature

---

## 📧 Support

If you have questions or need help:
1. Check the code comments
2. Review the CSS variables section
3. Test coupon codes: SAVE10, SAVE20, WELCOME, TECH50

---

## 📜 License

Feel free to use this project for personal, educational, or commercial purposes.

---

## ✨ Made with ❤️

Perfect for beginners learning JavaScript, students building portfolio projects, or anyone wanting to learn e-commerce development!

**Happy Coding! 🚀**
