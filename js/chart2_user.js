// var list_user = [{                        // đem danh sách xuống dưới cho lần khởi tạo đầu tiên để nos lưu vào localstorage
//     avatar: 'image/avatar1.png',
//     username: 'hungnguyen',
//     fullname: 'Hùng Nguyễn',
//     email: 'hungnguyenxuan118@gmail.com'
// }, {
//     avatar: 'image/avatar2.png',
//     username: 'hungnguyen 1',
//     fullname: 'Hùng Nguyễn 1',
//     email: 'hungnguyenxuan118@gmail.com'
// }, {
//     avatar: 'image/avatar3.png',
//     username: 'hungnguyen 2',
//     fullname: 'Hùng Nguyễn 2',
//     email: 'hungnguyenxuan118@gmail.com'
// }, {
//     avatar: 'image/avatar4.png',
//     username: 'hungnguyen 3',
//     fullname: 'Hùng Nguyễn 3',
//     email: 'hungnguyenxuan118@gmail.com'
// }, {
//     avatar: 'image/avatar5.png',
//     username: 'hungnguyen 4',
//     fullname: 'Hùng Nguyễn 4',
//     email: 'hungnguyenxuan118@gmail.com'
// }, {
//     avatar: 'image/avatar6.png',
//     username: 'hungnguyen 5',
//     fullname: 'Hùng Nguyễn 5',
//     email: 'hungnguyenxuan118@gmail.com'
// }, {
//     avatar: 'image/avatar7.png',
//     username: 'hungnguyen 6',
//     fullname: 'Hùng Nguyễn 6',
//     email: 'hungnguyenxuan118@gmail.com'
// }, {
//     avatar: 'image/avatar8.png',
//     username: 'hungnguyen 7',
//     fullname: 'Hùng Nguyễn 7',
//     email: 'hungnguyenxuan118@gmail.com'
// }, {
//     avatar: 'image/avatar9.png',
//     username: 'hungnguyen 8',
//     fullname: 'Hùng Nguyễn 8',
//     email: 'hungnguyenxuan118@gmail.com'
// }, {
//     avatar: 'image/avatar10.png',
//     username: 'hungnguyen 9',
//     fullname: 'Hùng Nguyễn 9',
//     email: 'hungnguyenxuan118@gmail.com'
// }, {
//     avatar: 'image/avatar11.png',
//     username: 'hungnguyen 10',
//     fullname: 'Hùng Nguyễn 10',
//     email: 'hungnguyenxuan118@gmail.com'
// }, {
//     avatar: 'image/avatar1.png',
//     username: 'hungnguyen 11',
//     fullname: 'Hùng Nguyễn 11',
//     email: 'hungnguyenxuan118@gmail.com'
// },{
//     avatar: 'image/avatar1.png',
//     username: 'hungnguyen 12',
//     fullname: 'Hùng Nguyễn 12',
//     email: 'hungnguyenxuan118@gmail.com'
// }];
var list_user = [];
var cur_page = 0;

var item_tren_trang = 3;

var number_of_page = 0;    //đưa biến ra ngoài thành biến toàn cục mới sử dụng được go_up_1_page

function load_ds_user() {
    var html = '';

    $.each(list_user, function (index, user) {
        if (index < cur_page * item_tren_trang + item_tren_trang && index >= cur_page * item_tren_trang) {
            html += `
          <tr>
              <td>
                  <img src="${user.avatar}" alt="">
              </td>
              <td>
              ${user.username}
              </td>
              <td>${user.fullname}</td>
              <td>${user.email}</td>
              <td>
                  <span><i class="far fa-edit" onclick="load_update_user(${index})" data-bs-toggle="modal" data-bs-target="#exampleModal1"></i></span>

                  <span><i class="far fa-trash-alt" onclick="remove_item_user(${index})"></i></span>
              </td>
          </tr>
          `;
        }
    });


    $('.ds_users').html(html);
}

