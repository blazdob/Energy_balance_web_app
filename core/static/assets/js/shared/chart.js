$(function () {
  /* ChartJS */
  'use strict';
  if ($("#mixed-chart").length) {
    var chartData = {
      labels: ['Jan', 'Feb', 'Mar', 'April', 'Maj', 'Jun', 'Jul'],
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
  //OVE production
  if ($("#lineChart_OVE_produkcija").length) {
    var lineData = {
      labels: ["2016", "2017", "2018", "2019", "2020"],
      datasets: [{
        data: [25, 38, 54, 72, 127],
        backgroundColor: ChartColor[0],
        borderColor: ChartColor[0],
        borderWidth: 3,
        fill: 'true',
        label: ""
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
        display: false
      },
      legendCallback: function (chart) {
        var text = [];
        text.push('<div class="chartjs-legend"><ul>');
        for (var i = 0; i < chart.data.datasets.length; i++) {
          //console.log(chart.data.datasets[i]); // see what's inside the obj.
          //text.push('<li>');
          //text.push('<span style="background-color:' + chart.data.datasets[i].borderColor + '">' + '</span>');
          //text.push(chart.data.datasets[i].label);
          //text.push('</li>');
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
    var lineChartCanvas_OVE_produkcija = $("#lineChart_OVE_produkcija").get(0).getContext("2d");
    var lineChart_OVE_produkcija = new Chart(lineChartCanvas_OVE_produkcija, {
      type: 'line',
      data: lineData,
      options: lineOptions
    });
    document.getElementById('line-traffic-legend').innerHTML = lineChart_OVE_produkcija.generateLegend();
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
              labelString: 'Način ogrevanja',
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
              labelString: 'št. stanovanj',
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

  //EE NA PREBIVALCA
  if ($("#stackedbarChart_EE_prebivalca").length) {
    var stackedbarChartCanvas_EE_prebivalca = $("#stackedbarChart_EE_prebivalca").get(0).getContext("2d");
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
    document.getElementById('stacked-bar-traffic-legend').innerHTML = stackedbarChart_EE_prebivalca.generateLegend();
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

  // PORABA PO ENERGENTIH
  if ($("#doughnutChart_poraba_energenti").length) {
    var doughnutChartCanvas_poraba_energenti = $("#doughnutChart_poraba_energenti").get(0).getContext("2d");
    var doughnutPieData = {
      datasets: [{
        data: [1122.33, 658.99, 54.66, 914.69, 27.54],
        backgroundColor: [
          ChartColor[0],
          ChartColor[1],
          ChartColor[2],
          ChartColor[3],
          ChartColor[4],
        ],
        borderColor: [
          ChartColor[0],
          ChartColor[1],
          ChartColor[2],
          ChartColor[3],
          ChartColor[4],
        ],
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: [
        'naftni proizvodi',
        'zemeljski plin',
        'hidro energija',
        'električna energija',
        'OVE'
      ]
    };
    var doughnutPieOptions = {
      cutoutPercentage: 75,
      animationEasing: "easeOutBounce",
      animateRotate: true,
      animateScale: false,
      responsive: true,
      maintainAspectRatio: true,
      showScale: true,
      legend: false,
      legendCallback: function (chart) {
        var text = [];
        text.push('<div class="chartjs-legend"><ul>');
        for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
          //text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
          //text.push('</span>');
          //if (chart.data.labels[i]) {
          //  text.push(chart.data.labels[i]);
          //}
          //text.push('</li>');
        }
        text.push('</div></ul>');
        return text.join("");
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      }
    };
    var doughnutChart_poraba_energenti = new Chart(doughnutChartCanvas_poraba_energenti, {
      type: 'doughnut',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
    document.getElementById('doughnut-chart-legend').innerHTML = doughnutChart_poraba_energenti.generateLegend();
  }


  // PORABA PO SEKTORJIH
  if ($("#doughnutChart_poraba_sektorji").length) {
    var doughnutChartCanvas_poraba_sektorji = $("#doughnutChart_poraba_sektorji").get(0).getContext("2d");
    var doughnutPieData = {
      datasets: [{
        data: [1074.44, 845.76, 646.32, 212.31],
        backgroundColor: [
          ChartColor[0],
          ChartColor[1],
          ChartColor[2],
          ChartColor[4],
        ],
        borderColor: [
          ChartColor[0],
          ChartColor[1],
          ChartColor[2],
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
    };
    var doughnutPieOptions = {
      cutoutPercentage: 75,
      animationEasing: "easeOutBounce",
      animateRotate: true,
      animateScale: false,
      responsive: true,
      maintainAspectRatio: true,
      showScale: true,
      legend: false,
      legendCallback: function (chart) {
        var text = [];
        text.push('<div class="chartjs-legend"><ul>');
        for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
          //text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
          //text.push('</span>');
          //if (chart.data.labels[i]) {
          //  text.push(chart.data.labels[i]);
          //}
          //text.push('</li>');
        }
        text.push('</div></ul>');
        return text.join("");
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      }
    };
    var doughnutChart_poraba_sektorji = new Chart(doughnutChartCanvas_poraba_sektorji, {
      type: 'doughnut',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
    document.getElementById('doughnut-chart-legend').innerHTML = doughnutChart_poraba_sektorji.generateLegend();
  }
  //PROIZVODNJA PO VIRIH
  if ($("#doughnutChart_proizvodnja_viri").length) {
    var doughnutChartCanvas_proizvodnja_viri = $("#doughnutChart_proizvodnja_viri").get(0).getContext("2d");
    var doughnutPieData = {
      datasets: [{
        data: [50, 60, 15, 33, 104, 10],
        backgroundColor: [
          ChartColor[0],
          ChartColor[1],
          ChartColor[2],
          ChartColor[3],
          ChartColor[4],
          ChartColor[5],
        ],
        borderColor: [
          ChartColor[0],
          ChartColor[1],
          ChartColor[2],
          ChartColor[3],
          ChartColor[4],
          ChartColor[5],
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
    };
    var doughnutPieOptions = {
      cutoutPercentage: 75,
      animationEasing: "easeOutBounce",
      animateRotate: true,
      animateScale: false,
      responsive: true,
      maintainAspectRatio: true,
      showScale: true,
      legend: false,
      legendCallback: function (chart) {
        var text = [];
        text.push('<div class="chartjs-legend"><ul>');
        for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
          //text.push('<li><span style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '">');
          //text.push('</span>');
          //if (chart.data.labels[i]) {
          //  text.push(chart.data.labels[i]);
          //}
          //text.push('</li>');
        }
        text.push('</div></ul>');
        return text.join("");
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }
      }
    };
    var doughnutChart_proizvodnja_viri = new Chart(doughnutChartCanvas_proizvodnja_viri, {
      type: 'doughnut',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
    document.getElementById('doughnut-chart-legend').innerHTML = doughnutChart_proizvodnja_viri.generateLegend();
  }
  // PROIZVODNJA/PORABA
  if ($("#pieChart_proizvodnja_poraba").length) {
    var pieChartCanvas_proizvodnja_poraba = $("#pieChart_proizvodnja_poraba").get(0).getContext("2d");
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
    document.getElementById('pie-chart-legend').innerHTML = pieChart_proizvodnja_poraba.generateLegend();
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