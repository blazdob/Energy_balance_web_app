


Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontFamily = "Lato";


// PROIZVODNJA/PORABA
var pieChartCanvas_proizvodnja_poraba = document.getElementById("pieChart_proizvodnja_poraba");
var pieChart_proizvodnja_poraba = new Chart(pieChartCanvas_proizvodnja_poraba, {
  type: 'pie',
  data: {
    datasets: [{
      data: [2778.85, 201.01],
      backgroundColor: [
        ChartColor[0],
        ChartColor[1],
      ],
      borderColor: [
        ChartColor[0],
        ChartColor[1],
      ],
    }],
    labels: [
      'Poraba',
      'Proizvodnja',
    ]
  },
  options: {
    cutoutPercentage: 50,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    legend: {
      display: false,
      }
  }
});


//PROIZVODNJA PO VIRIH
var doughnutChartCanvas_proizvodnja_viri = document.getElementById("doughnutChart_proizvodnja_viri");
var doughnutChart_proizvodnja_viri = new Chart(doughnutChartCanvas_proizvodnja_viri, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [50, 60, 15, 33, 104, 10],
      backgroundColor: [
        ChartColor[1],
        ChartColor[2],
        ChartColor[3],
        ChartColor[4],
        ChartColor[5],
        ChartColor[6],
      ],
      borderColor: [
        ChartColor[1],
        ChartColor[2],
        ChartColor[3],
        ChartColor[4],
        ChartColor[5],
        ChartColor[6],
      ],
    }],
  
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'trdna goriva',
      'naftni proizvodi',
      'zemeljski plin',
      'hidro energija',
      'elektrika',
      'OVE'
    ]
  },
  options: {
    cutoutPercentage: 50,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 10,
        fontColor: 'grey'
        }
      }
  },
});

//OVE proizvodnja
var lineChartCanvas_OVE_produkcija = document.getElementById("lineChart_OVE_produkcija");
var lineChart_OVE_produkcija = new Chart(lineChartCanvas_OVE_produkcija, {
  type: 'line',
  data: {
    labels: ["2016", "2017", "2018", "2019", "2020"],
    datasets: [{
      data: [25, 38, 54, 72, 127],
      backgroundColor: ChartColor[0],
      borderColor: ChartColor[0],
      borderWidth: 3,
      fill: 'true',
      label: ""
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      filler: {
        propagate: false
      }
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Leto',
          fontSize: 12,
          lineHeight: 2
        },
        ticks: {
          fontColor: '#212229',
          stepSize: 50,
          min: 0,
          max: 150,
          autoSkip: true,
          autoSkipPadding: 15,
          maxRotation: 0,
          maxTicksLimit: 10
        },
        gridLines: {
          display: false,
          drawBorder: false,
          color: 'transparent',
          zeroLineColor: '#eeeeee'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Število elektrarn',
          fontSize: 12,
          lineHeight: 2
        },
        ticks: {
          fontColor: '#212229',
          display: true,
          autoSkip: false,
          maxRotation: 0,
          stepSize: 100,
          min: 0,
          max: 300
        },
        gridLines: {
          drawBorder: false
        }
      }]
    },
    legend: {
      display: false,
    },
    elements: {
      line: {
        tension: 0
      },
      point: {
        radius: 1
      }
    }

  }
});

//EE NA PREBIVALCA
var stackedbarChartCanvas_EE_prebivalca = document.getElementById("stackedbarChart_EE_prebivalca");
var stackedbarChart_EE_prebivalca = new Chart(stackedbarChartCanvas_EE_prebivalca, {
  type: 'bar',
  data: {
    labels: ["2020"],
    datasets: [
      {
        label: "Ljubljana",
        backgroundColor: "#e3c09d",
        borderColor: "#e3c09d",
        borderWidth: 1,
        data: [6926]
      },
      {
        label: "Kranj",
        backgroundColor: ChartColor[7],
        borderColor: "#470e0e",
        borderWidth: 5,
        data: [5420]
      },
      {
        label: "Slovenija",
        backgroundColor: "#e8e2a2",
        borderColor: "#e8e2a2",
        borderWidth: 1,
        data: [7454]
      },
      {
        label: "Nemčija",
        backgroundColor: ChartColor[3],
        borderColor: ChartColor[3],
        borderWidth: 1,
        data: [5817]
      },
      {
        label: "Italija",
        backgroundColor: "#afe8a2",
        borderColor: "#afe8a2",
        borderWidth: 1,
        data: [4738]
      },
      {
        label: "Avstrija",
        backgroundColor: "#9bd1ce",
        borderColor: "#9bd1ce",
        borderWidth: 1,
        data: [7169]
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
    legend: false,
    categoryPercentage: 0.5,
    stacked: true,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'leto',
          fontSize: 12,
          lineHeight: 2
        },
        ticks: {
          fontColor: '#bfccda',
          stepSize: 550,
          min: 2000,
          max: 6000,
          autoSkip: true,
          autoSkipPadding: 15,
          maxRotation: 0,
          maxTicksLimit: 10
        },
        gridLines: {
          display: false,
          drawBorder: false,
          color: 'transparent',
          zeroLineColor: '#eeeeee'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'št. stanovanj',
          fontSize: 12,
          lineHeight: 2
        },
        ticks: {
          fontColor: '#bfccda',
          stepSize: 500,
          min: 2000,
          max: 8000,
          autoSkip: true,
          autoSkipPadding: 15,
          maxRotation: 0,
          maxTicksLimit: 10
        },
        gridLines: {
          drawBorder: false
        }
      }]
    },
    legend: {
      display: false
    },
    legendCallback: function (chart) {
      var text = [];
      text.push('<div class="chartjs-legend"><ul>');
      for (var i = 0; i < chart.data.datasets.length; i++) {
        //console.log(chart.data.datasets[i]); // see what's inside the obj.
        //text.push('<li>');
        //text.push('<span style="background-color:' + chart.data.datasets[i].backgroundColor + '">' + '</span>');
        //text.push(chart.data.datasets[i].label);
        //text.push('</li>');
      }
      text.push('</ul></div>');
      return text.join("");
    },
    elements: {
      point: {
        radius: 0
      }
    }
  }
});

//// PORABA PO SEKTORJIH
var doughnutChartCanvas_poraba_sektorji = document.getElementById("doughnutChart_poraba_sektorjih");
var doughnutChart_poraba_sektorji = new Chart(doughnutChartCanvas_poraba_sektorji, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [1074.44, 845.76, 646.32, 212.31],
      backgroundColor: [
        ChartColor[1],
        ChartColor[2],
        ChartColor[3],
        ChartColor[4],
      ],
      borderColor: [
        ChartColor[1],
        ChartColor[2],
        ChartColor[3],
        ChartColor[4],
      ],
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'industrija',
      'promet',
      'gospodinjstva',
      'ostala poraba'
    ]
  },
  options: {
    cutoutPercentage: 50,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    legend: {
      display: true,
      position: 'top',
      labels: {
        boxWidth: 10,
        fontColor: 'grey'
        }
      }
  }
});