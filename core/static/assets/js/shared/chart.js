


Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontFamily = "Lato";

//MULTILINE GRAF
var speedCanvas = document.getElementById("multilineChart");
var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: {
    labels: ["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2020" ],
    datasets: [{
      label: "Celje",
      data: [48556, 48682, 48773, 48883, 48901, 49221, 49376, 49538, 49602, 49069, 49007],
      lineTension: 0,
      fill: false,
      borderColor: ChartColor[1]
    }, {
      label: "Koper",
      data: [52811, 53155,	53637,	54287,	51053,	51140,	51641,	51828,	52540,	52773,	53292],
      lineTension: 0,
      fill: false,
    borderColor: ChartColor[3]
    }, {
      label: "Kranj",
      data: [55271, 55432,	55552,	55764,	56108,	56081,	56047,	55795,	56715,	57133,	57185],
      lineTension: 0,
      fill: false,
    borderColor: ChartColor[5]
    }]
  },
  options: {
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    maxHeight: 10,
    maxWidth: 20,
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
    maxHeight: 10,
    maxWidth: 20,
    labels: {
      boxWidth: 10,
      fontColor: 'grey'
      }
    }
  }
});

//PORABA PO ENERGENTIH
var doughnutChartCanvas_poraba_energentih = document.getElementById("doughnutChart_poraba_energentih");
var doughnutChart_poraba_energentih = new Chart(doughnutChartCanvas_poraba_energentih, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [1122.33, 658.99, 54.66, 914.69, 27.54],
      backgroundColor: [
        ChartColor[1],
        ChartColor[2],
        ChartColor[3],
        ChartColor[4],
        ChartColor[5],
      ],
      borderColor: [
        ChartColor[1],
        ChartColor[2],
        ChartColor[3],
        ChartColor[4],
        ChartColor[5],
      ],
    }],
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'naftni proizvodi',
      'zemeljski plin',
      'hidro energija',
      'elektri??na energija',
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
      maxHeight: 10,
      maxWidth: 20,
      labels: {
        boxWidth: 10,
        fontColor: 'grey'
        }
      }
  }
});

// PORABA PO SEKTORJIH
var doughnutChartCanvas_poraba_sektorjih = document.getElementById("doughnutChart_poraba_sektorjih");
var doughnutChart_poraba_sektorjih = new Chart(doughnutChartCanvas_poraba_sektorjih, {
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

var poraba = document.getElementById('poraba').getContext('2d');
var gradientStrokeFill_1 = poraba.createLinearGradient(0, 100, 200, 0);
gradientStrokeFill_1.addColorStop(0, '#fa5539');
gradientStrokeFill_1.addColorStop(1, '#90EE90');
var revenueChart = new Chart(poraba, {
  type: 'line',
  data: {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
    datasets: [{
      data: [2566.04, 2763.15, 2953.74, 2866.94, 2866.74, 2778.85],
      backgroundColor: gradientStrokeFill_1,
      borderColor: '#ADFF2F',
      borderWidth: 0,
      pointBackgroundColor: "#ADFF2F",
      pointRadius: 7,
      pointBorderWidth: 3,
      pointBorderColor: '#fff',
      pointHoverRadius: 7,
      pointHoverBackgroundColor: "#fa394e",
      pointHoverBorderColor: "#fa394e",
      pointHoverBorderWidth: 2,
      pointHitRadius: 7,
    }]
  },
  options: {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    elements: {
      point: {
        radius: 0
      }
    },
    layout: {
      padding: {
        left: -10,
        right: 0,
        top: 0,
        bottom: -10
      }
    },
    legend: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }]
    }
  }
});

var proizvodnja = document.getElementById('proizvodnja').getContext('2d');
var gradientStrokeFill_1 = proizvodnja.createLinearGradient(0, 100, 200, 0);
gradientStrokeFill_1.addColorStop(0, '#fa5539');
gradientStrokeFill_1.addColorStop(1, '#90EE90');
var revenueChart = new Chart(proizvodnja, {
  type: 'line',
  data: {
    labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
    datasets: [{
      data: [156.17, 163.15, 170.74, 176.94, 194.77, 201.01],
      backgroundColor: gradientStrokeFill_1,
      borderColor: '#ADFF2F',
      borderWidth: 0,
      pointBackgroundColor: "#ADFF2F",
      pointRadius: 7,
      pointBorderWidth: 3,
      pointBorderColor: '#fff',
      pointHoverRadius: 7,
      pointHoverBackgroundColor: "#fa394e",
      pointHoverBorderColor: "#fa394e",
      pointHoverBorderWidth: 2,
      pointHitRadius: 7,
    }]
  },
  options: {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    },
    elements: {
      point: {
        radius: 0
      }
    },
    layout: {
      padding: {
        left: -10,
        right: 0,
        top: 0,
        bottom: -10
      }
    },
    legend: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }]
    }
  }
});



