let input = document.querySelector(".todo-input");
let btn = document.querySelector(".btn-primary");
let ul = document.querySelector("#todo-list");

btn.addEventListener("click", function() {
    if (input.value.trim() === "") return;

    let task = document.createElement("li");
    task.className = "todo-item d-flex justify-content-between align-items-center p-3 mb-3 bg-white shadow-lg rounded";
    task.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.className = "btn btn-outline-danger btn-sm";

    task.appendChild(delBtn);
    ul.appendChild(task);

    input.value = "";
});

ul.addEventListener("click", function(event) {
    if (event.target.nodeName === "BUTTON") {
        event.target.parentElement.remove();
    }
});
