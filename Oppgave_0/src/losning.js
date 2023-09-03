document.addEventListener("DOMContentLoaded", function() {

    // Oppgave 1
    document.getElementById("remove-btn").addEventListener("click", function() {
        const element = document.getElementById("remove");
        element.remove();
    });

    // Oppgave 2
    document.getElementById("change-btn").addEventListener("click", function() {
        document.getElementById("change").textContent = "New text";
    });


    // Oppgave 3
    const inputElement = document.getElementById("input");
    inputElement.addEventListener("input", function() {
        document.getElementById("input-text").textContent = this.value;
    });

    // Oppgave 4
    const myList = ["item one", "item two", "item three"];
    document.getElementById("write-list").addEventListener("click", function() {
        const ulElement = document.getElementById("ul");
        myList.forEach(function(item) {
            const liElement = document.createElement("li");
            liElement.textContent = item;
            ulElement.appendChild(liElement);
        });
    });

    // Oppgave 5
    document.getElementById("create").addEventListener("click", function() {
        const elementType = document.getElementById("select").value;
        const elementText = document.getElementById("text").value;
        const newElement = document.createElement(elementType);
        newElement.textContent = elementText;
        document.getElementById("placeholder").appendChild(newElement);
    });

    // Oppgave 6
    document.getElementById("remove-li").addEventListener("click", function() {
        const ulElement = document.getElementById("list");
        if(ulElement.children.length > 0) {
            ulElement.removeChild(ulElement.children[0]);
        }
    });

    // Oppgave 7
    document.getElementById("name").addEventListener("input", function() {
        const button = document.getElementById("order");
        if(this.value.length > 4) {
            button.disabled = true;
            button.style.border = "2px solid red";
        } else {
            button.disabled = false;
            button.style.border = "";
        } 
    });

    // Oppgave 8
    document.getElementById("color").addEventListener("click", function() {
        const children = document.querySelectorAll('.children li');
        children.forEach(function(child, index) {
            if((index + 1) % 2 === 0) {
                child.style.border = "2px solid pink";
            } else {
                child.style.border = "2px solid green";   
            }
        });
    });
});