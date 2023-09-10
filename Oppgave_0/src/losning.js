document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("remove-btn").addEventListener("click", function() {
        document.getElementById("remove").remove();
    });

    document.getElementById("change-btn").addEventListener("click", function() {
        document.getElementById("change").textContent = "New text";
    });

    const inputElement = document.getElementById("input");
    inputElement.addEventListener("input", function(e) {
        document.getElementById("input-text").textContent = e.target.value;
    });

    const myList = ["item one", "item two", "item three"];
    document.getElementById("write-list").addEventListener("click", function() {
        const ulElement = document.getElementById("ul");
        myList.forEach(function(item) {
            const liElement = document.createElement("li");
            liElement.textContent = item;
            ulElement.appendChild(liElement);
        });
    });

    document.getElementById("create").addEventListener("click", function() {
        const elementType = document.getElementById("select").value;
        const elementText = document.getElementById("text").value;
        const newElement = document.createElement(elementType);
        newElement.textContent = elementText;
        document.getElementById("placeholder").appendChild(newElement);
    });

    document.getElementById("remove-li").addEventListener("click", function() {
        const ulElement = document.getElementById("list");
        if(ulElement.children.length > 0) {
            ulElement.removeChild(ulElement.firstChild);
        }
    });

    document.getElementById("name").addEventListener("input", function(e) {
        const button = document.getElementById("order");
        if(e.target.value.length > 4) {
            button.disabled = true;
            button.style.border = "2px solid red";
        } else {
            button.disabled = false;
            button.style.border = "";
        }
    });

    document.getElementById("color").addEventListener("click", function() {
        const children = document.querySelectorAll('.children li');
        children.forEach(function(child, index) {
            child.style.border = (index % 2 === 0) ? "2px solid pink" : "2px solid green";
        });
    });

});
