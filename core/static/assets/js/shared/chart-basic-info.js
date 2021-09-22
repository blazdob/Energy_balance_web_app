Chart.defaults.global.defaultFontSize = 15;
Chart.defaults.global.defaultFontFamily = "Lato";

//ŠTEVILO PREBIVALCEV
var stPrebivalcev = document.getElementById("stPrebivalcev");
var stPrebivalcevChart = new Chart(stPrebivalcev, {
  type: 'bar',
  data: {
    labels: ["2020"],
    datasets: [{
        label: "KRANJ",
        backgroundColor: ChartColor[5],
        borderColor: "#470e0e",
        borderWidth: 5,
        data: [57185]
      },
      {
        label: "Koper",
        backgroundColor: ChartColor[2],
        borderColor: ChartColor[2],
        borderWidth: 1,
        data: [53292]
      },
      {
        label: "Celje",
        backgroundColor: ChartColor[3],
        borderColor: ChartColor[3],
        borderWidth: 1,
        data: [49007]
      },
      {
        label: "Novo Mesto",
        backgroundColor: ChartColor[4],
        borderColor: ChartColor[4],
        borderWidth: 1,
        data: [37398]
      },
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
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Št. prebivalcev',
          fontSize: 10,
          lineHeight: 2
        },
        ticks: {
          min: 25000,
          max: 60000,
        },
      }]
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
      label: "KRANJ",
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

//RAZDELITEV PREBIVALCEV PO STAROSTI
var prebPoStarosti = document.getElementById("prebPoStarosti");
var prebPoStarostiChart = new Chart(prebPoStarosti, {
  type: 'bar',
  data: {
    labels: ["Slovenija", "Celje", "Koper", "KRANJ", "Ljubljana", "Maribor", "Novo mesto"],
    datasets: [
      {
        label: '0 do 14 let',
        data: [15.1, 14.3, 14.7, 16.1, 14.2, 12.8, 16.9],
        backgroundColor: ChartColor[1],
      },
      {
        label: '15 do 64 let',
        data: [64.3, 64.6, 64.2, 64.2, 66.1, 64.2, 64.4],
        backgroundColor: ChartColor[3],
      },
      {
        label: '65 let ali več',
        data: [20.7, 21.2, 21.2, 19.6, 19.7, 23.0, 18.6],
        backgroundColor: ChartColor[2],
      },
    ]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    },
    legend: {
      display: false
    },
  }
});

//MOŠKI ŽENSKE RAZMERJE
var moskiZenske = document.getElementById("moskiZenske");
var moskiZenskeChart = new Chart(moskiZenske, {
  type: 'bar',
  data: {
    labels: ["KRANJ", "Koper", "Celje", "Novo mesto"],
    datasets: [
      {
        label: 'Moški',
        data: [28845,26367,24620,18865],
        backgroundColor: ChartColor[1],
      },
      {
        label: 'Ženske',
        data: [28340,26925,24387,18533],
        backgroundColor: ChartColor[3],
      },
    ]
  },
  options: {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    },
    legend: {
      display: false
    },
  }
});

//GOSTOTA POSELJENOSTI
var gostotaNaseljenosti = document.getElementById("gostotaNaseljenosti");
var gostotaNaseljenostiChart = new Chart(gostotaNaseljenosti, {
  type: 'bar',
  data: {
    labels: ["2020"],
    datasets: [
      {
        label: "Ljubljana",
        backgroundColor: "#e3c09d",
        borderColor: "#e3c09d",
        borderWidth: 1,
        data: [1071]
      },
      {
        label: "Maribor",
        backgroundColor: "#e8e2a2",
        borderColor: "#e8e2a2",
        borderWidth: 1,
        data: [771]
      },
      {
        label: "Celje",
        backgroundColor: ChartColor[3],
        borderColor: ChartColor[3],
        borderWidth: 1,
        data: [517]
      },
      {
        label: "KRANJ",
        backgroundColor: ChartColor[7],
        borderColor: "#470e0e",
        borderWidth: 5,
        data: [379]
      },
      {
        label: "Koper",
        backgroundColor: "#afe8a2",
        borderColor: "#afe8a2",
        borderWidth: 1,
        data: [176]
      },
      {
        label: "Novo mesto",
        backgroundColor: "#9bd1ce",
        borderColor: "#9bd1ce",
        borderWidth: 1,
        data: [159]
      },
      {
        label: "Slovenija",
        backgroundColor: "#9bd1fe",
        borderColor: "#9bd1fe",
        borderWidth: 1,
        data: [104]
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
          min: 100,
          max: 1500,
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
          min: 1200,
          max: 50,
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
  }
});

//POVPREČNA STAROST
var povpStarost = document.getElementById("povpStarost");
var povpStarostChart = new Chart(povpStarost, {
  type: 'bar',
  data: {
    labels: ["2020"],
    datasets: [
      {
        label: "Maribor",
        backgroundColor: "#e3c09d",
        borderColor: "#e3c09d",
        borderWidth: 1,
        data: [44.8]
      },
      {
        label: "Celje",
        backgroundColor: "#e8e2a2",
        borderColor: "#e8e2a2",
        borderWidth: 1,
        data: [44.5]
      },
      {
        label: "Koper",
        backgroundColor: ChartColor[3],
        borderColor: ChartColor[3],
        borderWidth: 1,
        data: [44.1]
      },
      {
        label: "Slovenija",
        backgroundColor: "#afe8a2",
        borderColor: "#afe8a2",
        borderWidth: 1,
        data: [43.7]
      },
      {
        label: "Kranj",
        backgroundColor: ChartColor[7],
        borderColor: "#470e0e",
        borderWidth: 5,
        data: [42.7]
      },
      {
        label: "Ljubljana",
        backgroundColor: "#9bd1ce",
        borderColor: "#9bd1ce",
        borderWidth: 1,
        data: [42.7]
      },
      {
        label: "Novo mesto",
        backgroundColor: "#9bd1fe",
        borderColor: "#9bd1fe",
        borderWidth: 1,
        data: [42.0]
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
      yAxes: [{
        display: true,
        ticks: {
          fontColor: '#bfccda',
          min: 41.0,
          max: 45,
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
  }
});

//POVRŠINA OBIČINE
var povrsinaObcine = document.getElementById("povrsinaObcine");
var povrsinaObcineChart = new Chart(povrsinaObcine, {
  type: 'bar',
  data: {
    labels: ["2020"],
    datasets: [
      {
        label: "Koper",
        backgroundColor: "#e3c09d",
        borderColor: "#e3c09d",
        borderWidth: 1,
        data: [304]
      },
      {
        label: "Ljubljana",
        backgroundColor: "#e8e2a2",
        borderColor: "#e8e2a2",
        borderWidth: 1,
        data: [275]
      },
      {
        label: "Novo Mmsto",
        backgroundColor: ChartColor[3],
        borderColor: ChartColor[3],
        borderWidth: 1,
        data: [236]
      },
      {
        label: "KRANJ",
        backgroundColor: ChartColor[7],
        borderColor: "#470e0e",
        borderWidth: 5,
        data: [151]
      },
      {
        label: "Maribor",
        backgroundColor: "#9fd1ff",
        borderColor: "#9fd1ff",
        borderWidth: 1,
        data: [148]
      },
      {
        label: "Celje",
        backgroundColor: "#9bd1ce",
        borderColor: "#9bd1ce",
        borderWidth: 1,
        data: [95]
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
      yAxes: [{
        display: true,
        ticks: {
          fontColor: '#bfccda',
          min: 80,
          max: 330,
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
  }
});