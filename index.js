google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Projected Wins', 'Payroll', {type: 'string', role: 'tooltip', p: {'html': true}}],
    [97, 221.0, createTooltipContent('Boston Red Sox', 97, 221.0)], 
    [87, 205.9, createTooltipContent('Chicago Cubs', 87, 205.9)],
    [93, 188.8, createTooltipContent('Los Angeles Dodgers', 93, 188.8)],
    [96, 184.4, createTooltipContent('New York Yankees', 96, 184.4)],
    [84, 167.4, createTooltipContent('Los Angeles Angels', 84, 167.4)],
    [76, 164.6, createTooltipContent('San Francisco Giants', 76, 164.6)],
    [85, 152.6, createTooltipContent('New York Mets', 85, 152.6)],
    [92, 151.2, createTooltipContent('Washington Nationals', 92, 151.2)],
    [86, 147.9, createTooltipContent('St. Louis Cardinals', 86, 147.9)],
    [73, 146.1, createTooltipContent('Seattle Mariners', 73, 146.1)],
    [95, 128.5, createTooltipContent('Houston Astros', 95, 128.5)],
    [79, 115.0, createTooltipContent('Philadelphia Phillies', 79, 115.0)],
    [82, 114.3, createTooltipContent('Colorado Rockies', 82, 114.3)],
    [79, 113.9, createTooltipContent('Milwaukee Brewers', 79, 113.9)],
    [74, 112.0, createTooltipContent('Texas Rangers', 74, 112.0)],
    [79, 111.2, createTooltipContent('Arizona Diamondbacks', 79, 111.2)],
    [82, 109.6, createTooltipContent('Atlanta Braves', 82, 109.6)],
    [81, 105.1, createTooltipContent('Cincinnati Reds', 81, 105.1)],
    [69, 101.9, createTooltipContent('Detroit Tigers', 69, 101.9)],
    [77, 100.5, createTooltipContent('Toronto Blue Jays', 77, 100.5)],
    [93, 96.3, createTooltipContent('Cleveland', 93, 96.3)],
    [82, 94.4, createTooltipContent('Minnesota Twins', 82, 94.4)],
    [70, 83.4, createTooltipContent('Kansas City Royals', 70, 83.4)],
    [70, 80.2, createTooltipContent('Chicago White Sox', 70, 80.2)],
    [76, 72.1, createTooltipContent('San Diego Padres', 76, 72.1)],
    [81, 69.3, createTooltipContent('Oakland Athletics', 81, 69.3)],
    [67, 65.2, createTooltipContent('Miami Marlins', 67, 65.2)],
    [62, 60.9, createTooltipContent('Baltimore Orioles', 62, 60.9)],
    [80, 58.9, createTooltipContent('Pittsburgh Pirates', 80, 58.9)],
    [85, 40.0, createTooltipContent('Tampa Bay Rays', 85, 40.0)]
  ]);

  var options = {
    legend: 'none',
    title: 'Expected Wins vs. Payroll, 2019 MLB',
    tooltip: { isHtml: true },
    chartArea: {width: '60%'},
    height: 500,
    hAxis: {title: 'Fangraphs projected 2019 wins'},
    vAxis: {title: '2019 payroll (in millions)'},
    annotations: {
      textStyle: {
        fontName: 'Arial',
        fontSize: 12,
        auraColor: 'none'
      },
      boxStyle: {
        stroke: '#ccc',
        strokeWidth: 1
      }
    }
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}

function createTooltipContent(teamName, wins, payroll) {
    return '<div style="padding:5px 5px 5px 10px;">' +
      '<b>' + teamName + '</b>' + '<br>' +
      'Projected wins: ' + wins + '<br>' +
      'Est. payroll: $' + payroll + 'MM' + '</div>';
}
