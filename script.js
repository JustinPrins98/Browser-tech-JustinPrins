

// uitleg script: 
document.getElementById('datePickerId').max = new Date().toLocaleDateString('fr-ca')
document.getElementById('datePickerId').min = new Date(new Date().setMonth(new Date().getMonth() - 8)).toLocaleDateString('fr-ca');

// Localstorage
// const input = document.querySelector("input")

// input.innerHTML = localStorage.getItem("value");

// input.addEventListener("keyup", save);

// function save() {
//     localStorage.setItem('keyName', input.value);
//     input.innerHTML = localStorage.getItem("value");
//     // console.log(localStorage.getItem('keyName'));
//

// Updated with help from ChatGPT with prompt:nWhen I do refresh my page how do I keep my localstorage value displayed in my input

const input = document.querySelector("input");

// Retrieve value from localStorage when the page loads
window.addEventListener("load", function () {
    const savedValue = localStorage.getItem("keyName");
    if (savedValue) {
        input.value = savedValue;
    }
});

input.addEventListener("keyup", save);

function save() {
    localStorage.setItem('keyName', input.value);
}









// ShowHideFieldset

document.addEventListener('DOMContentLoaded', function () {
    hideFieldset();
});

// function showFieldset() {
//     var fieldset = document.getElementById('additionalInfoFieldset');
//     fieldset.style.display = 'block';
// }

// function hideFieldset() {
//     var fieldset = document.getElementById('additionalInfoFieldset');
//     fieldset.style.display = 'none';
// }

// function showHide()

//bron Lars van veldhuizen

// function showFieldset(fieldsetId) {
//     const fieldset = document.getElementById(fieldsetId);
//     fieldset.classList.remove('hidden');
//     console.log(fieldset)
//     const inputs = fieldset.querySelectorAll('input');
//     inputs.forEach(function (input) {
//         input.required = true;

//     });
// }

// function hideFieldset(fieldsetId) {
//     const fieldset = document.getElementById(fieldsetId);
//     fieldset.classList.add('hidden');
//     const inputs = fieldset.querySelectorAll('input');
//     inputs.forEach(function (input) {
//         input.required = false;
//     });
// }

document.querySelectorAll('input[type=radio][data-hidefieldset], input[type=radio][data-showfieldset]').forEach(function (showHide) {
    const targetFieldsetId = showHide.dataset.showfieldset || showHide.dataset.hidefieldset;
    const targetFieldset = document.getElementById(targetFieldsetId);

    showHide.addEventListener('change', function () {
        if (targetFieldset) {
            if (this.dataset.showfieldset) {
                targetFieldset.classList.remove('hidden');
                const inputs = targetFieldset.querySelectorAll('input');
                inputs.forEach(function (input) {
                    input.required = true;
                });
            } else if (this.dataset.hidefieldset) {
                targetFieldset.classList.add('hidden');
                const inputs = targetFieldset.querySelectorAll('input');
                inputs.forEach(function (input) {
                    input.required = false;
                });
            }
        }
    });
});