const init = () => {
    const inputForm = document.querySelector("form");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let input = document.querySelector("#searchByID");
        const title = document.querySelector("section#movieDetails h4");
        const summary = document.querySelector("section#movieDetails p");

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(res => res.json())
        .then(data => {
            title.innerHTML = data.title;
            summary.innerHTML = data.summary;
        } )
    })
}

document.addEventListener('DOMContentLoaded', init);



