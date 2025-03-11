// -------------------------------  PROMISES -----------------------------------------------


console.log('🔄 3. Promises (Handling Async Code)')

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true; // Change to false to test rejection
            if (success) {
                resolve("Data Fetched!");
            } else {
                reject("Error fetching data!");
            }
        }, 2000);
    });
}

// Using the Promise
fetchData()
    .then((data) => {
        console.log(data); // Output: Data Fetched!
    })
    .catch((error) => {
        console.log("Error:", error);
    });


// promise.all example
const promise1 = Promise.resolve("Hello");
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("World");
    }, 1000);
});
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // Output: ["Hello", 42, "World"]
});