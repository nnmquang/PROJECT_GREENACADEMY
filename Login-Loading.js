// var chuoi = document.querySelector("#p .p1")
// console.log(chuoi.substr(0 , 20));

function xu_ly_dang_nhap() {
    var user_name = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // alert('Ban dang nhap voi thong tin: username ' + user_name + ' password ' + password);
     
    if (user_name == "minhquang" && password == "123456") {
        // alert ('Đăng nhập thành công ' + user_name);
    }
    else if (user_name == "" && password == "") {
        alert ('Hãy nhập thông tin không để trống');
    }
     else {
        alert ('Tài khoản và mật khẩu không đúng');
    } 
    $('#loading').hide();
    $('.btn_login_submit').removeAttr('disabled').text('Gửi');
}

$(function() {
    $('.btn_login_submit').click(function() {
        $('#loading').show();
        $(this)
            .attr('disabled', 'true')
            .text('Loading...');

        setTimeout(() => {
            xu_ly_dang_nhap();
        }, 3000);
    });
    
});