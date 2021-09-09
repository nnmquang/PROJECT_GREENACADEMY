function xu_ly_dang_nhap() {
    var email = document.getElementById('email').value;

    if (email == "minhquang") {
        alert('dang nhap' + email);
    }
}

function xl_input_email(event) {
    // if ((event.target.value.length <= 5) //phai có ít nhất 5 ký tự
    //     ||
    //     (event.target.value.indexOf('@') < 1) // không bắt đầu bằng ký tự @
    //     ||
    //     (event.target.value.lastIndexOf('.') <= event.target.value.indexOf('@') + 1) //sau @ +1 ký tự đứng trước .
    //     ||
    //     (event.target.value.indexOf(' ') != -1)) //không chứa dấu cách
    // {

    //     document.getElementById('message_email').style.display = 'block';
    // } else {
    //     document.getElementById('message_email').style.display = 'none';
    // }
    // if (event.target.value.length == "") {
    //     document.getElementById('message_email').style.display = 'none';

    // }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //return re.test(event.target.value.toLowerCase());
    //console.log(re.test(event.target.value.toLowerCase()));
    if (re.test(event.target.value.toLowerCase())) {
        document.getElementById('message_email').style.display = 'none';
    } else {
        document.getElementById('message_email').style.display = 'block';
    }
}



function check_valid_username(event) {
    const re = /^([0-9a-z_]+)$/gi;
    // g - global tìm toàn bộ chuỗi
    // i - không phân biệt hoa thường
    //console.log(re.test(event.target.value.toLowerCase()));
    //console.log(re.test(event.target.value));
    if (re.test(event.target.value)) {
        //console.log(true);
        document.getElementById('message_username').style.display = 'none';
    } else {
        //console.log(false)
        document.getElementById('message_username').style.display = 'block';
    }
}


function check_valid_phone_number(event) {
    const re = /^[0-9- \+]{8,20}$/;
    //console.log(re.test(event.target.value));
    if (re.test(event.target.value)) {
        //console.log(true);
        document.getElementById('message_phone').style.display = 'none';
    } else {
        //console.log(false)
        document.getElementById('message_phone').style.display = 'block';
    }
}


function nhan_xuong(event) {
    // console.log(event)
    // if (event.keyCode == 17){
    // alert('ban vui long ko nhan phim can thiet');
    // }
}


// function nha_phim_ra(event) {
//     // console.log(event)
//     if(event.target.value.length >= 50 )  //tối đa 50 ký tự
//     {
//         document.getElementById('message_name').style.display = 'block';
//         // alert('banvuilongnhapople');
//     }
//     else {
//         document.getElementById('message_name').style.display = 'none';
//     }
// }
// function NotAllow() {
//     var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
//     for (var i = 0; i < document.form1.txtName.value.length; i++) {
//         if (iChars.indexOf(document.form1.txtName.value.charAt(i)) != -1) {
//             alert("Co kí tu dac biet, ban vui long bo no di roi thu lai");
//             return false;
//         }
//     }
// } 

function nha_phim_ra(event) {
    //console.log('nha phim');
    var iChars = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";
    //console.log(event.target.value);
    for (i = 0; i < event.target.value.length; i++) {

        console.log(event.target.value[i]);

        if (iChars.indexOf(event.target.value.charAt(i)) > -1) {
            document.getElementById('message_name').style.display = 'block';
            break;
        } else if (event.target.value.length >= 50) {

        } else {
            document.getElementById('message_name').style.display = 'none';
        }

    }
}

//hieu ung CSS cua Jquery
$(function() {
    $('#mota').focus(function() {
        $(this).height(300);
    });
    $('#mota').blur(function() {
        $(this).height(60);
    });
})