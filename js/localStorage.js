// localStorage.setItem('user_is_tracked', 1)

// var user_is_tracked = localStorage.getItem('user_is_tracked');
// // console.log(user_is_tracked)

// VIẾT BẰNG JS
// if (user_is_tracked != null) {
//     if (user_is_tracked == 1) {
//         var confirm_value = confirm("Ban co thich webside cua chung toi khong");
//         localStorage.setItem('user_response', confirm_value);
//         localStorage.setItem('user_is_tracked', 2);
//     }else {
//         //do nothing
//     }
// }else {
//     localStorage.setItem('user_is_tracked',1)
// }

// VIẾT BẰNG JQUERY + POP-UP
// $(function() {
    
//     var user_is_tracked = localStorage.getItem('user_is_tracked');
//     if (user_is_tracked != null) {
//         if (user_is_tracked == 1) {
//             var confirm_value = $('#popup_content_wrap').show('slow')
//             $('.btn_YES').click(function () {
//                 $('#popup_content_wrap').hide('slow');
//                 localStorage.setItem('user_response', confirm_value="True");
//                 localStorage.setItem('user_is_tracked', 2);
//             });
//             $('.btn_NO').click(function () {
//                 $('#popup_content_wrap').hide('slow');
//                 localStorage.setItem('user_response', confirm_value="False");
//                 localStorage.setItem('user_is_tracked', 2);
//             });
//             // localStorage.setItem('user_response', confirm_value);
//             // localStorage.setItem('user_is_tracked', 2);
//         }else {
//         //do nothing
//     }
//    }else {
//         localStorage.setItem('user_is_tracked',1)  
//     }

//     $('#btn-close-pop').click(function () {
//         $('#popup_content_wrap').hide('slow');
//     });
// })


$(function () {

    var user_is_tracked = localStorage.getItem('user_is_tracked');
    var user_response = localStorage.getItem('user_response')

    var ds_hoi_lai_user = [
        5,
        10
    ]

    if (user_is_tracked != null) {
        if (user_is_tracked == 1) {
            $('#popup_content_wrap').show('slow');
            localStorage.setItem('user_is_tracked', 2);
    } else {
       for(var i = 0; i < ds_hoi_lai_user.length; i++) {
        //    console.log(ds_hoi_lai_user[i], user_is_tracked * 1 + 1, user_response);
           if(ds_hoi_lai_user[i] == user_is_tracked * 1 + 1 && (user_response =="False")) {
            $('#popup_content_wrap').show('slow');
            // console.log('do it');
            break;
           } else {
               //do nothing
           }
       }
       localStorage.setItem('user_is_tracked', user_is_tracked = user_is_tracked * 1 + 1);
    }
 } else {
        localStorage.setItem('user_is_tracked',1)  
    }
       

    $('.btn_YES').click(function () {
        $('#popup_content_wrap').hide('slow');
        localStorage.setItem('user_response', "True");
    });
    $('.btn_NO').click(function () {
        $('#popup_content_wrap').hide('slow');
        localStorage.setItem('user_response', "False");
    });



    $('#btn-close-pop').click(function () {
        $('#popup_content_wrap').hide('slow');
    });
})
