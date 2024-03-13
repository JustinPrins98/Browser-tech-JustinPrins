console.log("Kaaspizza HE!")

// uitleg script: 
document.getElementById('datePickerId').max = new Date().toLocaleDateString('fr-ca')
document.getElementById('datePickerId').min = new Date(new Date().setMonth(new Date().getMonth() - 8)).toLocaleDateString('fr-ca');





// Uitklappen

document.addEventListener('DOMContentLoaded', function () {
    hideFieldset();
});

function showFieldset() {
    var fieldset = document.getElementById('additionalInfoFieldset');
    fieldset.style.display = 'block';
}

function hideFieldset() {
    var fieldset = document.getElementById('additionalInfoFieldset');
    fieldset.style.display = 'none';
}


