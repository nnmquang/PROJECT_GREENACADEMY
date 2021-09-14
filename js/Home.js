
// NHAHANGNGON-LIST
var ds_gio_hang = [];
ds_nha_hang = [
    {
        image: 'image/Food Photo (4).jpg',
        logo: 'image/Restaruant Logo-1.png',
        name: 'Foodworld',
        vote: '46',
        type: 'Mở cửa'

    },
    {
        image: 'image/Food Photo (5).jpg',
        logo: 'image/Restaruant Logo-3.png',
        name: 'Donuts hut',
        vote: '20',
        type: 'Đóng cửa'
    },
    {
        image: 'image/Food Photo (6).jpg',
        logo: 'image/Restaruant Logo-2.png',
        name: 'FizzaHood',
        vote: '20',
        type: 'Mở cửa'
    },
    {
        image: 'image/Food Photo (7).jpg',
        logo: 'image/Restaruant Logo-4.png',
        name: 'IceamBee',
        vote: '20',
        type: 'Đóng cửa'
    },
    {
        image: 'image/Food Photo (8).jpg',
        logo: 'image/Restaruant Logo-5.png',
        name: 'BeefHot',
        vote: '15',
        type: 'Mở cửa'
    },
    {
        image: 'image/Food Photo (9).jpg',
        logo: 'image/Restaruant Logo-5.png',
        name: 'SheefFrice',
        vote: '46',
        type: 'Đóng cửa'
    },
    {
        image: 'image/Food Photo (10).jpg',
        logo: 'image/Restaruant Logo-7.png',
        name: 'ThaiFood',
        vote: '46',
        type: 'Mở cửa'
    },
    {
        image: 'image/Food Photo (11).jpg',
        logo: 'image/Restaruant Logo-8.png',
        name: 'Italy',
        vote: '46',
        type: 'Đóng cửa'
    },
]
ds_popup = [
    {
        food_name: 'Rice Egg',
        detail: 'Thưởng thức món cơm trứng truyền thống kết hợp với mùi vị tuyệt vời mà bạn không thể bỏ qua.'
    },
    {
        food_name: 'Matcha Cheese',
        detail: 'Trà xanh hoà quyện với vị matcha béo hoà quyện tạo nên một cảm giac mát lạnh.',
    },
    {
        food_name: 'Honey Cake',
        detail: 'Hương vị mật ong rừng kết hợp với bánh qui mang đậm phong cách châu âu dành riêng cho những tín đồ sành ăn.'
    },
    {
        food_name: 'Strawbeery Cream',
        detail: 'Món tráng miệng được các bạn nhỏ yêu thích bạn không nên bỏ qua món ăn này cho trẻ nhé!.'
    },
    {
        food_name: 'Beef Steak',
        detail: 'Bò úc nướng ở nhiệt độ vừa phải theo công thức độc quyền của nhà hàng Ý chắc chắn bạn không nên bỏ qua thực đơn này.'
    },
    {
        food_name: 'Pork Fried',
        detail: 'Sườn heo nướng, món ăn yêu thích mọi thời đại, kết hợp với một ít cơm trắng thì còn gì tuyệt hơn.'
    },
    {
        food_name: 'Thái Soup',
        detail: 'Hương vị cay ấm nòng là đặc trưng ẩm thực của người Thái sẽ giúp bạn thay đổi khẩu vị và kích thích vị giác.'
    },
    {
        food_name: 'Bacon & Egg',
        detail: 'Mới gia nhập trong làng ẩm thực Việt, nhưng món ăn này bạn sẽ không thể kìm nổi khi thường thức nó.'
    },
]


function open_popup(id_item_nha_hang) {
    // ds_nha_hang[id_item_nha_hang].image;

    $('.popup-quickview img').attr('src', ds_nha_hang[id_item_nha_hang].image);
    $('.popup-quickview .card-title').text(ds_popup[id_item_nha_hang].food_name);
    $('.popup-quickview .card-text').text(ds_popup[id_item_nha_hang].detail);

    $('.popup-quickview').show('slow');
    $('.focus_popup-quickview').focus();    // làm ẩn popup khi click chuột ra ngoài
// }
}

