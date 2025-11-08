{
    const toggleTable = (tableWrapper) => {
        tableWrapper.classList.toggle("table__wrapper--hidden");
    };

    const updateButtonText = (button, tableWrapper) => {
        button.innerText = tableWrapper.classList.contains("table__wrapper--hidden") 
            ? "Pokaż listę książek" 
            : "Ukryj listę książek";
    };

    const onButtonClick = (button, tableWrapper) => {
        toggleTable(tableWrapper);
        updateButtonText(button, tableWrapper);
    };

    const init = () => {
        const button = document.querySelector(".table__button");
        const tableWrapper = document.querySelector(".table__wrapper--hidden");

        button.addEventListener("click", () => {
            onButtonClick(button, tableWrapper);
        });
    };

    init();
}