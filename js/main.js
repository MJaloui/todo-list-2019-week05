let ul = document.querySelector("#ulList");
let input = document.querySelector("#typeList");

document.querySelector("#addTask").addEventListener("click", addTask);

function addTask() {
    if (input.value !== "") {
        let li = document.createElement("li");
        li.innerText = input.value;
        ul.appendChild(li);
        input.value = "";
    }
    saveData();
}

ul.addEventListener("click", completed);
function completed(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    }
    saveData();
}

document.querySelector("#clearCompleted").addEventListener("click", clearCompleted);

function clearCompleted() {
    let completed = document.querySelectorAll(".completed");
    completed.forEach(item => {
    item.remove();
    });
    saveData();
}

document.querySelector("#clearAll").addEventListener("click", clearAll);

function clearAll() {
    let li = document.querySelectorAll("li");
    
    li.forEach(item => {
    item.remove();
    });

    let tempMessage = document.createElement("li");
    tempMessage.innerHTML = "<li>All tasks are done! Awesome!</li>";
    ul.appendChild(tempMessage);

    setTimeout(() => {
         tempMessage.remove();
        saveData(); 
    },  3000);


}

function saveData() {
    localStorage.setItem("data", ul.innerHTML);
}

function showData() {
    ul.innerHTML = localStorage.getItem("data");
}

showData();