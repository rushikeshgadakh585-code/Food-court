function calculateBill(){

let burger = document.getElementById("burger").value;
let pizza = document.getElementById("pizza").value;
let fries = document.getElementById("fries").value;
let coffee = document.getElementById("coffee").value;
let pasta = document.getElementById("pasta").value;
let lassi = document.getElementById("lassi").value;
let soda = document.getElementById("soda").value;
let chai = document.getElementById("chai").value;
let paymentMethod = document.getElementById("paymentMethod").value;

let subtotal = (burger*80) + (pizza*150) + (fries*70) + (coffee*90) + (pasta*120) + (lassi*60) + (soda*40) + (chai*30);

// Check if any item is selected
if(subtotal === 0) {
    alert('Please select at least one item!');
    return;
}

// Check if payment method is selected
if(!paymentMethod) {
    alert('Please select a payment method!');
    return;
}

// Add 5% GST
let gst = subtotal * 0.05;
let total = subtotal + gst;

// Get payment method display name
let paymentDisplay = '';
switch(paymentMethod) {
    case 'cash': paymentDisplay = '💵 Cash'; break;
    case 'card': paymentDisplay = '💳 Card'; break;
    case 'phonepe': paymentDisplay = '📱 PhonePe'; break;
    case 'googlepay': paymentDisplay = '🔵 Google Pay'; break;
    case 'paytm': paymentDisplay = '💰 Paytm'; break;
}

// Prepare order data
let orderData = {
    foodItems: [],
    beverageItems: [],
    foodTotal: 0,
    beverageTotal: 0,
    subtotal: subtotal,
    gst: gst.toFixed(2),
    total: total.toFixed(2),
    paymentMethod: paymentDisplay
};

// Food items
if(burger > 0) {
    orderData.foodItems.push({emoji: '🍔', name: 'Burger', quantity: burger, total: burger*80});
    orderData.foodTotal += burger*80;
}
if(pizza > 0) {
    orderData.foodItems.push({emoji: '🍕', name: 'Pizza', quantity: pizza, total: pizza*150});
    orderData.foodTotal += pizza*150;
}
if(fries > 0) {
    orderData.foodItems.push({emoji: '🍟', name: 'Fries', quantity: fries, total: fries*70});
    orderData.foodTotal += fries*70;
}
if(coffee > 0) {
    orderData.foodItems.push({emoji: '☕', name: 'Cold Coffee', quantity: coffee, total: coffee*90});
    orderData.foodTotal += coffee*90;
}
if(pasta > 0) {
    orderData.foodItems.push({emoji: '🍝', name: 'Pasta', quantity: pasta, total: pasta*120});
    orderData.foodTotal += pasta*120;
}

// Beverage items
if(lassi > 0) {
    orderData.beverageItems.push({emoji: '🥤', name: 'Mango Lassi', quantity: lassi, total: lassi*60});
    orderData.beverageTotal += lassi*60;
}
if(soda > 0) {
    orderData.beverageItems.push({emoji: '🥤', name: 'Lemon Soda', quantity: soda, total: soda*40});
    orderData.beverageTotal += soda*40;
}
if(chai > 0) {
    orderData.beverageItems.push({emoji: '🍵', name: 'Masala Chai', quantity: chai, total: chai*30});
    orderData.beverageTotal += chai*30;
}

// Save to localStorage and redirect to bill page
localStorage.setItem('orderData', JSON.stringify(orderData));
window.location.href = 'bill.html';

}

function resetBill(){
document.getElementById("burger").value = 0;
document.getElementById("pizza").value = 0;
document.getElementById("fries").value = 0;
document.getElementById("coffee").value = 0;
document.getElementById("pasta").value = 0;
document.getElementById("lassi").value = 0;
document.getElementById("soda").value = 0;
document.getElementById("chai").value = 0;
document.getElementById("paymentMethod").value = "";
document.getElementById("result").innerHTML = '<p class="empty-bill">No items selected yet. Add items to generate bill.</p>';
}
