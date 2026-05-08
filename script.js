const ctx = document.getElementById('rlvChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            'Base',
            'Rent -5%',
            'Hard Cost +10%',
            'Cap Rate +100bps'
        ],
        datasets: [
            {
                label: 'Project Connect',
                data: [47.6, 44.4, 40.1, 30.4],
                borderColor: 'green',
                fill: false
            },
            {
                label: 'Tysons Central',
                data: [24.3, 6.5, 6.7, -2.5],
                borderColor: 'orange',
                fill: false
            },
            {
                label: 'Poplar Point',
                data: [5.5, -12.9, -12.4, -21.6],
                borderColor: 'red',
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true
            }
        }
    }
});
