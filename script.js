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
        return null;
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

    return newSalary; // Agora a função retorna o novo salário
}

function vacation() {
    let currentSalary = parseFloat(document.getElementById('salary').value);
    let newSalary = calculateNewSalary();

    if (newSalary !== null) {
        let vacationCurrent = currentSalary + (currentSalary / 3);
        let vacationNew = newSalary + (newSalary / 3);

        document.getElementsByClassName('result')[0].textContent =
            `Your Results:\n\nNew Salary: $${newSalary.toFixed(2)}\n\n` +
            `- Vacation with Current Salary: $${vacationCurrent.toFixed(2)}\n` +
            `- Vacation with Increased Salary: $${vacationNew.toFixed(2)}`;
    }
}

function thirteenth() {
    let currentSalary = parseFloat(document.getElementById('salary').value);
    let newSalary = calculateNewSalary();
    let monthsInput = document.getElementById('months');
    let months = parseInt(monthsInput.value);

    if (newSalary !== null && !isNaN(months) && months > 0 && months <= 12) {
        let thirteenthCurrent = currentSalary * (months / 12);
        let thirteenthNew = newSalary * (months / 12);

        document.getElementsByClassName('result')[0].textContent =
            `Your Results:\n\nNew Salary: $${newSalary.toFixed(2)}\n\n` +
            `- Thirteenth with Current Salary: $${thirteenthCurrent.toFixed(2)}\n` +
            `- Thirteenth with Increased Salary: $${thirteenthNew.toFixed(2)}`;
    } else {
        document.getElementsByClassName('result')[0].textContent = 'Please enter valid values.';
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

// Função para resetar os campos
function resetFields() {
    document.getElementById('salary').value = '';
    document.getElementById('months').value = '';
    document.getElementsByClassName('result')[0].textContent = '';

    // Remove a classe 'clicked' do botão ativo
    if (activeButton) {
        activeButton.classList.remove('clicked');
        activeButton = null;
    }
}
