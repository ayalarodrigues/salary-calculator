let newSalary; // Definindo a variável fora das funções para ter um escopo global

function logout() {
    alert('You have been logged out.');
}

function calculateNewSalary() {
    let salary = parseFloat(document.getElementById('salary').value);

    if (salary <= 1200) {
        newSalary = salary * 1.15;
    } else if (salary <= 2400) {
        newSalary = salary * 1.10;
    } else {
        newSalary = salary * 1.05;
    }

    document.getElementsByClassName('result')[0].textContent = 'Your new salary is: $' + newSalary.toFixed(2);
}

function vacation() {
    calculateNewSalary(); // Calcular o novo salário
    let vacation = newSalary + (newSalary / 3);

    document.getElementsByClassName('result')[0].textContent = 'Your vacation is worth: $' + vacation.toFixed(2);
}

function thirteenth() {
    calculateNewSalary(); // Calcular o novo salário
    let months = parseInt(document.getElementById('months').value);

    if (months > 12) {
        // Mostrar mensagem de erro e não realizar o cálculo
        document.getElementsByClassName('result')[0].textContent = 'Please enter a maximum of 12 months.';
    } else if (months <= 0) {
        // Mostrar mensagem de erro para meses inválidos
        document.getElementsByClassName('result')[0].textContent = 'Please enter a valid number of months.';
    } else {
        // Calcular o décimo terceiro salário
        let thirteenth = newSalary * (months / 12);
        document.getElementsByClassName('result')[0].textContent = 'Your thirteenth is worth: $' + thirteenth.toFixed(2);
    }
}
