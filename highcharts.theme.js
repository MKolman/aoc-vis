export default {
  credits: {
    enabled: false
  },
  navigation: {
    buttonOptions: {
      symbolStroke: '#090',
      theme: {
        fill: '#0f0f23'
      }
    }
  },
  colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
    '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'
  ],
  chart: {
    backgroundColor: {
      linearGradient: {
        x1: 0,
        y1: 0,
        x2: 1,
        y2: 1
      },
      stops: [
        [0, '#0f0f23'],
        [1, '#0f0f23']
      ]
    },
    style: {
      fontFamily: '\'Source Code Pro\', monospace'
    },
    plotBorderColor: '#606063'
  },
  title: {
    style: {
      color: '#fff',
    }
  },
  subtitle: {
    style: {
      color: '#CCC',
    }
  },
  xAxis: {
    labels: {
      style: {
        color: '#fff'
      }
    },
    lineColor: '#707073',
    minorGridLineColor: '#505053',
    tickColor: '#707073',
    title: {
      style: {
        color: '#FFF'

      }
    }
  },
  yAxis: {
    gridLineColor: '#707073',
    labels: {
      style: {
        color: '#CCC'
      }
    },
    lineColor: '#707073',
    minorGridLineColor: '#505053',
    tickColor: '#707073',
    tickWidth: 1,
    title: {
      style: {
        color: '#FFF'
      }
    }
  },
  tooltip: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    style: {
      color: '#F0F0F0'
    }
  },
  plotOptions: {
    series: {
      dataLabels: {
        color: '#F0F0F3',
        style: {
          fontSize: '13px'
        }
      },
      marker: {
        lineColor: '#333'
      }
    },
  },
  legend: {
    itemStyle: {
      color: '#CCC'
    },
    itemHoverStyle: {
      color: '#FFF'
    },
    itemHiddenStyle: {
      color: '#606063'
    },
    title: {
      style: {
        color: '#C0C0C0'
      }
    }
  },
  labels: {
    style: {
      color: '#707073'
    }
  },
}
