// var chuoi = document.querySelector("#p1");
// var content = chuoi.innerHTML
// alert(content);

// var str = "FoodWagon là một chuỗi hệ thống nhỏ gồm các đầu bếp chuyên nghiệp chuẩn bị các bữa ăn tươi ngon được nấu tại các nhà hàng nổi tiếng.";
         
//          document.write(str.substring(0,25) +   '......');
//          document.write("<br />(0,10): "   + str.substring(0, 10));
//          document.write("<br />(5): "      + str.substring(5));


// // khai báo hàm
// function kiem_tra_nam_nhuan(nam)
// {
//     // nếu năm chia hết cho 100
//     // thì kiểm tra nó có chia hết cho 400 hay không
//     if (nam % 100 == 0)
//     {
//         // nêu chia hết cho 400 thì là năm nhuận
//         if (nam % 400 == 0){
//             alert(nam + ' là năm nhuận');
//         }
//         else { // ngược lại không phải năm nhuận
//             alert(nam + ' không phải năm nhuận');
//         }
//     }
//     else if (nam % 4 == 0){ // trường hợp chia hết cho 4 thì là năm nhuận
//         alert(nam + ' là năm nhuận');
//     }
//     else { // cuối cùng trường hợp không phải năm nhuận
//         alert(nam + 'không phải là năm nhuận');
//     }
// }
// // sử dụng
// kiem_tra_nam_nhuan(4);     

// function xu_ly_chuoi() {
//     var str = "FoodWagon là một chuỗi hệ thống nhỏ gồm các đầu bếp chuyên nghiệp chuẩn bị các bữa ăn tươi ngon được nấu tại các nhà hàng nổi tiếng.";
  
//     if (str <= 100) {
//         document.write(str.substring(0,25) +   '......');
//     } else {
//         document.write(str.substring(0,50) +   '......');
//     } 

// }
// xu_ly_chuoi()


// var thong_bao = document.getElementById('click');
// function xu_ly() {
//     alert('Hello Word')
    
// }

function xl_email() {
    var mail = document.getElementById('email').value ;
    var acong = mail.indexOf ('@') ;
    var dodai = mail.length-1;
    var daucham = mail.lastIndexOf ('.');
    var daucach = mail.indexOf (' ');
    if((dodai <=5) || (acong < 1) || (daucham <= acong+1) || (daucach !=-1)) {
        alert ('Ban nhap email ko hop le');
        return false;
    }
    else {
        alert ('Email hop le')
        return true;
    }
        
    
    

}