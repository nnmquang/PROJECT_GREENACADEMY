$(function() {
    $('.bar-menu').click(function () {
        $('#menu-ver').slideDown('slow');
        $('.focus').focus();
    });

    $('#btn-close-pop').click(function () {
        $('#menu-ver').hide('slow');
    });

    $('.focus').blur(function () {
        $('#menu-ver').hide('slow');    // làm ẩn popup khi click chuột ra ngoài
    });
})

//COLUMNS CHART
data_array = [];  //lay du lieu random tung thang

for (var i = 1; i <= 31; i++) {
    var item = [
        i,
        Math.round(Math.random() * 100)
    ];

    data_array.push(item);
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Time of Day');
      data.addColumn('number', 'Motivation Level');

    //   data.addRows([
    //     [{v: [8, 0, 0], f: '8 am'}, 1],
    //     [{v: [9, 0, 0], f: '9 am'}, 2],
    //     [{v: [10, 0, 0], f:'10 am'}, 3],
    //     [{v: [11, 0, 0], f: '11 am'}, 4],
    //     [{v: [12, 0, 0], f: '12 pm'}, 5],
    //     [{v: [13, 0, 0], f: '1 pm'}, 6],
    //     [{v: [14, 0, 0], f: '2 pm'}, 7],
    //     [{v: [15, 0, 0], f: '3 pm'}, 8],
    //     [{v: [16, 0, 0], f: '4 pm'}, 9],
    //     [{v: [17, 0, 0], f: '5 pm'}, 10],
    //   ]);

    data.addRows(data_array);    //lay du random lieu tung thang

      var options = {
        title: 'Doanh Thu Trong Tháng ',
        hAxis: {
            title: 'Doanh Số Theo Tháng',
          },
        vAxis: {
          title: 'Tổng tiền (triệu)'
        },

        height: 500,
        // width: 700,
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);



    }