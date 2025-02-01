// Task 1: Product Price Management
let prices = [100, 200, 300, 400, 500];
prices.push(600); // New price added
prices.shift(); // first price reduced
console.log("Updated Prices:", prices);

// Task 2: Modifying Customer Orders
let orders = [2, 5, 8, 3, 6];
orders[2] += 5; // Increase third order by 5
let totalOrders = orders.reduce((sum, qty) => sum + qty, 0); // Calculate total
console.log("Updated Orders:", orders);
console.log("Total Orders:", totalOrders);

// Task 3: Employee Performance Tracking
let employee = {
    name: "Salman Ahsan",
    role: "Industrial Engineer",
    performanceScore: 95,
    isActive: true
};
employee.performanceScore = 90; // Update performance score
employee.promotionEligible = employee.performanceScore >= 90; // Add new property
console.log("Updated Employee:", employee);

// Task 4: Customer Feedback Records
let feedback = [
    { customerName: "Zara", feedbackText: "Good service!", rating: 5 },
    { customerName: "Somya", feedbackText: "Great experience.", rating: 4 },
    { customerName: "Zainab", feedbackText: "could do better.", rating: 3 }
];
feedback.push({ customerName: "Ashley", feedbackText: "Love it!", rating: 5 });
console.log("Feedback List:", feedback);

// Task 5: Inventory Management System
let inventory = {
    itemName: "Computer",
    stockCount: 10,
    price: 1100,
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
};
console.log("Inventory Details:", inventory);
console.log("Total Inventory Value:", inventory.calculateTotalValue());
