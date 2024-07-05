const ctx = document.getElementById('myChartx');

        const bairros = ['Glucostark', 'Rosa', 'Haenssgen', 'Celia', 'Centro', 'Zwirtes', 'Passo de Estrela', 'Cascata']
        const lotes = [233322.57, 224633.60, 41087.51, 137083.92, 284269.79, 63743.43, 466245.36, 119307.98];
        const lotesAtingidos = [192169.93, 79648.79, 7074.42, 59242.17, 205567.47, 63743.43, 368400.54, 20476.38];
        
        new Chart(ctx, {
            type: 'bar',
            data: {
            labels: bairros,
            datasets: [
                {
                label: 'Lotes',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: lotes,
                },
                {
                label: 'Lotes Atingidos pela Enchente',
                backgroundColor: '#373630',
                borderColor: '#373630',
                borderWidth: 1,
                data: lotesAtingidos,
                }
            ]
            },
            options: {
           
            indexAxis: 'x',
            responsive: true,
            scales: {
                y: {
                beginAtZero: true
                }
            },
            plugins: {
                legend: {
                display: false  // Aqui é onde você desativa a exibição da legenda
            }
            }
            }
        });