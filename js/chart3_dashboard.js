data_array = [];  //lay du lieu random tung thang

for (var i = 1; i <= 31; i++) {
    var item = [
        i,
        Math.round(Math.random() * 100)
    ];

    data_array.push(item);
}


google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawColColors);

function drawColColors() {
      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Time of Day');
      data.addColumn('number', 'Motivation Level');

    //   data.addRows([
    //     [{v: [8, 0, 0], f: '8 am'}, 1, .25],
    //     [{v: [9, 0, 0], f: '9 am'}, 2, .5],
    //     [{v: [10, 0, 0], f:'10 am'}, 3, 1],
    //     [{v: [11, 0, 0], f: '11 am'}, 4, 2.25],
    //     [{v: [12, 0, 0], f: '12 pm'}, 5, 2.25],
    //     [{v: [13, 0, 0], f: '1 pm'}, 6, 3],
    //     [{v: [14, 0, 0], f: '2 pm'}, 7, 4],
    //     [{v: [15, 0, 0], f: '3 pm'}, 8, 5.25],
    //     [{v: [16, 0, 0], f: '4 pm'}, 9, 7.5],
    //     [{v: [17, 0, 0], f: '5 pm'}, 10, 10],
    //   ]);

    data.addRows(data_array); 

      var options = {
        title: 'Motivation and Energy Level Throughout the Day',
        colors: ['#9575cd', '#33ac71'],
        hAxis: {
          title: 'Time of Day',
        //   format: 'h:mm a',
        //   viewWindow: {
        //     min: [7, 30, 0],
        //     max: [17, 30, 0]
        //   }
        },
        vAxis: {
          title: 'Rating (scale of 1-10)'
        },
        height: 500,
      };

      var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }


    // PIE-CHART

    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities',
          is3D: true,
          height : 400,
          width : 600,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

      // LINE-CHART

      google.charts.load('current', {
        packages: ['corechart', 'line']
    });
    google.charts.setOnLoadCallback(drawBasic);
    
    var data_real = [
        [0, 0],
        [1, 10],
        [2, 23],
        [3, 17],
        [4, 18],
        [5, 9],
        [6, 11],
        [7, 27],
        [8, 33],
        [9, 40],
        [10, 0],
        [11, 10],
        [12, 23],
        [13, 17],
        [14, 18],
        [15, 9],
        [16, 11],
        [17, 27],
        [18, 33],
        [19, 40]
    ];
    
    
    setInterval(function() {
    
        var number = Math.round(Math.random() * 100);
    
        var item = [data_real[data_real.length - 1][0] + 1, number];
    
        data_real.push(item);
        data_real.splice(0, 1);
    
        console.log(data_real);
    
        drawBasic();
    
    }, 100);
    
    
    function drawBasic() {
    
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'X');
        data.addColumn('number', 'Visitors');
    
        data.addRows(data_real);
    
        var options = {
            hAxis: {
                title: 'Time'
            },
            vAxis: {
                title: 'Popularity'
            },
            width :700,
            height :500,
        };
    
        var chart = new google.visualization.LineChart(document.getElementById('line_chart'));
    
        chart.draw(data, options);
    }