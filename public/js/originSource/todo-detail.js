import Chart from 'chart.js';
const ctx1 = document.getElementById('completeChart').getContext('2d');
const notDone = +document.querySelector('input[name="notdone"]').value;
const done =+ document.querySelector('input[name="done"]').value;
const notDone_percent = (notDone / (notDone+done))*100;
const Done_percent=(done/(notDone+done))*100;
var chart1 = new Chart(ctx1, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['completed', 'not completed'],
        datasets: [{
            label: 'YOUR ACCOMPLISHMENT SHORTCUT',
            backgroundColor: ['#04B4AE', "#eaeae1"],
            data: [Done_percent, notDone_percent],
        }]
    },

    // Configuration options go here
    options: {
        cutoutPercentage: 80
    }
});