function load_pagination() {
    // var number_of_page = Math.ceil(list_user.length / item_tren_trang);    //đưa biến ra ngoài thành biến toàn cục mới sử dụng được go_up_1_page
    // number_of_page = Math.ceil(list_user.length / item_tren_trang)    // dem ham xuong duoi moi tinh duoc luc load trag
    // console.log(number_of_page);

    var html = '';
    for (var i = 0; i < number_of_page; i++) {
        if (cur_page == i) {
            html += `<div class="btn_page active">${i + 1}</div>`         // Active biet trang hien tai mau xanh
        } else {
            html += `<div class="btn_page" onclick="pagination(${i})">${i + 1}</div>`;  // Them su kien onclick de di chuyen trang
        }
    }

    $(".pagination").html(html);

    if (cur_page <= 0) {                                  //disable các nút khi click trang
        $('.btn_go_first_page').addClass('disabled');

        $('.btn_go_down_page').addClass('disabled');
    } else {
        $('.btn_go_first_page').removeClass('disabled');

        $('.btn_go_down_page').removeClass('disabled');
    }

    if (cur_page >= number_of_page - 1) {                //disable các nút khi click trang
        $('.btn_go_up_page').addClass('disabled');

        $('.btn_go_last_page').addClass('disabled');
    } else {
        $('.btn_go_up_page').removeClass('disabled');

        $('.btn_go_last_page').removeClass('disabled');
    }
}



function go_to_first_page() {     //load ve trang dau
    cur_page = 0;

    load_ds_user();

    load_pagination();
}

function go_down_1_page() {     //lui 1 trang
    if (cur_page > 0) {          // phải ràng buộc để trang ko bị mất
        cur_page = cur_page - 1;

        load_ds_user();

        load_pagination();
    } else {
        //do nothing  (viết tường minh)
    }
}

function go_up_1_page() {             //lên 1 trang
    //console.log(cur_page, number_of_page)
    if (cur_page < number_of_page - 1) {
        cur_page = cur_page + 1;

        load_ds_user();

        load_pagination();
    } else {
        //do nothing
    }
}

function go_to_last_page() {        //load ve trang cuoi
    cur_page = number_of_page - 1;

    load_ds_user();

    load_pagination();
}

function pagination(page_change) {    // Them su kien onclick de di chuyen trang
    console.log(page_change)

    cur_page = page_change

    load_ds_user();
    load_pagination();
}


function add_new_user() { 
    
    //Add user
    var username = '';
    var fullname = '';
    var emailuser = '';

    var username_input = $('#username');
    var fullname_input = $('#fullname');
    var emailuser_input = $('#emailuser');

    if (username_input.val() != '' && fullname_input.val() != '' && emailuser_input.val() != '') {

        username = username_input.val();
        fullname = fullname_input.val();
        emailuser = emailuser_input.val();

        //console.log(username, fullname, emailuser);
        var new_user_temp = {
            avatar: 'image/avatar3.png',
            username: username,
            fullname: fullname,
            email: emailuser
        }

        list_user.push(new_user_temp);
        localStorage.setItem('list_user', JSON.stringify(list_user));

        load_ds_user();

        load_pagination();

        $('#exampleModal').modal('hide');      //tao function de xoa popup modal khi user nhap xong

        clear_all_data_input_form([username_input, fullname_input, emailuser_input]);  //tao function de tu dong xoa popup modal khi user nhap xong
    }
    else {
        // process notice require field is not fullfill
    }

}

