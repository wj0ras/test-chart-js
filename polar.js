const ctxp = document.getElementById('myChartPolar');

const bairrosP = ['Centro', 'Zwirtes', 'Passo de Estrela', 'Celia', 'Glucostark', 'Bom Fim', 'Cascata', 'Rosa', 'Boa Esperança', 'Sao Gabriel'];
const lotesP = [221, 30, 23, 23, 21, 13, 10, 9, 3, 2];

new Chart(ctxp, {
    type: 'doughnut',
    data: {
        labels: bairrosP,
        datasets: [{
            label: 'Atingidos',
            backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)', 'rgba(255, 159, 64, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(75, 192, 192, 0.5)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1,
            data: lotesP,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false  // Oculta a legenda
            }
        }
    }
});
