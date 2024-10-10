const toUpperCase = require("../UpperCaseFunction");

document.querySelector("#convertButton").addEventListener("click", function () {
    const inputText = document.querySelector("#inputText").value;
    const upperText = toUpperCase(inputText);
    document.querySelector("#displayMsg").innerHTML = upperText;
});