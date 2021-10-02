const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const player = $('.player')
const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb img')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const currentTime = $('.current-time')
const duration = $('.duration')
const volIcon = $('.btn-volume')
const volBox = $('.volume-box')
const volumeRange = $('.volume-range')
const volumeDown = $('.volume-down')
const volumeUp = $('.volume-up')
const volMuted = $('.btn-mute')

const playlist = $('.playlist')

const app = {
    currentIndex: 0,            //lay ra chi muc dau tien cua mang (bai hat dau tien)
    isPlaying : false,           // mac dinh de kich nguoc lai nhac se ngung
    isRandom : false,             // mac dinh random bang false
    isRepeat : false,
    songs: [
        {
            name: 'Mỹ Tâm',
            singer: 'Người Hãy Quên Em Đi',
            path: 'mp3/13 Track 13.mp3',
            image: 'image/my-tam.png'
        },
        {
            name: 'Mỹ Tâm',
            singer: 'Nếu Anh Đi',
            path: 'mp3/10 Track 10.mp3',
            image: 'image/my-tam.png'
        },
        {
            name: 'Mỹ Tâm',
            singer: 'Chuyện Buồn',
            path: 'mp3/11 Track 11.mp3',
            image: 'image/my-tam.png'
        },
        {
            name: 'Mỹ Tâm',
            singer: 'Mong Cho Anh',
            path: 'mp3/06 Track 6.mp3',
            image: 'image/my-tam.png'
        },
        {
            name: 'Mỹ Tâm',
            singer: 'Đừng Hỏi Em',
            path: 'mp3/01 Track 1.mp3',
            image: 'image/my-tam.png'
        },
        {
            name: 'Mỹ Tâm',
            singer: 'Cô Ấy Là Ai?',
            path: 'mp3/02 Track 2.mp3',
            image: 'image/my-tam.png'
        },
        {
            name: 'Mỹ Tâm',
            singer: 'Anh Chưa Từng Biết',
            path: 'mp3/03 Track 3.mp3',
            image: 'image/my-tam.png'
        },
        {
            name: 'Mỹ Tâm',
            singer: 'Nếu Có Buông Tay',
            path: 'mp3/04 Track 4.mp3',
            image: 'image/my-tam.png'
        },
        {
            name: 'Mỹ Tâm',
            singer: 'Đau Thế Mà',
            path: 'mp3/05 Track 5.mp3',
            image: 'image/my-tam.png'
        },
        {
            name: 'Mỹ Tâm',
            singer: 'Lạnh Lùng',
            path: 'mp3/07 Track 7.mp3',
            image: 'image/my-tam.png'
        },
        {
            name: 'Mỹ Tâm',
            singer: 'Muộn Màng Là Từ Lúc',
            path: 'mp3/08 Track 8.mp3',
            image: 'image/my-tam.png'
        },
        {
            name: 'Mỹ Tâm',
            singer: 'Biết Khi Nào Gặp Lại',
            path: 'mp3/09 Track 9.mp3',
            image: 'image/my-tam.png'
        },
    ],

    render: function () {                               //render danh sach bai hat
        // console.log(123)
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}"> 
                    <div class="thumb">
                        <img src="${song.image}">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
            </div>
                    `
        });
        // $('.playlist').innerHTML = htmls.join('');
        playlist.innerHTML = htmls.join('');
    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get : function() {
                return this.songs[this.currentIndex]
            }
        })
    },


    handleEvents: function() {                         //Hieu ung khi scroll nhac bien mat
        // const cd = $('.cd')
        const _this = this                             //lay thang this o ngoai dat trong handle nay
        const cdWidth = cd.offsetWidth
        // Xử lý phóng to / thu nhỏ CD
        document.onscroll = function() {
            // console.log(window.scrollY)

            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = cdWidth - scrollTop

            console.log(newCdWidth)
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
            cd.style.opacity = newCdWidth / cdWidth                           //lam mo khi lan
        }
        
        
        // Xử lý CD quay /dừng
        const cdThumbAnimate = cdThumb.animate([
            {transform : 'rotate(360deg)'}
        ], {
            duration : 10000,
            iterations : Infinity   
        })
        cdThumbAnimate.pause()          //lap doi tuong nay mac dinh pause ko chay cd nua


        // Xử lý khi Click Play
        playBtn.onclick = function() {
            if(_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }

            // Suy nghĩ logic
            // if(_this.isPlaying) {
            //     _this.isPlaying = false
            //     audio.pause();
            //     player.classList.remove('playing')
            // } else {
            //     _this.isPlaying = true
            //     audio.play();
            //     player.classList.add('playing')
            // }
        }

        console.log(cdThumbAnimate)    //xem thuoc tinh play
        // Khi song được play
        audio.onplay = function() {
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
        }

        // Khi song được pause
        audio.onpause = function() {
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
        }

        //Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            // console.log(audio.currentTime)
            if(audio.duration) {
               const progressPercent = Math.floor(audio.currentTime / audio.duration * 100 )
               progress.value = progressPercent
            }
        }

        // Xử lý khi tua Song
        progress.onchange = function(e) {
            // console.log(audio.duration / 100 * e.target.value )
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime

        }

        // Khi next song
        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.nextSong();
            }
            // _this.nextSong();
            audio.play();          //tự động play khi next sang bài khác
            _this.render()             //Active song khi den bai hat 103
            _this.scrollToActiveSong()
        }
        // Khi prev song
        prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandomSong()
            } else {
                _this.prevSong();
            }
            // _this.prevSong();
            audio.play();          //tự động play khi next sang bài khác
            _this.render()          //Active song khi den bai hat 103
            _this.scrollToActiveSong()
        }

        //Xử lý Bật/tắt Khi Random song (API toggle của thằng classlist)
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom                     //su dung toggle sẽ làm chức năng mới này khi kích vào và ngược lại
            randomBtn.classList.toggle('active', _this.isRandom )    //giá trị boolean, nếu là true add class, false remove class
        }

        //Xử lý lặp lại một song
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat )
        }

        //Xử lý nextsong khi audio ended
        audio.onended = function () {
            // console.log(123)
            if(_this.isRepeat) {
                audio.play()
            } else {
                nextBtn.click()
            }
            // nextBtn.click()
        }

        //Lắng nghe hành vi click và playlist
        playlist.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)')
            // console.log(e.target)

            
            if (songNode || e.target.closest('.option')) {
                // console.log(closest)
                //Xử lý khi click vào Song
                if (songNode) {
                   _this.currentIndex = Number(songNode.dataset.index)
                   _this.loadCurrentSong()
                   _this.render()
                   audio.play()
                }
            }
        }

        // TIME & DURATION SONG
        audio.onloadeddata = function () {
            progress.max = audio.duration
            var ds = parseInt(audio.duration % 60)
            var dm = parseInt((audio.duration / 60) % 60)
            duration.innerHTML =  dm + ':' +  ds
        }

        audio.ontimeupdate = function () { progress.value = audio.currentTime }
        handleSeekBar = function () { audio.currentTime = progress.value }
        audio.addEventListener('timeupdate', function () {
        var cs = parseInt(audio.currentTime % 60)
        var cm = parseInt((audio.currentTime / 60) % 60)
        currentTime.innerHTML =  cm + ':' +  cs
        }, false)

        //VOLUME
        volIcon.onclick = function() {
            volIcon.classList.toggle('active')
            volBox.classList.toggle('active')
        }

        volumeDown.addEventListener('click', handleVolumeDown);
        volumeUp.addEventListener('click', handleVolumeUp);

        function handleVolumeDown() {                    // phai co method oninput ben html moi keo duoc progess volume
        volumeRange.value = Number(volumeRange.value) - 20
        audio.volume = volumeRange.value / 100
        // audio.muted = true
        }
        function handleVolumeUp() {
        volumeRange.value = Number(volumeRange.value) + 20
        audio.volume = volumeRange.value / 100
        // audio.muted = false
        }

        //Muted
        volMuted.onclick = function() {
            // _this.isMuted = !_this.isMuted 
            volMuted.classList.toggle('active')
        }
        volMuted.addEventListener('click', handleMute);
        function handleMute() {
           if(audio.muted == false){
            audio.muted = true
           }else {
            audio.muted = false
           }
        }
    },

         // scroll khi click bai hat
    scrollToActiveSong : function() {                   //https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior : 'smooth',
                block : 'center',
            });
        }, 300);
    },
      //load hinh anh , cd, hinh ca si
    loadCurrentSong: function() {
        // const heading = $('header h2')
        // const cdThumb = $('.cd-thumb')
        // const audio = $('#audio')
        
        heading.textContent = this.currentSong.singer
        // cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        cdThumb.src = `${this.currentSong.image}`   
        audio.src = this.currentSong.path

        console.log(heading,cdThumb,audio)
    },

    // nextsong
    nextSong: function () {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
             this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    // prevsong
    prevSong: function () {
        this.currentIndex--
        if (this.currentIndex < 0) {
             this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },

    //Random song
    playRandomSong: function () {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length )
        } while (newIndex === this.currentIndex)
        // console.log(newIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },

    

    start: function () {
        //Định nghĩa các thuộc tính cho Object
        this.defineProperties();

        //Lắng nghe/ Xử lý sự kiện (DOM Events)
        this.handleEvents();

        //Tải bài hát thông tin đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()

        //Render playlist 
        this.render();
    }
}
app.start();