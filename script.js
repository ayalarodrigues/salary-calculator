let newSalary;
let activeButton = null; // Variável para armazenar o botão clicado

function logout() {
    alert('You have been logged out.');
    window.close();
}

function calculateNewSalary() {
    let salaryInput = document.getElementById('salary');
    let salaryMessage = document.getElementById('salaryMessage');

    if (isNaN(salaryInput.value) || salaryInput.value === '') {
        salaryMessage.textContent = 'Please enter a valid number.';
        salaryMessage.style.color = 'red';
        return;
    }

    let salary = parseFloat(salaryInput.value);

    if (salary <= 1200) {
        newSalary = salary * 1.15;
    } else if (salary <= 2400) {
        newSalary = salary * 1.10;
    } else {
        newSalary = salary * 1.05;
    }

    document.getElementsByClassName('result')[0].textContent = 'Your new salary is: $' + newSalary.toFixed(2);
    salaryMessage.textContent = 'Only numbers are allowed.';
    salaryMessage.style.color = '#777';
}

function vacation() {
    calculateNewSalary();
    let vacation = newSalary + (newSalary / 3);

    document.getElementsByClassName('result')[0].textContent = 'Your vacation is worth: $' + vacation.toFixed(2);
}

function thirteenth() {
    calculateNewSalary();
    let monthsInput = document.getElementById('months');
    let months = parseInt(monthsInput.value);

    if (isNaN(months) || months <= 0) {
        document.getElementsByClassName('result')[0].textContent = 'Please enter a valid number of months.';
    } else if (months > 12) {
        document.getElementsByClassName('result')[0].textContent = 'Please enter a maximum of 12 months.';
    } else {
        let thirteenth = newSalary * (months / 12);
        document.getElementsByClassName('result')[0].textContent = 'Your thirteenth is worth: $' + thirteenth.toFixed(2);
    }
}


// Adiciona a classe 'clicked' ao botão clicado
function buttonClick(button) {
    if (activeButton) {
        activeButton.classList.remove('clicked');
    }

    button.classList.add('clicked');
    activeButton = button;
}
