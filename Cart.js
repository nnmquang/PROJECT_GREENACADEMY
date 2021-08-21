var ds_gio_hang = [];
ds_cart = [
    {
      image : 'image/c1.png',
      title : 'Mì Quãng',
      sale : '-20%',
      price : '30.000 đ',
    },
    {
        image : 'image/c2.png',
      title : 'Mì Tương',
      sale : '-10%',
      price : '40.000 đ',
    },
    {
        image : 'image/c3.png',
      title : 'Soup Há Cảo',
      sale : '-15%',
      price : '50.000 đ',
    },
    {
        image : 'image/c4.png',
      title : 'Cơm Gạo Lức',
      sale : '-20%',
      price : '20.000 đ',
    },
    {
        image : 'image/c5.png',
      title : 'Mì Trứng',
      sale : '-10%',
      price : '25.000 đ',
    },
    {
        image : 'image/c6.png',
      title : 'Bún Gạo Trắng',
      sale : '-15%',
      price : '35.000 đ',
    },
    {
        image : 'image/c7.png',
      title : 'Soup Tôm Thái',
      sale : '-5%',
      price : '40.000 đ',
    },
    {
        image : 'image/c8.png',
      title : 'Mì Khô ',
      sale : '-40%',
      price : '22.000 đ',
    },

]

function add_cart(id_mon) {
    // console.log(index)
    if (ds_gio_hang.length > 0) {
       var kiem_tra_ton_tai = 0 ;

       $.each(ds_gio_hang, function (index, item_gio_hang_hien_tai) { 
          if(item_gio_hang_hien_tai.title == ds_cart[id_mon].title) {
            kiem_tra_ton_tai = 1;
            item_gio_hang_hien_tai.so_luong += 1;
            return;
          }
       });
          if(kiem_tra_ton_tai == 0) {
            ds_cart[id_mon].so_luong = 1;
            ds_gio_hang.push(ds_cart[id_mon]);
          };

    } else {
      ds_cart[id_mon].so_luong = 1;
      ds_gio_hang.push(ds_cart[id_mon]);
    }
    



    var html_gio_hang = '';
    // ds_gio_hang.push(ds_cart[id_banh]);   làm bỏ vào giỏ hàng từng món
    
    $.each(ds_gio_hang, function (index, item_gio_hang) { 
        html_gio_hang += `
    <div class="item_cart">
        <div class="image_item">
            <img src='${item_gio_hang.image}' alt="">
        </div>
        <div class="detail_item">
            <h5>${item_gio_hang.title}</h5>
            <span>${item_gio_hang.price}</span>
            <div class="quanlity">
                SL : ${item_gio_hang.so_luong}
        </div>
        </div>
    </div>
        `;
    });
    $('.item_cart').html(html_gio_hang);
}



$(function() {

  $('.cart_main').click(function () {
    $('.cart_is_buy').show('slow');
});
$('.close').click(function () {
    $('.cart_is_buy').hide('slow');
});  


    var html_list_item_cart = '';
    $.each(ds_cart, function(index, item_cart) { 
    //    console.log(index, item_cart);
        html_list_item_cart += `
        <div class="row g-1">
        <div class="col-md-3">
                    <div class="card p-3">
                        <div class="text-center"> 
                            <img src="${item_cart.image}" width="200">
                        </div>
                        <div class="title_cart">
                            <h5>${item_cart.title} <span class="badge bg-success">${item_cart.sale}</span></h5>
                        </div>
                        <div class="price_cart"> 
                            <span>${item_cart.price}</span>
                        </div>
                        <div class="button_cart">
                            <button onclick="add_cart(${index})" type="button" class="btn btn-warning">Đặt ngay</button>
                        </div>
                    </div>
                </div>
        </div>
        `;
    });
    $('.wrapper').html(html_list_item_cart);


    $('.col-md-3').css({
      'width' : '100%',
      'margin': '20px 20px 20px 20px',
    })

   
})

