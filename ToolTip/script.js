const button = document.querySelector("#btn");
const tooltip = document.querySelector("#tooltip");

button.addEventListener("keydown", function (events) {

    if (events.key === "Enter") {

        if (tooltip.style.display === "block") {
            tooltip.style.display = "none";
        } else {
            tooltip.style.display = "block";
        }

    }

});