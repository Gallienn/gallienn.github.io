import { toggleHiddenElement } from "./modules/dom-functions.js";

document.addEventListener('DOMContentLoaded', () => {
    const secretButton = document.getElementById('secret-button');
    const secretP = document.getElementById('secret-p');
    secretButton.addEventListener('click', () => toggleHiddenElement(secretP));
});
