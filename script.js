const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");
const symbols = "~`!@#$%^&*()-_+=[]{}|:;<>,.?/".split("");

const passwordEl = document.querySelector("#passwords");
const passwordEl1 = document.querySelector("#passwords1");
const generateButton = document.querySelector("#generate-button");
const resetEl = document.querySelector("#reset-el");
const includeNumbersCheckbox = document.querySelector("#include-numbers");
const includeSymbolsCheckbox = document.querySelector("#include-symbols");

includeNumbersCheckbox.checked = false;
includeSymbolsCheckbox.checked = false;

generateButton.addEventListener("click", function() {
    passwordEl.textContent = "";
    passwordEl1.textContent = "";

    let characters = letters;
    if (includeNumbersCheckbox.checked) {
        characters = characters.concat(numbers);
    }
    if (includeSymbolsCheckbox.checked) {
        characters = characters.concat(symbols);
    }

    for (let i = 0; i < 16; i++) {
        let randomPassword = Math.floor(Math.random()*characters.length)
        let randomPassword1 = Math.floor(Math.random()*characters.length)
        passwordEl.textContent += characters[randomPassword]
        passwordEl1.textContent += characters[randomPassword1]
    }
})

passwordEl.addEventListener("click", function() {
    if (!passwordEl.textContent === "") {
        copyToClipboard(passwordEl.textContent);
    }
});

passwordEl1.addEventListener("click", function() {
    if (!passwordEl1.textContent === "") {
        copyToClipboard(passwordEl1.textContent);
    }
});

function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("Password copied to clipboard!");
}

resetEl.addEventListener("click", function() {
    passwordEl.innerHTML = '<input type="text" id="input" placeholder="Password 1" readonly>';
    passwordEl1.innerHTML = '<input type="text" id="input1" placeholder="Password 2" readonly>';
    includeNumbersCheckbox.checked = false;
    includeSymbolsCheckbox.checked = false;
});