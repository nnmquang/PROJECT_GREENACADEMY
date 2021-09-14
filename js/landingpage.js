

// $(function() {
//     $('.about_content').addClass('animate__tada');

//     $('.about_person').addClass('animate__slideInRight');

//     $('.about_logo').addClass('animate__slideInLeft');

//     $(window).scroll(function (event) { 
//         // console.log(event)
//         //TEAM
//         if ($(window).scrollTop() > $('.team1_title').offset().top - $(window).height() + $('.team1_title').height()) {
//             $('.team1_title').addClass('animate__fadeInUp');
//         }
//         if ($(window).scrollTop() > $('.team2_title').offset().top - $(window).height() + $('.team2_title').height()) {
//             $('.team2_title').addClass('animate__fadeInUp');
//         }
//         if ($(window).scrollTop() > $('.team1_image').offset().top - $(window).height() + $('.team1_image').height()) {
//             $('.team1_image').addClass('animate__slideInRight');
//         }
//         if ($(window).scrollTop() > $('.team2_image').offset().top - $(window).height() + $('.team2_image').height()) {
//             $('.team2_image').addClass('animate__slideInLeft');
//         }
//         //ITEM
//         if ($(window).scrollTop() > $('.list_title').offset().top - $(window).height() + $('.list_title').height()) {
//             $('.list_title').addClass('animate__bounceInDown');
//         }
//         if ($(window).scrollTop() > $('.list_item').offset().top - $(window).height() + $('.list_item').height()) {
//             $('.list_item').addClass('animate__jackInTheBox');
//         }
//         //MENU
//         if ($(window).scrollTop() > $('.menu_title').offset().top - $(window).height() + $('.menu_title').height()) {
//             $('.menu_title').addClass('animate__fadeInDown');
//         }
//         if ($(window).scrollTop() > $('.menu_main').offset().top - $(window).height() + $('.menu_main').height()) {
//             $('.menu_main').addClass('animate__fadeInDown');
//         }
//         if ($(window).scrollTop() > $('.menu_button').offset().top - $(window).height() + $('.menu_button').height()) {
//             $('.menu_button').addClass('animate__heartBeat');
//         }
//         //COMMENTS
//         if ($(window).scrollTop() > $('.customer').offset().top - $(window).height() + $('.customer').height()) {
//             $('.customer').addClass('animate__backInUp');
//         }
//         //PARTNER
//         if ($(window).scrollTop() > $('.partner').offset().top - $(window).height() + $('.partner').height()) {
//             $('.partner').addClass('animate__slideInDown');
//         }

//     });
// })


// CÁCH 1 KÉO XUỐNG HIỆU ỨNG CHẠY RA BÌNH THƯỜNG
// $(function() {

//     $('.about_content').addClass('animate__tada');

//     $('.about_person').addClass('animate__slideInRight');

//     $('.about_logo').addClass('animate__slideInLeft');

//     var list_element_animate = $(".animate_process");

//     $(window).scroll(function() {
//         $.each(list_element_animate, function (index_item, item_animate) { 
//             if ($(window).scrollTop() > $(item_animate).offset().top - $(window).height() + $(item_animate).height() - 100 &&) {
//                 $(item_animate).addClass('animate__fadeInUp');
//                 $(item_animate).css({opacity : 1});
//             }

//         });
//     })
// })


//CÁCH 2 KHI KÉO NGƯỢC CHUỘT HIỆN LẠI HIỆU ỨNG
// $(function() {

//     $('.about_content').addClass('animate__tada');

//     $('.about_person').addClass('animate__slideInRight');

//     $('.about_logo').addClass('animate__slideInLeft');

//     var list_element_animate = $(".animate_process");

//     $(window).scroll(function() {
//         $.each(list_element_animate, function (index_item, item_animate) { 
//             if ($(window).scrollTop() > $(item_animate).offset().top - $(window).height() + $(item_animate).height() - 100 &&
//                 $(window).scrollTop() <= ($(item_animate).offset().top + $(item_animate).height()) 
//             ) {
//                 $(item_animate).addClass('animate__fadeInUp');
//                 $(item_animate).css({opacity : 1}); 
//             }
//              else {
//                 $(item_animate).removeClass('animate__fadeInUp');
//                 $(item_animate).css({opacity : 0}); 
//              }  
//         });
//     })
// })

// CÁCH 3 ADD THÊM HIỆU ỨNG KHÁC data-effect

$(function() {
    $('.flash').addClass('animate__slideInLeft');


    $('.about_content').addClass('animate__tada');

    $('.about_person').addClass('animate__slideInRight');

    $('.about_logo').addClass('animate__slideInLeft');

    var list_element_animate = $(".animate_process");

    $(window).scroll(function() {
        $.each(list_element_animate, function (index_item, item_animate) { 

            var item_data_effect = $(item_animate).attr('data-effect');
            if (typeof item_data_effect == 'undeifined') {
                item_data_effect = '';
            }

            if ($(window).scrollTop() > $(item_animate).offset().top - $(window).height() + $(item_animate).height() - 100 &&
                $(window).scrollTop() <= ($(item_animate).offset().top + $(item_animate).height()) 
            ) {
                if (item_data_effect) {
                    $(item_animate).addClass(item_data_effect);
                } else {
                    $(item_animate).addClass('animate__fadeInUp');
                }

                $(item_animate).css({ opacity: 1 });
                return;
            } else {
                if (item_data_effect) {
                    $(item_animate).removeClass(item_data_effect);
                } else {
                    $(item_animate).removeClass('animate__fadeInUp');
                }

                $(item_animate).css({ opacity: 0 });
            }

        });
    })
})

var deadline = new Date("9/31/2021 23:59:59");
var x = setInterval(function () {
    var current = new Date();
    var t = deadline.getTime() - current.getTime();
    khoang_cach_thoi_gian = Math.round(t / 1000);
    var days = Math.ceil((khoang_cach_thoi_gian / 86400));
    var hours = Math.ceil((khoang_cach_thoi_gian / 3600)) % 24;
    var minutes = Math.ceil((khoang_cach_thoi_gian / 60)) % 60;
    var seconds = Math.ceil(khoang_cach_thoi_gian % 60);
    document.getElementById("day").innerHTML = days;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minutes;
    document.getElementById("second").innerHTML = seconds;
    if (t < 0) {
        clearInterval(x);
        document.getElementById("time-up").innerHTML = "TIME UP";
        document.getElementById("day").innerHTML = '0';
        document.getElementById("hour").innerHTML = '0';
        document.getElementById("minute").innerHTML = '0';
        document.getElementById("second").innerHTML = '0';
    }


}, 1000)