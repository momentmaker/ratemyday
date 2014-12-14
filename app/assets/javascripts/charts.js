$(document).ready(function() {
  $(function () {
    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    });

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

    $('#pie-chart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'My Rating Averages',
            style: {fontSize: "24px"}
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Rating Averages',
            data: gon.piechart_data
        }]
    });
  });
});
