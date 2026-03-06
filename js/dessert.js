function calculateDessertBill(){

let vanilla = document.getElementById("vanilla").value;
let chocolate = document.getElementById("chocolate").value;
let strawberry = document.getElementById("strawberry").value;
let brownie = document.getElementById("brownie").value;
let gulabjamun = document.getElementById("gulabjamun").value;
let rasmalai = document.getElementById("rasmalai").value;
let paymentMethod = document.getElementById("paymentMethod").value;

let subtotal = (vanilla*50) + (chocolate*60) + (strawberry*55) + (brownie*80) + (gulabjamun*40) + (rasmalai*70);

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
    dessertItems: [],
    dessertTotal: 0,
    subtotal: subtotal,
    gst: gst.toFixed(2),
    total: total.toFixed(2),
    paymentMethod: paymentDisplay
};

// Dessert items
if(vanilla > 0) {
    orderData.dessertItems.push({emoji: '🍦', name: 'Vanilla Ice Cream', quantity: vanilla, total: vanilla*50});
    orderData.dessertTotal += vanilla*50;
}
if(chocolate > 0) {
    orderData.dessertItems.push({emoji: '🍫', name: 'Chocolate Ice Cream', quantity: chocolate, total: chocolate*60});
    orderData.dessertTotal += chocolate*60;
}
if(strawberry > 0) {
    orderData.dessertItems.push({emoji: '🍓', name: 'Strawberry Ice Cream', quantity: strawberry, total: strawberry*55});
    orderData.dessertTotal += strawberry*55;
}
if(brownie > 0) {
    orderData.dessertItems.push({emoji: '🍰', name: 'Brownie', quantity: brownie, total: brownie*80});
    orderData.dessertTotal += brownie*80;
}
if(gulabjamun > 0) {
    orderData.dessertItems.push({emoji: '🍡', name: 'Gulab Jamun', quantity: gulabjamun, total: gulabjamun*40});
    orderData.dessertTotal += gulabjamun*40;
}
if(rasmalai > 0) {
    orderData.dessertItems.push({emoji: '🥛', name: 'Rasmalai', quantity: rasmalai, total: rasmalai*70});
    orderData.dessertTotal += rasmalai*70;
}

// Save to localStorage and redirect to bill page
localStorage.setItem('orderData', JSON.stringify(orderData));
window.location.href = 'bill.html';

}

function resetDessertBill(){
document.getElementById("vanilla").value = 0;
document.getElementById("chocolate").value = 0;
document.getElementById("strawberry").value = 0;
document.getElementById("brownie").value = 0;
document.getElementById("gulabjamun").value = 0;
document.getElementById("rasmalai").value = 0;
document.getElementById("paymentMethod").value = "";
document.getElementById("result").innerHTML = '<p class="empty-bill">No items selected yet. Add items to generate bill.</p>';
}
