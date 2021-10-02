var ds_gio_hang = [];
ds_cart = [{
        image: 'image/c1.png',
        title: 'Mì Quãng',
        sale: '-20%',
        price: '30.000 đ',
    },
    {
        image: 'image/c2.png',
        title: 'Mì Tương',
        sale: '-10%',
        price: '40.000 đ',
    },
    {
        image: 'image/c3.png',
        title: 'Soup Há Cảo',
        sale: '-15%',
        price: '50.000 đ',
    },
    {
        image: 'image/c4.png',
        title: 'Cơm Gạo Lức',
        sale: '-20%',
        price: '20.000 đ',
    },
    {
        image: 'image/c5.png',
        title: 'Mì Trứng',
        sale: '-10%',
        price: '25.000 đ',
    },
    {
        image: 'image/c6.png',
        title: 'Bún Gạo Trắng',
        sale: '-15%',
        price: '35.000 đ',
    },
    {
        image: 'image/c7.png',
        title: 'Soup Tôm Thái',
        sale: '-5%',
        price: '40.000 đ',
    },
    {
        image: 'image/c8.png',
        title: 'Mì Khô ',
        sale: '-40%',
        price: '22.000 đ',
    },

]

function check_cart() { //Check-cart (lưu cart khi thoát trang vào lại) 31.08
    var ds_gio_hang_dang_luu = localStorage.getItem('cart');

    if (typeof ds_gio_hang_dang_luu != 'undefined' && ds_gio_hang_dang_luu != null) {
        ds_gio_hang = JSON.parse(ds_gio_hang_dang_luu);

        //console.log(ds_gio_hang);
        render_detail_cart() //Tạo 1 function để sử dụng nhiều case 31-08
        calc_all_item_in_cart();
    }
}

// function confirm_result_1() {
//    var htlm_result = '';
//    $.each(ds_gio_hang, function (index, item_remove) { 
//     htlm_result += `
//     <div id="popup_content_wrap" style="display: none;" >
//      <div id="popup_content">
//          <div id="btn-close-pop"><i class="far fa-times-circle"></i></div>
//          <center>
//               <h1>Xin Chào Quý Khách !</h1> 
//  <hr><hr>			 <p>Bạn có muốn xoá ${item_remove.title} ra khỏi giỏ hàng không ?</p>
//              <input type="submit" name="submit" value="Yes" class="btn btn-primary btn_YES" />
//              <input type="submit" name="submit" value="No" class="btn btn-primary btn_NO" />
//          </center>
//      </div>
//  </div>
//     `;
//    });
//    $('#popup_content_wrap').html(htlm_result);
// }




function render_detail_cart() { //Tạo 1 function để sử dụng nhiều case 31-08
    var html_gio_hang = '';
    $.each(ds_gio_hang, function(index, item_gio_hang) {
        html_gio_hang += `
    <div class="item_cart">
        <div class="image_item">
            <img src='${item_gio_hang.image}' alt="">
        </div>
        <div class="detail_item">
            <h5>${item_gio_hang.title}</h5>
            <span>${item_gio_hang.price}</span>
            <div class="quanlity">
                <div>SL :</div>
            <div class="btn_bot_gio_hang" onclick="decrese_number_quanlity(${index})">
                <span <i class="fas fa-minus-square"></i>  </span>
            </div>
            <div class="number_quanlity">${item_gio_hang.so_luong}</div>
            <div class="btn_them_gio_hang" onclick="increse_number_quanlity(${index})">
                <span <i class="fas fa-plus-square"></i> </span>
            </div>
            </div>
            <div class="trash" onclick="remove_item_cart(${index})">  
                <i class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
        `;
    });
    $('.list_item_cart').html(html_gio_hang);
}

function calc_all_item_in_cart() { //Tính tổng số lượng phải khai báo thêm biến ở dưới
    var so_luong_gio_hang = 0;
    $.each(ds_gio_hang, function(index, item_gio_hang_hien_tai) {
        so_luong_gio_hang += item_gio_hang_hien_tai.so_luong;
    });

    if (so_luong_gio_hang) { // Khi nào kích vào đặt món mới show tổng SL
        $('.so_luong_gio_hang').html(so_luong_gio_hang);
        $('.so_luong_gio_hang').show('slow');
    }

    var str_gio_hang = JSON.stringify(ds_gio_hang) //Chuyển mảng đối tượng thành chuỗi (localstogare 31-08)
    console.log(str_gio_hang)
    localStorage.setItem('cart', str_gio_hang);
}



