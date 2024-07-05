const ctxY = document.getElementById('myCharty');

        const bairrosY = ['Glucostark', 'Centro', 'Cascata', 'Zwirtes', 'Celia', 'Passo de Estrela', 'Haenssgen', 'Rosa']
        const lotesY = [289, 546, 167,  159, 272, 524, 11, 324];
        const lotesAtingidosY = [202, 379, 33, 159, 113, 318, 4, 86];
        
        new Chart(ctxY, {
            type: 'bar',
            data: {
            labels: bairrosY,
            datasets: [
                {
                label: 'Lotes',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                data: lotesY,
                },
                {
                label: 'Lotes Atingidos pela Enchente',
                backgroundColor: '#373630',
                borderColor: '#373630',
                borderWidth: 1,
                data: lotesAtingidosY,
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