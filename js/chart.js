/*global Chart*/

//grafico mod. I
let canvas = document.getElementById('myChart');
let ctx = canvas.getContext('2d');

let infoChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: []
    },
    options: {
        tooltips: {
            mode: 'index',
            intersect: false,
            titleMarginBottom: 10
        },
 /*        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        } */
    }
});

canvas.onclick = evt => {
    let infoEvent = infoChart.getElementsAtEvent(evt);
    let pTable = document.getElementById('infoTables');
    pTable.innerHTML = `
    <tr>
        <td>${infoChart.data.labels[infoEvent[0]._index]}</td>
        <td>${infoChart.data.datasets[0].data[infoEvent[0]._index]}</td>
        <td>${infoChart.data.datasets[1].data[infoEvent[0]._index]}</td>
        <td>${infoChart.data.datasets[2].data[infoEvent[0]._index]}</td>
        <td>${infoChart.data.datasets[3].data[infoEvent[0]._index]}</td>
    </tr>`;
};

/* //gráfico de donuts
let myChartPie = new Chart(document.getElementById("myChartPie"), {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: []
    }
});

//gráfico de pizza
new Chart(document.getElementById("motivosReprovacao"), {
    type: 'pie',
    data: {
        labels: ["Africa", "Asia"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [2478, 5267]
        }]
    }
}); */

//grafico mod. I

let canvasMod2 = document.getElementById('chartMod2');
let ctx1 = canvasMod2.getContext('2d');

let infoChartMd2 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: [],
        datasets: []
    },
    options: {
        tooltips: {
            mode: 'index',
            intersect: false,
            titleMarginBottom: 10
        },
 /*        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        } */
    }
});