function add_favorite(id_mon_favorite) {
    console.log(id_mon_favorite);
    if (ds_gio_hang.length > 0) {
        var kiem_tra_ton_tai_fa = 0;
    
        $.each(ds_gio_hang, function (index, item_gio_hang_hien_tai_fa) {
          if (item_gio_hang_hien_tai_fa.name == ds_nha_hang[id_mon_favorite].name) {
            kiem_tra_ton_tai_fa = 1;
            item_gio_hang_hien_tai_fa.so_luong += 1;
            return;
          }
        });
        if (kiem_tra_ton_tai_fa == 0) {
          ds_nha_hang[id_mon_favorite].so_luong = 1;
          ds_gio_hang.push(ds_nha_hang[id_mon_favorite]);
        };
    
      } else {
        ds_nha_hang[id_mon_favorite].so_luong = 1;
        ds_gio_hang.push(ds_nha_hang[id_mon_favorite]);
      }


      render_favorite_cart();  

}


function render_favorite_cart() {
    var html_gio_hang_fa = '';
      $.each(ds_gio_hang, function (index, item_gio_hang_fa) {        //Tạo 1 function để sử dụng nhiều case 31-08
        html_gio_hang_fa += `
        <div class="item_cart_favorite">
            <div class="image_item">
                <img src='${item_gio_hang_fa.image}' alt="">
            </div>
            <div class="detail_item">
                <h5>${item_gio_hang_fa.name}</h5>
                <div class="quanlity">
                    SL : ${item_gio_hang_fa.so_luong}
                </div>
            </div>
            <div class="trash_fa" onclick="remove_item_cart(${index})">  
                    <i class="fas fa-trash-alt"></i>
                </div>
        </div>
            `;
      });
      $('.item_cart_favorite').html(html_gio_hang_fa);
}

function render_detail_cart() {
    var html_gio_hang = '';
      $.each(ds_gio_hang, function (index, item_gio_hang) {        //Tạo 1 function để sử dụng nhiều case 31-08
        html_gio_hang += `
        <div class="item_cart">
            <div class="image_item">
                <img src='${item_gio_hang.image}' alt="">
            </div>
            <div class="detail_item">
                <h5>${item_gio_hang.name}</h5>
                <div class="quanlity">
                    SL : ${item_gio_hang.so_luong}
                </div>
            </div>
            <div class="trash" onclick="remove_item_cart(${index})">  
                    <i class="fas fa-trash-alt"></i>
                </div>
        </div>
            `;
      });
      $('.item_cart').html(html_gio_hang);
}

function remove_item_cart(index_item) {              
    // console.log('remove item index: ' + index_item);
    ds_gio_hang.splice(index_item, 1);
      if(index_item == 0) {
        $('.so_luong_gio_hang').hide('slow');
        // $('.cart_is_buy').html += `<span>Giỏ Hàng Trống</span>`;
        // $('.cart_is_buy').text('Gio hang trong')
      }
      render_detail_cart()
      calc_all_item_in_cart();
  
  }

function calc_all_item_in_cart() {           //Tính tổng số lượng phải khai báo thêm biến ở dưới
    var so_luong_gio_hang = 0;
    $.each(ds_gio_hang, function (index, item_gio_hang_hien_tai) {
      so_luong_gio_hang += item_gio_hang_hien_tai.so_luong;
    });

    $('.so_luong_gio_hang').html(so_luong_gio_hang);

    if (so_luong_gio_hang) {                // Khi nào kích vào đặt món mới show tổng SL
      $('.so_luong_gio_hang').html(so_luong_gio_hang);
      $('.so_luong_gio_hang').show('slow');
    }
}



function add_cart(id_mon) {        // Làm số lượng từng món 

    if (ds_gio_hang.length > 0) {
        var kiem_tra_ton_tai = 0;
    
        $.each(ds_gio_hang, function (index, item_gio_hang_hien_tai) {
          if (item_gio_hang_hien_tai.name == ds_nha_hang[id_mon].name) {
            kiem_tra_ton_tai = 1;
            item_gio_hang_hien_tai.so_luong += 1;
            return;
          }
        });
        if (kiem_tra_ton_tai == 0) {
          ds_nha_hang[id_mon].so_luong = 1;
          ds_gio_hang.push(ds_nha_hang[id_mon]);
        };
    
      } else {
        ds_nha_hang[id_mon].so_luong = 1;
        ds_gio_hang.push(ds_nha_hang[id_mon]);
      }


  render_detail_cart();  
  calc_all_item_in_cart();

}



