function awaitFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data Successfully Loaded!");
            } else {
                reject("Failed to Load Data!");
            }
        }, 2000);
    });
}

async function loadData() {
    try {
        console.log("Loading...");
        let data = await awaitFunc();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

loadData();
