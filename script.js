onload = load()

function load() {
    let list = document.getElementById("list");
    let arrayList = JSON.parse(localStorage.getItem("jsonList"));

    list.innerHTML = "";

    for (let item in arrayList) {
        // let task = document.createElement("li");
        // list.innerHTML += `<li>${item}</li>`;
        
        let task = document.createElement("li")
        let checkbox = document.createElement("input");

        task.setAttribute("onclick","lineThrough(this)");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("value",arrayList[item]);
        checkbox.setAttribute("name","items");
        checkbox.setAttribute("onclick","lineThrough(this.parentElement)");
        let text = document.createTextNode(`${parseInt(item) + 1} - ${arrayList[item]}`);
        task.appendChild(checkbox);
        task.appendChild(text);
        list.appendChild(task)
    }
}

function createTask() {
    let newItem = document.getElementById("item").value;
    let existentList = JSON.parse(localStorage.getItem("jsonList"));
    
    let arrayList = [];

    if (existentList != null) {
        arrayList = existentList
    }

    if (newItem != "") {
        arrayList.push(newItem);
        localStorage.setItem("jsonList", JSON.stringify(arrayList));
        load();
        document.getElementById("item").value = "";
    }
}

function deleteTask() {
    let items = document.getElementsByName("items");

    let newList = [];

    for (let item in items) {
        if (items[item].checked == false) {
            newList.push(items[item].value);
        }
    }
    
    localStorage.setItem("jsonList", JSON.stringify(newList));
    load();
}

function checked(event) {
    if(event.checked == true) {
        event.parentElement.classList.add("lineThrough");
    } else if ((event.checked == false)) {
        event.parentElement.classList.remove("lineThrough");
    }
}

function lineThrough(event) {
    let checkbox = event.children[0]
    checkbox.checked != true ? checkbox.checked = true : checkbox.checked = false;

    checked(checkbox);
}

function clearList() {
    localStorage.clear();
    load();
}
