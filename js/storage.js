document.getElementById('btn-add-name').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;
    nameField.value = '';

    localStorage.setItem('Name', nameValue);
})

document.getElementById('btn-add-age').addEventListener('click', function () {
    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;
    ageField.value = '';

    localStorage.setItem('Age', ageValue);
})

document.getElementById('btn-remove-name').addEventListener('click', function () {
    localStorage.removeItem('Name');
})

document.getElementById('btn-remove-age').addEventListener('click', function () {
    localStorage.removeItem('Age');
})

document.getElementById('btn-clear-LS').addEventListener('click', function () {
    localStorage.clear();
})