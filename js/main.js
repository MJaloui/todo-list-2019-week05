let ul = document.querySelector("#ulList");
let input = document.querySelector("#typeList");

document.querySelector("#addTask").addEventListener("click", addTask);


// I looked at sarah's to get an idea where to start, and this youTube video below which was similar, I wasn't sure where to begin. I did research what she did.
//https://www.youtube.com/watch?v=G0jO8kUrg-I&t=1369s
//Also this website which was similar https://foolishdeveloper.com/to-do-list-in-javascript/
function addTask() {
    if (input.value !== "") {  //checks if it's not empty
        let li = document.createElement("li"); 
        li.innerText = input.value; //sends text to input
        ul.appendChild(li);  //appends new item
        input.value = ""; //clears input
    }
    saveData();
}


ul.addEventListener("click", completed); // listening for click of completed items, knew this from previous assignments.
function completed(e) {
    if (e.target.tagName === "LI") { //this website to uderstand this sections as well https://foolishdeveloper.com/to-do-list-in-javascript/
        e.target.classList.toggle("completed");
    }
    saveData();
}

document.querySelector("#clearCompleted").addEventListener("click", clearCompleted); //knew onclick from previous lectures

//https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
//https://codesignal.com/learn/courses/making-a-dynamic-todo-list-with-javascript/lessons/deleting-todo-items
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
    
    li.forEach(item => {  //I did not really understand the numbering and "+" for loops so i look up another way https://www.w3schools.com/jsref/jsref_foreach.asp 
    item.remove(); //my clear button wasn't working and google or chatgpt suggested item.remove when i showed error, I researched it  here too https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
    });

    let tempMessage = document.createElement("li");
    tempMessage.innerHTML = "<li>All tasks are done! Awesome!</li>";
    ul.appendChild(tempMessage);

    setTimeout(() => {   //An article somewhere spoke about a message that appears in the end of todo list. I added it in here but the message didnt disaaper. I looked on mdn to see how to set a timer.
         tempMessage.remove(); //https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
        saveData(); 
    },  3000);


}

function saveData() {
    localStorage.setItem("data", ul.innerHTML); // over here i think i had issues with keeping information.
}

function showData() { // saves data to browser's local storage, //https://foolishdeveloper.com/to-do-list-in-javascript/ and questions on google.
    ul.innerHTML = localStorage.getItem("data"); //had issues with info coming back, asked google for proper syntax and looked on link above.
}

showData(); //shows saved data when page refreshes/