$(function () {
    // $(".title_cart").on("click", function() {
    //     if ($(".title_cart").hasClass("up")) {
    //         $(".cart_is_favorite").css("height", "300px");
    //         $(".title_cart").addClass("up");
    //         $(".cart_is_favorite").css("overflow", "auto");
    //     } else {
    //         $(".cart_is_favorite").css("height", "30px");
    //         $(".title_cart").removeClass("up");
    //         $(".cart_is_favorite").css("overflow", "hidden");
    //     }
    // });
     $('.title_cart_fa').click(function() {
         if ($(this).hasClass()) {
            $(".cart_is_favorite").css("height", "300px");
            $(this).addClass();
            $(".cart_is_favorite").css("overflow", "auto");
         } else {
            $(".cart_is_favorite").css("height", "500px");
            $(this).removeClass();
            $(".cart_is_favorite").css("overflow", "hidden");
         }
     });


    $('.cart_main').click(function () {
        $('.cart_is_buy').fadeToggle('slow');
        // $('.focus_cart-quickview').focus();   // làm ẩn cart khi click chuột ra ngoài
      });
      $('.close').click(function () {
        $('.cart_is_buy').hide('slow');
      });

    $('#quick_view').click(function () {
        $('.popup-quickview').show('slow');
    });
    $('#btn-close').click(function () {
        $('.popup-quickview').hide('slow');
    });
    $('.focus_popup-quickview').blur(function () {
        $('.popup-quickview').hide('slow');    // làm ẩn popup khi click chuột ra ngoài
    });

    var html_list_item_nha_hang = '';

    $.each(ds_nha_hang, function (index, item_nha_hang) {
        // console.log(index, item_nha_hang);

        var class_item = '';   // Làm button xanh đỏ khi open/close (dong 154 them bien classitem)
        if (item_nha_hang.type == 'Mở cửa') {
            class_item = 'alert alert-info';
        } else {
            class_item = 'alert alert-danger';
        }

        html_list_item_nha_hang += `
        <div class="col-12 col-sm-3">
      <figure class="figure">
        <div class="gallery-grid1"> <img src="${item_nha_hang.image}" />
          <div class="overlay1">
            <div class="text">
              <ul>
                <li><a onclick="add_favorite(${index})" title="Add to Favorite"><i class="fa fa-heart" ></i></a></li>
                <li><a onclick="open_popup(${index})" title="Quick View"><i class="fa fa-search" ></i></a></li>
                <li><a onclick="add_cart(${index})" title="Add to Cart"><i class="fas fa-cart-plus"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div id="ngon1">
          <figcaption class="figure-caption"><img src="${item_nha_hang.logo}">${item_nha_hang.name}</figcaption>
          <p style="color: darkorange"><i class="fas fa-star"></i> ${item_nha_hang.vote}</p>
        </div>
      </figure>
      <div class="alert ${class_item}" role="alert" id="remain"><a href="#" class="alert-link">${item_nha_hang.type} </a> </div>
    </div>
        `;
    });
    $('#list_item_nha_hang').html(html_list_item_nha_hang);
});




// TOPMONNGON-LIST
ds_mon_ngon = [
    {
        image: 'image/Image-a.jpg',
        sale: 'Sale Off 10%',
        name: 'Pizza thập cẩm',
        type: 'open',
        sale_off : '10% Off'
        
    },
    {
        image: 'image/Image-b.jpg',
        sale: 'Sale Off 15%',
        name: 'Hamburger bò úc',
        type: 'upcoming',
        sale_off : '15% Off'
    },
    {
        image: 'image/Image-c.jpg',
        sale: 'Sale Off 20%',
        name: 'Spaghetti bacon',
        type: 'new',
        sale_off : '20% Off'
    },
    {
        image: 'image/Image-d.jpg',
        sale: 'Sale Off 10%',
        name: 'Bánh mì trộn',
        type: 'open',
        sale_off : '10% Off'

    },
    {
        image: 'image/Image-e.jpg',
        sale: 'Sale Off 15%',
        name: 'Mì Nhật',
        type: 'upcoming',
        sale_off : '15% Off'
    },
    {
        image: 'image/Image-f.jpg',
        sale: 'Sale Off 20%',
        name: 'Bò cuộn măng tây',
        type: 'new',
        sale_off : '20% Off'
    },
    {
        image: 'image/Rectangle 336.jpg',
        sale: 'Sale Off 15%',
        name: 'Hamburger cải tím',
        type: 'open',
        sale_off : '15% Off'
    },
    {
        image: 'image/Image-b.jpg',
        sale: 'Sale Off 10%',
        name: 'Hamburger 2 tầng',
        type: 'upcoming',
        sale_off : '10% Off'
    },

]

