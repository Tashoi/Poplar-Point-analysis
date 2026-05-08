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
                borderColor: '#16a34a',
                backgroundColor: '#16a34a',
                tension: 0.3,
                fill: false,
                pointRadius: 4
            },
            {
                label: 'Tysons Central',
                data: [24.3, 6.5, 6.7, -2.5],
                borderColor: '#f59e0b',
                backgroundColor: '#f59e0b',
                tension: 0.3,
                fill: false,
                pointRadius: 4
            },
            {
                label: 'Poplar Point',
                data: [5.5, -12.9, -12.4, -21.6],
                borderColor: '#dc2626',
                backgroundColor: '#dc2626',
                tension: 0.3,
                fill: false,
                pointRadius: 4
            }
        ]
    },

    options: {
        responsive: true,

        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },

            tooltip: {
                callbacks: {
                    label: function(context) {
                        return context.dataset.label + ': $' + context.parsed.y.toFixed(1) + 'M';
                    }
                }
            }
        },

        scales: {
            y: {
                title: {
                    display: true,
                    text: 'Residual Land Value ($M)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Sensitivity Scenarios'
                }
            }
        }
    }
});
