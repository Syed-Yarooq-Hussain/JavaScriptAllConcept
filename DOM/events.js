let button = document.getElementById("changeText");

button.addEventListener("click", function () {
    document.getElementById("heading").innerText = "Button Clicked !";
    addRow();
});

let dltButton = document.getElementById("changeText");

dltButton.addEventListener("click", function () {
    deleteRow('p1');
});

function addRow() {
    if(document.getElementById('p1') || document.getElementById('btn1')){
        alert("You are allowed to add only para ");
        return
    }
    let newPara = document.createElement("p");
    newPara.id = 'p1'
    newPara.innerText = "This is a new paragraph added by JavaScript!";
    document.body.appendChild(newPara);;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete Row "
    deleteButton.id = 'btn1'
    document.body.appendChild(deleteButton);
}

function deleteRow(id) {
    let oldDiv = document.getElementById(id);
    oldDiv.remove()
}