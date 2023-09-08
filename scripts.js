const passwords = document.querySelectorAll("input[type='password']");
const submit = document.querySelector("button");

submit.addEventListener("click", (event) => {
    if (passwords[0].value != passwords[1].value && passwords[0].value) {
        event.preventDefault();
        passwords[1].classList.add("error");
        passwords[1].setCustomValidity("Please make passwords match");
        passwords[1].reportValidity();
        console.log("LOSER");
    } else {
        passwords[1].setCustomValidity("");
        console.log("WINNER");
    }
})
