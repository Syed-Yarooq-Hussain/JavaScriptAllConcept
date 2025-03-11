// -------------------------------CALL   BACK  -----------------------------------------------

console.log('🔄 2. Callbacks (Handling Async Code)')
function fetchUserData(callback) {
    setTimeout(() => {
        console.log("User Data Fetched!");
        callback();
    }, 2000);
}

function fetchOrders(callback) {
    setTimeout(() => {
        console.log("Orders Fetched!");
        callback();
    }, 1000);
}

function fetchOrderDetails() {
    setTimeout(() => {
        console.log("Order Details Fetched!");
    }, 500);
}

// Callback Hell (Nested Callbacks)
fetchUserData(() => {
    fetchOrders(() => {
        fetchOrderDetails();
    });
});

