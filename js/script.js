    console.log("Witaj!");

    const button = document.querySelector(".table__button");
    const tableWrapper = document.querySelector(".table__wrapper--hidden");

    button.addEventListener("click", () => {
        tableWrapper.classList.toggle("table__wrapper--hidden");
        
        button.innerText = tableWrapper.classList.contains("table__wrapper--hidden") 
            ? "Pokaż listę książek" 
            : "Ukryj listę książek";
    });