function add_cart(id_mon) { // Làm số lượng từng món 
    // console.log(index)
    if (ds_gio_hang.length > 0) {
        var kiem_tra_ton_tai = 0;

        $.each(ds_gio_hang, function(index, item_gio_hang_hien_tai) {
            if (item_gio_hang_hien_tai.title == ds_cart[id_mon].title) {
                kiem_tra_ton_tai = 1;
                item_gio_hang_hien_tai.so_luong += 1;
                return;
            }
        });
        if (kiem_tra_ton_tai == 0) {
            ds_cart[id_mon].so_luong = 1;
            ds_gio_hang.push(ds_cart[id_mon]);
        };

    } else {
        ds_cart[id_mon].so_luong = 1;
        ds_gio_hang.push(ds_cart[id_mon]);
    }


    // var html_gio_hang = '';                   //Tạo 1 function để sử dụng nhiều case 31-08 copy để call hàm
    // ds_gio_hang.push(ds_cart[id_banh]);   làm bỏ vào giỏ hàng từng món

    // $.each(ds_gio_hang, function (index, item_gio_hang) {        //Tạo 1 function để sử dụng nhiều case 31-08
    //   html_gio_hang += `
    //   <div class="item_cart">
    //       <div class="image_item">
    //           <img src='${item_gio_hang.image}' alt="">
    //       </div>
    //       <div class="detail_item">
    //           <h5>${item_gio_hang.title}</h5>
    //           <span>${item_gio_hang.price}</span>
    //           <div class="quanlity">
    //               SL : ${item_gio_hang.so_luong}
    //           </div>
    //       </div>
    //   </div>
    //       `;
    // });
    // $('.item_cart').html(html_gio_hang);

    calc_all_item_in_cart(); //Tính tổng số lượng phải khai báo thêm biến ở dưới
    render_detail_cart() //Tạo 1 function để sử dụng nhiều case 31-08
    // $('.trash').click(function (x) {
    //   var item_cart = x.html_gio_hang
    //   $('.item_cart').empty();
    // }); 
}

function remove_item_cart(index_item) { //Xoá từng giỏ hang trash phải thêm event onclick ở ID trash ở trên 31-08
    // console.log('remove item index: ' + index_item);
    ds_gio_hang.splice(index_item, 1);
    if (index_item == 0) {
        $('.so_luong_gio_hang').hide('slow');
        // $('.cart_is_buy').html += `<span>Giỏ Hàng Trống</span>`;
        // $('.cart_is_buy').text('Gio hang trong')
    }
    render_detail_cart();

    calc_all_item_in_cart();

}

function increse_number_quanlity(index_item) {

    console.log(index_item)
    $.each(ds_gio_hang, function(index, item_gio_hang) {
        if (index == index_item) {
            item_gio_hang.so_luong += 1;
        }
    });
    render_detail_cart()
    calc_all_item_in_cart();
}



function decrese_number_quanlity(index_item) {
    //console.log(index_item)

    $.each(ds_gio_hang, function(index, item_gio_hang) {
        if (index == index_item) {
            if (item_gio_hang.so_luong <= 1) {
                $('#popup_content_wrap').show('slow');
                $('.name_delete_item').html(item_gio_hang.title);
                $('.index_delete').val(index_item);
            } else {
                item_gio_hang.so_luong -= 1;
            }
        }
    });

    //console.log(ds_gio_hang);
    render_detail_cart();
    calc_all_item_in_cart();
}


$(function() {
    check_cart(); //Check-cart 31.08

    $('.cart_main').click(function() {
        $('.cart_is_buy').toggle('slow');
        // $('.focus_cart-quickview').focus();   // làm ẩn cart khi click chuột ra ngoài
    });
    $('.close').click(function() {
        $('.cart_is_buy').hide('slow');
    });



    // $('.focus_cart-quickview').blur(function () {
    //   $('.cart_is_buy').hide('slow');    // làm ẩn cart khi click chuột ra ngoài
    // });

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
        'width': '100%',
        'margin': '20px 20px 20px 20px',
    })

    //Autocomplete-JqueyUI:
    var availableTags = [
        "Mì Quãng",
        "Mì Tương",
        "Soup Há Cảo",
        "Cơm Gạo Lức",
        "Mì Trứng",
        "Bún Gạo Trắng",
        "Soup Tôm Thái",
        "Mì Khô",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $(".input_search").autocomplete({
        source: availableTags
    });

    $('.btn_YES').click(function() {
        $('#popup_content_wrap').hide('slow');

        remove_item_cart($('.index_delete').val());

    });
    $('.btn_NO').click(function() {
        $('#popup_content_wrap').hide('slow');
    });
})