$(function () {
  'use strict';
  if ($("#mixed-chart").length) {
    var chartData = {
      labels: "{% labels %}",
      datasets: [{
        type: 'line',
        label: 'Revenue',
        data: ["23", "33", "32", "65", "21", "45", "35"],
        backgroundColor: ChartColor[2],
        borderColor: ChartColor[2],
        borderWidth: 3,
        fill: false,
      }, {
        type: 'bar',
        label: 'Standard',
        data: ["53", "28", "19", "29", "30", "51", "55"],
        backgroundColor: ChartColor[0],
        borderColor: ChartColor[0],
        borderWidth: 2
      }, {
        type: 'bar',
        label: 'Extended',
        data: ["34", "16", "46", "54", "42", "31", "49"],
        backgroundColor: ChartColor[1],
        borderColor: ChartColor[1]
      }]
    };
    var MixedChartCanvas = document.getElementById('mixed-chart').getContext('2d');
    lineChart = new Chart(MixedChartCanvas, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Revenue and number of lincences sold'
        },
        scales: {
          xAxes: [{
            display: true,
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
              labelString: 'Number of Sales',
              fontSize: 12,
              lineHeight: 2
            },
            ticks: {
              fontColor: '#212229',
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 20,
              min: 0,
              max: 100
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
          text.push('<div class="chartjs-legend d-flex justify-content-center mt-4"><ul>');
          for (var i = 0; i < chart.data.datasets.length; i++) {
            console.log(chart.data.datasets[i]); // see what's inside the obj.
            text.push('<li>');
            text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        }
      }
    });
    document.getElementById('mixed-chart-legend').innerHTML = lineChart.generateLegend();
  }


  if ($("#areaChart").length) {
    var gradientStrokeFill_1 = lineChartCanvas.createLinearGradient(1, 2, 1, 280);
    gradientStrokeFill_1.addColorStop(0, "rgba(20, 88, 232, 0.37)");
    gradientStrokeFill_1.addColorStop(1, "rgba(255,255,255,0.4)")
    var lineData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep"],
      datasets: [{
        data: [0, 205, 75, 150, 100, 150, 50, 100, 80],
        backgroundColor: gradientStrokeFill_1,
        borderColor: ChartColor[0],
        borderWidth: 3,
        fill: true,
        label: "Marketing"
      }]
    };
    var lineOptions = {
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
            labelString: 'Month',
            fontSize: 12,
            lineHeight: 2
          },
          ticks: {
            autoSkip: true,
            autoSkipPadding: 35,
            maxRotation: 0,
            maxTicksLimit: 10,
            fontColor: '#212229'
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
            labelString: 'Number of user',
            fontSize: 12,
            lineHeight: 2
          },
          ticks: {
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
        display: false
      },
      legendCallback: function (chart) {
        var text = [];
        text.push('<div class="chartjs-legend"><ul>');
        for (var i = 0; i < chart.data.datasets.length; i++) {
          console.log(chart.data.datasets[i]); // see what's inside the obj.
          text.push('<li>');
          text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
          text.push(chart.data.datasets[i].label);
          text.push('</li>');
        }
        text.push('</ul></div>');
        return text.join("");
      },
      elements: {
        line: {
          tension: 0
        },
        point: {
          radius: 0
        }
      }
    }
    var lineChartCanvas = $("#areaChart").get(0).getContext("2d");
    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: lineData,
      options: lineOptions
    });
    document.getElementById('area-traffic-legend').innerHTML = lineChart.generateLegend();
  }
  if ($("#barChart").length) {
    var barChartCanvas = $("#barChart").get(0).getContext("2d");
    var barChart = new Chart(barChartCanvas, {
      type: 'bar',
      data: {
        labels: ["EL-KO", "lesna biomasa", "zemeljski plin", "daljinsko ogrevanje", "ostalo"],
        datasets: [{
          label: 'Profit',
          data: [4623, 4843, 3963, 5502, 3082],
          backgroundColor: ChartColor[0],
          borderColor: ChartColor[0],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
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
              labelString: 'Na??in ogrevanja',
              fontSize: 12,
              lineHeight: 2
            },
            ticks: {
              fontColor: '#bfccda',
              stepSize: 50,
              min: 0,
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
              labelString: 'revenue by sales',
              fontSize: 12,
              lineHeight: 2
            },
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              fontColor: '#bfccda',
              stepSize: 50,
              min: 0,
              max: 150
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
            console.log(chart.data.datasets[i]); // see what's inside the obj.
            text.push('<li>');
            text.push('<span style="background-color:' + chart.data.datasets[i].backgroundColor + '">' + '</span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
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
    document.getElementById('bar-traffic-legend').innerHTML = barChart.generateLegend();
  }
  if ($("#stackedbarChart").length) {
    var stackedbarChartCanvas = $("#stackedbarChart").get(0).getContext("2d");
    var stackedbarChart = new Chart(stackedbarChartCanvas, {
      type: 'bar',
      data: {
        labels: ["2020"],
        datasets: [{
            label: "EL-KO",
            backgroundColor: ChartColor[0],
            borderColor: ChartColor[0],
            borderWidth: 1,
            data: [4623]
          },
          {
            label: "Lesna biomasa",
            backgroundColor: ChartColor[1],
            borderColor: ChartColor[1],
            borderWidth: 1,
            data: [4843]
          },
          {
            label: "zemeljski plin",
            backgroundColor: ChartColor[2],
            borderColor: ChartColor[2],
            borderWidth: 1,
            data: [3963]
          },
          {
            label: "daljinsko ogrevanje",
            backgroundColor: ChartColor[3],
            borderColor: ChartColor[3],
            borderWidth: 1,
            data: [5502]
          },
          {
            label: "ostalo",
            backgroundColor: ChartColor[4],
            borderColor: ChartColor[4],
            borderWidth: 1,
            data: [3082]
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
              min: 0,
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
              labelString: '??t. stanovanj',
              fontSize: 12,
              lineHeight: 2
            },
            ticks: {
              fontColor: '#bfccda',
              stepSize: 500,
              min: 2000,
              max: 6000,
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
    document.getElementById('stacked-bar-traffic-legend').innerHTML = stackedbarChart.generateLegend();
  }
  
  if ($("#radarChart").length) {
    var marksCanvas = document.getElementById("radarChart");
    var marksData = {
      labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
      datasets: [{
        label: "Student A",
        backgroundColor: ChartColor[0],
        borderColor: ChartColor[0],
        borderWidth: 0,
        fill: true,
        radius: 6,
        pointRadius: 5,
        pointBorderWidth: 0,
        pointBackgroundColor: ChartColor[4],
        pointHoverRadius: 10,
        data: [54, 45, 60, 70, 54, 75]
      }, {
        label: "Student B",
        backgroundColor: ChartColor[1],
        borderColor: ChartColor[1],
        borderWidth: 0,
        fill: true,
        radius: 6,
        pointRadius: 5,
        pointBorderWidth: 0,
        pointBackgroundColor: ChartColor[1],
        pointHoverRadius: 10,
        data: [65, 75, 70, 80, 60, 80]
      }]
    };

    var chartOptions = {
      scale: {
        ticks: {
          beginAtZero: true,
          min: 0,
          max: 100,
          stepSize: 20,
          display: false,
        },
        pointLabels: {
          fontSize: 14
        }
      },
      legend: false,
      legendCallback: function (chart) {
        var text = [];
        text.push('<div class="chartjs-legend"><ul>');
        for (var i = 0; i < chart.data.datasets.length; i++) {
          console.log(chart.data.datasets[i]); // see what's inside the obj.
          text.push('<li>');
          text.push('<span style="background-color:' + chart.data.datasets[i].backgroundColor + '">' + '</span>');
          text.push(chart.data.datasets[i].label);
          text.push('</li>');
        }
        text.push('</ul></div>');
        return text.join("");
      },
    };

    var radarChart = new Chart(marksCanvas, {
      type: 'radar',
      data: marksData,
      options: chartOptions
    });
    document.getElementById('radar-chart-legend').innerHTML = radarChart.generateLegend();
  }


  if ($("#pieChart").length) {
    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: {
        datasets: [{
          data: [30, 40, 30],
          backgroundColor: [
            ChartColor[0],
            ChartColor[1],
            ChartColor[2]
          ],
          borderColor: [
            ChartColor[0],
            ChartColor[1],
            ChartColor[2]
          ],
        }],
        labels: [
          'Sales',
          'Profit',
          'Return',
        ]
      },
      options: {
        responsive: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        legend: {
          display: false
        },
        legendCallback: function (chart) {
          var text = [];
          text.push('<div class="chartjs-legend"><ul>');
          for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
            text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
            text.push('</span>');
            if (chart.data.labels[i]) {
              text.push(chart.data.labels[i]);
            }
            text.push('</li>');
          }
          text.push('</div></ul>');
          return text.join("");
        }
      }
    });
    document.getElementById('pie-chart-legend').innerHTML = pieChart.generateLegend();
  }

  if ($('#scatterChart').length) {
    var options = {
      type: 'bubble',
      data: {
        datasets: [{
            label: 'John',
            data: [{
              x: 3,
              y: 10,
              r: 5
            }],
            backgroundColor: ChartColor[0],
            borderColor: ChartColor[0],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[0]
          },
          {
            label: 'Paul',
            data: [{
              x: 2,
              y: 2,
              r: 10
            }],
            backgroundColor: ChartColor[1],
            borderColor: ChartColor[1],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[1]
          }, {
            label: 'Paul',
            data: [{
              x: 12,
              y: 32,
              r: 13
            }],
            backgroundColor: ChartColor[2],
            borderColor: ChartColor[2],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[2]
          },
          {
            label: 'Paul',
            data: [{
              x: 29,
              y: 52,
              r: 5
            }],
            backgroundColor: ChartColor[0],
            borderColor: ChartColor[0],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[0]
          },
          {
            label: 'Paul',
            data: [{
              x: 49,
              y: 62,
              r: 5
            }],
            backgroundColor: ChartColor[1],
            borderColor: ChartColor[1],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[1]
          },
          {
            label: 'Paul',
            data: [{
              x: 22,
              y: 22,
              r: 5
            }],
            backgroundColor: ChartColor[2],
            borderColor: ChartColor[2],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[2]
          },
          {
            label: 'Paul',
            data: [{
              x: 23,
              y: 25,
              r: 5
            }],
            backgroundColor: ChartColor[1],
            borderColor: ChartColor[1],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[1]
          },
          {
            label: 'Paul',
            data: [{
              x: 12,
              y: 10,
              r: 5
            }],
            backgroundColor: ChartColor[1],
            borderColor: ChartColor[1],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[1]
          },
          {
            label: 'Paul',
            data: [{
              x: 34,
              y: 23,
              r: 5
            }],
            backgroundColor: ChartColor[1],
            borderColor: ChartColor[1],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[1]
          },
          {
            label: 'Paul',
            data: [{
              x: 30,
              y: 20,
              r: 10
            }],
            backgroundColor: ChartColor[1],
            borderColor: ChartColor[1],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[1]
          },
          {
            label: 'Paul',
            data: [{
              x: 12,
              y: 17,
              r: 5
            }],
            backgroundColor: ChartColor[1],
            borderColor: ChartColor[1],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[1]
          },
          {
            label: 'Paul',
            data: [{
              x: 32,
              y: 37,
              r: 5
            }],
            backgroundColor: ChartColor[0],
            borderColor: ChartColor[0],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[0]
          },
          {
            label: 'Paul',
            data: [{
              x: 52,
              y: 57,
              r: 5
            }],
            backgroundColor: ChartColor[0],
            borderColor: ChartColor[0],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[0]
          },
          {
            label: 'Paul',
            data: [{
              x: 77,
              y: 40,
              r: 5
            }],
            backgroundColor: ChartColor[0],
            borderColor: ChartColor[0],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[0]
          }, {
            label: 'Paul',
            data: [{
              x: 67,
              y: 40,
              r: 5
            }],
            backgroundColor: ChartColor[0],
            borderColor: ChartColor[0],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[0]
          }, {
            label: 'Paul',
            data: [{
              x: 47,
              y: 20,
              r: 10
            }],
            backgroundColor: ChartColor[0],
            borderColor: ChartColor[0],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[0]
          }, {
            label: 'Paul',
            data: [{
              x: 77,
              y: 10,
              r: 5
            }],
            backgroundColor: ChartColor[0],
            borderColor: ChartColor[0],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[0]
          }, {
            label: 'Paul',
            data: [{
              x: 57,
              y: 10,
              r: 10
            }],
            backgroundColor: ChartColor[0],
            borderColor: ChartColor[0],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[0]
          }, {
            label: 'Paul',
            data: [{
              x: 57,
              y: 40,
              r: 5
            }],
            backgroundColor: ChartColor[3],
            borderColor: ChartColor[3],
            borderWidth: 0,
            hoverBackgroundColor: ChartColor[3]
          }
        ]
      },
      options: {
        legend: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              color: '#fff',
            },
            ticks: {
              autoSkip: true,
              autoSkipPadding: 45,
              maxRotation: 0,
              maxTicksLimit: 10,
              fontColor: '#212229'
            }
          }],
          yAxes: [{
            gridLines: {
              color: '#eff2ff',
              display: true
            },
            ticks: {
              beginAtZero: true,
              stepSize: 25,
              max: 100,
              fontColor: '#212229'
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
            console.log(chart.data.datasets[i]); // see what's inside the obj.
            text.push('<li>');
            text.push('<span style="background-color:' + chart.data.datasets[i].backgroundColor + '">' + '</span>');
            text.push(chart.data.datasets[i].label);
            text.push('</li>');
          }
          text.push('</ul></div>');
          return text.join("");
        },
      }
    }

    var ctx = document.getElementById('scatterChart').getContext('2d');
    new Chart(ctx, options);
    document.getElementById('scatter-chart-legend').innerHTML = barChart.generateLegend();
  }
});