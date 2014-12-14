$(document).ready(function() {
  $(function () {
    $('#line-chart').highcharts({
      rangeSelector: {
            selected: 1,
            inputEnabled: $('#chart').width() > 480
        },


        title: {
            text: 'How Am I Doing?',
            style: {fontSize: "24px"}
        },

        xAxis: [{
                dateTimeLabelFormats: {
                day: '%e of %b'
            },
              type:"datetime"
          }],

        yAxis: {
            title: {
                text: 'Rating'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },

        plotOptions: {
            series: {
                pointRange: 24 * 3600 * 1000 // one day
            }
        },

        series: [{
            name: 'Day Rating',
            data: gon.linechart_data,
            tooltip: {
                valueDecimals: 2
            }
          }]
    });
  });
});
