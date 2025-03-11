async function getTodo() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await response.json();
        console.log("Fetched Data:", data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

getTodo();