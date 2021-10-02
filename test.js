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



// player
var music = document.querySelector('.music-element')
var playBtn = document.querySelector('.play')
var seekbar = document.querySelector('.seekbar')
var currentTime = document.querySelector('.current-time')
var duration = document.querySelector('.duration')

function handlePlay() {
    if (music.paused) {
        music.play();
        playBtn.className = 'pause'
        playBtn.innerHTML = '<i class="material-icons">pause</i>'
    } else {
        music.pause();
        playBtn.className = 'play'
        playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
    }
    music.addEventListener('ended', function () {
        playBtn.className = 'play'
        playBtn.innerHTML = '<i class="material-icons">play_arrow</i>'
        music.currentTime = 0
    });
}

music.onloadeddata = function () {
    seekbar.max = music.duration
    var ds = parseInt(music.duration % 60)
    var dm = parseInt((music.duration / 60) % 60)
    duration.innerHTML = dm + ':' + ds
}
music.ontimeupdate = function () { seekbar.value = music.currentTime }
handleSeekBar = function () { music.currentTime = seekbar.value }
music.addEventListener('timeupdate', function () {
    var cs = parseInt(music.currentTime % 60)
    var cm = parseInt((music.currentTime / 60) % 60)
    currentTime.innerHTML = cm + ':' + cs
}, false)


// like
var favIcon = document.querySelector('.favorite')
function handleFavorite() {
    favIcon.classList.toggle('active');
}


// repeat
var repIcon = document.querySelector('.repeat')
function handleRepeat() {
    if (music.loop == true) {
        music.loop = false
        repIcon.classList.toggle('active')
    }
    else {
        music.loop = true
        repIcon.classList.toggle('active')
    }
}

// volume
var volIcon = document.querySelector('.volume')
var volBox = document.querySelector('.volume-box')
var volumeRange = document.querySelector('.volume-range')
var volumeDown = document.querySelector('.volume-down')
var volumeUp = document.querySelector('.volume-up')

function handleVolume() {
    volIcon.classList.toggle('active')
    volBox.classList.toggle('active')
}

volumeDown.addEventListener('click', handleVolumeDown);
volumeUp.addEventListener('click', handleVolumeUp);

function handleVolumeDown() {
    volumeRange.value = Number(volumeRange.value) - 20
    music.volume = volumeRange.value / 100
}
function handleVolumeUp() {
    volumeRange.value = Number(volumeRange.value) + 20
    music.volume = volumeRange.value / 100
}