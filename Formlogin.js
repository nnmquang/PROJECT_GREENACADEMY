// var chuoi = document.querySelector("#p .p1")
// console.log(chuoi.substr(0 , 20));

function xu_ly_dang_nhap() {
    var user_name = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // alert('Ban dang nhap voi thong tin: username ' + user_name + ' password ' + password);
     
    if (user_name == "minhquang" && password == "123456") {
        alert ('Đăng nhập thành công ' + user_name);
    } else {
        alert ('Tài khoản và mật khẩu không đúng');
    }

}