function open_popup_mon_ngon(id_item_mon_ngon) {

    $('.image_popup img ').attr('src', ds_mon_ngon[id_item_mon_ngon].image);  // phải gán ${index} dong 282 để lấy được đúng hình popup
    $('.pop_up_mon_ngon .name').text(ds_mon_ngon[id_item_mon_ngon].name);
    $('.pop_up_mon_ngon .sale_off').text(ds_mon_ngon[id_item_mon_ngon].sale);
    $('.pop_up_mon_ngon .type').text(ds_mon_ngon[id_item_mon_ngon].type);
    var class_item = '';
    if (ds_mon_ngon[id_item_mon_ngon].type.toLowerCase() == 'new') {
        class_item = 'badge-danger';
    } else if (ds_mon_ngon[id_item_mon_ngon].type.toLowerCase() == 'upcoming') {
        class_item = 'badge-warning';
    } else {
        class_item = 'badge-success';
    }
    $('.pop_up_mon_ngon .type').attr('class', 'type badge ' + class_item);
    $('.pop_up_mon_ngon').show('slow');      //phải chạy thuôc tính onclick 276 mới chạy được popup
    $('.focus_popup-quickview').focus();    // làm ẩn popup khi click chuột ra ngoài
    

    // thay doi css bang jquery vi du
      $('.pop_up_mon_ngon').css({
      'background' : 'khaki',
    })
    
}



$(function() {
    $('#view_dish').click(function () {
        $('.pop_up_mon_ngon').show('slow');
    });
    $('#btn-close-pop').click(function () {
        $('.pop_up_mon_ngon').hide('slow');
    });
    $('.focus_popup-quickview').blur(function () {
        $('.pop_up_mon_ngon').hide('slow');    // làm ẩn popup khi click chuột ra ngoài
    });
    


     var html_list_mon_ngon = '';

    $.each(ds_mon_ngon, function (index, item_mon_ngon) { 

        // $('#list_item_mon_ngon .saleoff').attr('style', 'background-color: blue');
        // var background = document.getElementsByClassName('saleoff');
        // var div = document.getElementById('list_item_mon_ngon');
        // if (item_mon_ngon.type == '10% Off') {
        //     background = div.style = "red";
        // } else {
        //     background = div.style = "blue";
        // }   

        var class_item = '';     //lam doi mau logo status mon an
        if (item_mon_ngon.type.toLowerCase() == 'new') {
            class_item = 'btn-danger';
        } else if (item_mon_ngon.type.toLowerCase() == 'upcoming') {
            class_item = 'btn-warning';
        } else {
            class_item = 'btn-success';
        }
  

        html_list_mon_ngon += `
        <div id="list_item_mon_ngon">
      <figure class="figure">
        <div class="gallery-grid"> <img src="${item_mon_ngon.image}" />
        <div class="saleoff" >${item_mon_ngon.sale_off}</div>
          <div class="overlay">
            <div class="text">
              <h3>${item_mon_ngon.sale}</h3>
              <button onclick="open_popup_mon_ngon(${index})" type="button" class="btn btn-outline-warning view_dish">Xem</button>
            </div>
          </div>
          </div>
        
        <div id="list-1">
          <h6>${item_mon_ngon.name} <span class="badge  ${class_item}">${item_mon_ngon.type}</span></h6>
        </div>
      </figure>
      </div>
        `;
     });
     $('#list_item_mon_ngon').html(html_list_mon_ngon);
    
// làm thanh tìm kiếm bung ngắn dài
    // $('.btn-search').click(function () {
    //     $('.input_search').show('slow');
    // });
     $('.input_search').focus(function() {
         $(this).width('200px');
     })
     $('.input_search').blur(function() {
        $(this).width('114px');
    })
   
// thay doi css bang jquery vi du
    // $('.saleoff').css({
    //   'background' : '#fff',
    // })

// làm thanh menu cuahang so xuong jquery
    $('.item_menu_cuahang.have-child').click(function() {
        // $('.focus_listmenu').focus();
        // $(this).find('.list_cuahang').show('slow');
        $(this).find('.list_cuahang').toggle('slow');
        $(this).toggleClass('active');
    })  
    
    // $('.focus_listmenu').blur(function () {
    //     $('.list_cuahang').hide('slow');    // làm ẩn menu khi click chuột ra ngoài
    // });
    $('.item_menu_about.have-child').click(function() {
        // $(this).find('.list_cuahang').show('slow');
        $(this).find('.list_cuahang').toggle('slow');
        $(this).toggleClass('active');
    })
    
    $('.item_menu_mainmenu.have-child').click(function() {
        // $(this).find('.list_cuahang').show('slow');
        $(this).find('.list_cuahang').toggle('slow');
        $(this).toggleClass('active');
    })  


   
})