function pre_check_page() {
    var temp_data = localStorage.getItem('list_user');
    if (typeof temp_data !== 'undefined' && temp_data !== null) {
        //console.log('đã có data, nên lấy data ra chứ ko add lần đầu từ server nữa');

        list_user = JSON.parse(temp_data);

        //console.log(list_user);
    } else { // lay data tu server gan lan dau tien
        //console.log('chưa có data, nên phải lấy data lần đầu từ server');

        list_user = [{
            avatar: 'image/avatar1.png',
            username: 'hungnguyen',
            fullname: 'Hùng Nguyễn',
            email: 'hungnguyenxuan118@gmail.com'
        }, {
            avatar: 'image/avatar2.png',
            username: 'hungnguyen 1',
            fullname: 'Hùng Nguyễn 1',
            email: 'hungnguyenxuan118@gmail.com'
        }, {
            avatar: 'image/avatar3.png',
            username: 'hungnguyen 2',
            fullname: 'Hùng Nguyễn 2',
            email: 'hungnguyenxuan118@gmail.com'
        }, {
            avatar: 'image/avatar4.png',
            username: 'hungnguyen 3',
            fullname: 'Hùng Nguyễn 3',
            email: 'hungnguyenxuan118@gmail.com'
        }, {
            avatar: 'image/avatar5.png',
            username: 'hungnguyen 4',
            fullname: 'Hùng Nguyễn 4',
            email: 'hungnguyenxuan118@gmail.com'
        }, {
            avatar: 'image/avatar6.png',
            username: 'hungnguyen 5',
            fullname: 'Hùng Nguyễn 5',
            email: 'hungnguyenxuan118@gmail.com'
        }, {
            avatar: 'image/avatar7.png',
            username: 'hungnguyen 6',
            fullname: 'Hùng Nguyễn 6',
            email: 'hungnguyenxuan118@gmail.com'
        }, {
            avatar: 'image/avatar8.png',
            username: 'hungnguyen 7',
            fullname: 'Hùng Nguyễn 7',
            email: 'hungnguyenxuan118@gmail.com'
        }, {
            avatar: 'image/avatar9.png',
            username: 'hungnguyen 8',
            fullname: 'Hùng Nguyễn 8',
            email: 'hungnguyenxuan118@gmail.com'
        }, {
            avatar: 'image/avatar10.png',
            username: 'hungnguyen 9',
            fullname: 'Hùng Nguyễn 9',
            email: 'hungnguyenxuan118@gmail.com'
        }, {
            avatar: 'image/avatar11.png',
            username: 'hungnguyen 10',
            fullname: 'Hùng Nguyễn 10',
            email: 'hungnguyenxuan118@gmail.com'
        }, {
            avatar: 'image/avatar1.png',
            username: 'hungnguyen 11',
            fullname: 'Hùng Nguyễn 11',
            email: 'hungnguyenxuan118@gmail.com'
        }, {
            avatar: 'image/avatar2.png',
            username: 'hungnguyen 12',
            fullname: 'Hùng Nguyễn 12',
            email: 'hungnguyenxuan118@gmail.com'
        }];

        localStorage.setItem('list_user', JSON.stringify(list_user));

    }
    number_of_page = Math.ceil(list_user.length / item_tren_trang);    // dem ham xuong duoi moi tinh duoc luc load trag
}

function clear_all_data_input_form(array_item_input) {      //tao function de tu dong xoa popup modal khi user nhap xong
    $.each(array_item_input, function (index, item_input) {
        item_input.val('');
    });
}

function load_update_user(id_user) {
    // console.log(id_user)
    $('#username_update').val(list_user[id_user].username);
    $('#fullname_update').val(list_user[id_user].fullname);
    $('#emailuser_update').val(list_user[id_user].email);

    $('#index_user_update').val(id_user);  // Gán giá trị này bên HTML input hide để khi save còn biết user nào
}

function update_user() {
    var username = '';
    var fullname = '';
    var emailuser = '';
    var indexuser = '';

    var username_input = $('#username_update');
    var fullname_input = $('#fullname_update');
    var emailuser_input = $('#emailuser_update');
    var indexuser_input = $('#index_user_update');

    if (username_input.val() != '' && fullname_input.val() != '' && emailuser_input.val() != '') {
        username = username_input.val();
        fullname = fullname_input.val();
        emailuser = emailuser_input.val();
        indexuser = indexuser_input.val();

        //console.log(username, fullname, emailuser, indexuser);

        list_user[indexuser].username = username;
        list_user[indexuser].fullname = fullname;
        list_user[indexuser].email = emailuser;

        localStorage.setItem('list_user', JSON.stringify(list_user));

        load_ds_user();

        load_pagination();

        $('#exampleModal1').modal('hide');

    } else {
        // process notice require field is not fullfill

    }
}

function remove_item_user(index_item) {             //Xoa list user trash
    // console.log('remove item index: ' + index_item);
    var confirm_result = confirm(`Bạn muốn xóa user này ra khỏi danh sách không không?`);
    if (confirm_result) {
        list_user.splice(index_item, 1);
        localStorage.setItem('list_user', JSON.stringify(list_user));
        load_ds_user();

        load_pagination();
    } else {
        //do nothing
    }

}

$(function () {
    pre_check_page()

    load_ds_user();

    load_pagination();

    $('.btn_go_first_page').click(go_to_first_page);   //load ve trang dau
    $('.btn_go_down_page').click(go_down_1_page);      //lui 1 trang
    $('.btn_go_up_page').click(go_up_1_page);          //lên 1 trang
    $('.btn_go_last_page').click(go_to_last_page);     //load ve trang cuoi
    $('.btn_save_new').click(add_new_user);            //Add user
    $('.btn_save_update').click(update_user);
})

