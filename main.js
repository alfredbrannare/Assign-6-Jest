//For some reason it didn't work with "" so I had to switch to ''
import { toUpperCase } from './UpperCaseFunction.js';

document.querySelector("#convertButton").addEventListener("click", function () {
    const inputText = document.querySelector("#inputText").value;
    const upperText = toUpperCase(inputText);
    document.querySelector("#displayMsg").innerHTML = upperText;
});