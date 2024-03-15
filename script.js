console.log("Kaaspizza HE!")

// uitleg script: 
document.getElementById('datePickerId').max = new Date().toLocaleDateString('fr-ca')
document.getElementById('datePickerId').min = new Date(new Date().setMonth(new Date().getMonth() - 8)).toLocaleDateString('fr-ca');

// Localstorage
localStorage




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