// var ngay_nhan_thuong = new Date('8/31/2021 23:59:59');
// var deadline = new Date("august 31, 2021 23:59:59").getTime();             
// var x = setInterval(function() {
//    var currentTime = new Date().getTime();                
//    var t = deadline - currentTime; 
//    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
//    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
//    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
//    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
//    document.getElementById("day").innerHTML =days ; 
//    document.getElementById("hour").innerHTML =hours; 
//    document.getElementById("minute").innerHTML = minutes; 
//    document.getElementById("second").innerHTML =seconds; 
//    if (t < 0) {
//       clearInterval(x); 
//       document.getElementById("time-up").innerHTML = "TIME UP"; 
//       document.getElementById("day").innerHTML ='0'; 
//       document.getElementById("hour").innerHTML ='0'; 
//       document.getElementById("minute").innerHTML ='0' ; 
//       document.getElementById("second").innerHTML = '0'; 
//    } 
// }, 1000);  

var deadline = new Date("8/31/2021 23:59:59");
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


