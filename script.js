document.getElementById('calculateButton').addEventListener('click', function() {
    // Obter os valores dos campos
    const initialCows = parseInt(document.getElementById('initialCows').value);
    const annualGrowth = parseInt(document.getElementById('annualGrowth').value);
    const years = parseInt(document.getElementById('years').value);

    // Validar os valores
    if (isNaN(initialCows) || isNaN(annualGrowth) || isNaN(years) || initialCows < 0 || annualGrowth < 0 || years < 1) {
        document.getElementById('result').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    // Calcular o número de vacas para cada ano
    let resultHtml = '<h3>Número de vacas ao longo dos anos:</h3><ul>';
    for (let year = 1; year <= years; year++) {
        const totalCows = initialCows + (annualGrowth * year);
        resultHtml += `<li>Ano ${year}: ${totalCows} vacas</li>`;
    }
    resultHtml += '</ul>';

    // Exibir o resultado
    document.getElementById('result').innerHTML = resultHtml;
});
