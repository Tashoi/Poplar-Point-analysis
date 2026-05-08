const ctx = document.getElementById('rlvChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Project Connect', 'Tysons', 'Poplar Point'],
        datasets: [{
            label: 'Residual Land Value ($M)',
            data: [44.4, 39.7, 5.5],
            backgroundColor: [
                'green',
                'orange',
                'red'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
