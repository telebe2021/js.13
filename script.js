document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("btn");
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    const colorInput = document.getElementById("color");
    const tableBody = document.getElementById("table");

    addButton.addEventListener("click", function () {
        if (titleInput.value === "") {
            alert("Please enter a title!");
            return;
        }

        const newRow = document.createElement("tr");

        const titleCell = document.createElement("td");
        titleCell.textContent = titleInput.value;

        const authorCell = document.createElement("td");
        authorCell.textContent = authorInput.value;

        const typeCell = document.createElement("td");
        typeCell.textContent = getType();

        newRow.style.backgroundColor = colorInput.value;

        newRow.appendChild(titleCell);
        newRow.appendChild(authorCell);
        newRow.appendChild(typeCell);

        tableBody.appendChild(newRow);

        titleInput.value = "";
        authorInput.value = "";
        colorInput.value = "";
    });

    function getType() {
        const radioButtons = document.querySelectorAll(".radio");
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                return radioButton.nextElementSibling.textContent;
            }
        }
        return "";
    }
});
