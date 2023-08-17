

// Make A Songs Swiper

let pop_song_left = document.getElementById('pop_songs_left');
let pop_song_right = document.getElementById('pop_songs_right');
let popSong = document.getElementsByClassName('pop-songs')[0];

pop_song_right.addEventListener('click', ()=>{
    popSong.scrollLeft += 330;
});
pop_song_left.addEventListener('click', ()=>{
    popSong.scrollLeft -= 330;
});



let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 350;
});
pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 360;
});


// Make A Music Player

const music = new Audio('music/ 1.mp3');
music.play();
const songs = [
    {
        id: 1,
        songName: `Aladdin 2019 Dancing with Jasmine<br>
        <div class="subtitle">From Aladin 2019</div>`,
        poster: "img/poster 1.jpg"
    },
    {
        id: 2,
        songName: `Baarish Ki Jaaye - B Praak Ft Nawazuddin Siddiqui & Sunanda Sharma - Jaani - Arvindr Khaira - DM<br>
        <div class="subtitle">B-Praak</div>`,
        poster: "img/poster 2.jpg"
    },
    {
        id: 3,
        songName: `Bareilly Ke Bazaar - Chatrapathi - Sreenivas B, Nushrratt B - Tanishk B - Sunidhi Chauhan, Dev Negi <br>
        <div class="subtitle">Tanishk B - Sunidhi Chauhan</div>`,
        poster: "img/poster 3.jpg"
    },
    {
        id: 4,
        songName: `Besharam Bewaffa Song- Divya K, Gautam G, Siddarth G - B Praak, Jaani -Radhika, Vinay- Bhushan Kumar <br>
        <div class="subtitle">B-Praak </div>`,
        poster: "img/poster 4.jpg"
    },
    {
        id: 5,
        songName: `BURA HAAL (Official Video)Carry On Jatta 3 - Gippy Grewal - Binnu Dhillon - Atif Aslam - Sonam Bajwa <br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "img/poster 5.jpg"
    },
    {
        id: 6,
        songName: `Chhalaang-Deedar De (Full Song) Rajkummar, Nushrratt-Vishal & Shekhar, Panchhi Jalonvi, Asees K, Dev <br>
        <div class="subtitle">Panchhi Jalonvi</div>`,
        poster: "img/poster 6.jpg"
    },
    {
        id: 7,
        songName: `Chhor Denge- Parampara Tandon - Sachet-Parampara - Nora Fatehi, Ehan Bhat - Arvindr K, Bhushan Kumar <br>
        <div class="subtitle">Arvindr K</div>`,
        poster: "img/poster 7.jpg"
    },
    {
        id: 8,
        songName: `Chhote Chhote Peg (Video) - Yo Yo Honey Singh - Neha Kakkar - Navraj Hans - Sonu Ke Titu Ki Sweety <br>
        <div class="subtitle">Yo Yo Honey Singh - Neha Kakkar</div>`,
        poster: "img/poster 8.jpg"
    },
    {
        id: 9,
        songName: `Deewaane (Selfiee) - Akshay K - Jacqueline F - Emraan H - Aditya Y - Stebin B - Tanishk B - Kunaal V <br>
        <div class="subtitle">Aditya Y</div>`,
        poster: "img/poster 9.jpg"
    },
    {
        id: 10,
        songName: `Dhokebaaz (Video) Jaani - Afsana Khan - Vivek Anand Oberoi, Tridha Choudhury - VYRL Originals <br>
        <div class="subtitle">Afsana Khan</div>`,
        poster: "img/poster 10.jpg"
    },
    {
        id: 11,
        songName: `Dotara (Video) Jubin Nautiyal, Mouni Roy, Payal Dev - Darsh Kothari,Vayu, BLM Studios- Bhushan Kumar <br>
        <div class="subtitle">Jubin Nautiyal- Payal Dev</div>`,
        poster: "img/poster 11.jpg"
    },
    {
        id: 12,
        songName: `Fakeeran (Video) Mouni Roy - Sagar Midda - Tanishk Bagchi - Zahrah S Khan - Arvindr K - Bhushan K <br>
        <div class="subtitle">Zahrah S Khan - Arvindr K</div>`,
        poster: "img/poster 12.jpg"
    },
    {
        id: 13,
        songName: `Gali Gali Full Video Song - KGF - Neha Kakkar - Mouni Roy - Tanishk Bagchi - Rashmi Virag -T-SERIES <br>
        <div class="subtitle">Neha Kakkar</div>`,
        poster: "img/poster 13.jpg"
    },
    {
        id: 14,
        songName: `Haiya Ho Full Video - Marjaavaan - Sidharth M, Rakul Preet - Tulsi Kumar, Jubin Nautiyal ,Tanishk B <br>
        <div class="subtitle">Tulsi Kumar, Jubin Nautiyal ,Tanishk B</div>`,
        poster: "img/poster 14.jpg"
    },
    {
        id: 15,
        songName: `Ik Mili Mainu Apsraa - BPraak ft. Asees Kaur, Sandeepa Dhar - Jaani - Arvindr Khaira <br>
        <div class="subtitle">B-Praak</div>`,
        poster: "img/poster 15.jpg"
    },
    {
        id: 16,
        songName: `Jodaa (Official Video) Jatinder Shah, Afsana Khan - Mouni Roy, Aly Goni - Maninder Kailey <br>
        <div class="subtitle">Afsana Khan</div>`,
        poster: "img/poster 16.jpg"
    },
    {
        id: 17,
        songName: `Kya Loge Tum - Akshay Kumar - Amyra Dastur - BPraak - Jaani - Arvindr Khaira - Zohrajabeen <br>
        <div class="subtitle">B-Praak</div>`,
        poster: "img/poster 17.jpg"
    },
    {
        id: 18,
        songName: `Kyaa Baat Haii 2.0 - Govinda Naam Mera - Vicky, Kiara - Harrdy, Tanishk, Nikhita, Jaani, B Praak <br>
        <div class="subtitle">Harrdy Sandhu</div>`,
        poster: "img/poster 18.jpg"
    },
    {
        id: 19,
        songName: `Nainowale Ne Full Video Song - Padmaavat - Deepika Padukone - Shahid Kapoor - Ranveer Singh <br>
        <div class="subtitle">Neeti Mohan</div>`,
        poster: "img/poster 19.jpg"
    },
    {
        id: 20,
        songName: `Nora Fatehi (Ft. Zack Knight) - Dirty Little Secret (Lyrics) <br>
        <div class="subtitle">Zack Knight</div>`,
        poster: "img/poster 20.jpg"
    },
    {
        id: 21,
        songName: `Phir Aur Kya Chahiye- Zara Hatke Zara Bachke- Vicky K, Sara Ali K, Arijit Singh,Sachin-Jigar,Amitabh <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/poster 23.jpg"
    },
    {
        id: 22,
        songName: `Saiyaan Ji ► Yo Yo Honey Singh, Neha Kakkar-Nushrratt Bharuccha-  Lil G, Hommie D- Mihir G-Bhushan K <br>
        <div class="subtitle">Yo Yo Honey Singh, Neha Kakkar</div>`,
        poster: "img/poster 21.jpg"
    },
    {
        id: 23,
        songName: `Tere Vaaste - Zara Hatke Zara Bachke - Vicky Kaushal, Sara Ali Khan, Varun J, Sachin-Jigar,Amitabh B<br>
        <div class="subtitle">Varun J</div>`,
        poster: "img/poster 22.jpg"
    },
    {
        id: 24,
        songName: `Vaaste Song- Dhvani Bhanushali, Tanishk Bagchi - Nikhil D - Bhushan Kumar - Radhika Rao, Vinay Sapru <br>
        <div class="subtitle">Dhvani Bhanushali</div>`,
        poster: "img/poster 24.jpg"
    },
    {
        id: 25,
        songName: `Yaar Ka Sataya Hua Hai - B Praak - Nawazuddin Siddiqui - Shehnaaz Gill - Jaani - Arvindr Khaira <br>
        <div class="subtitle">B-Praak</div>`,
        poster: "img/poster 25.jpg"
    },
    {
        id: 26,
        songName: `Zihaal e Miskin (Video) Javed-Mohsin - Vishal Mishra, Shreya Ghoshal - Rohit Z, Nimrit A - Kunaal V <br>
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster: "img/poster 26.jpg"
    },
    {
        id: 27,
        songName: `warriyo mortals <br>
        <div class="subtitle"> Laura Brehm and Warriyo</div>`,
        poster: "img/poster 27.jpeg"
    },
    {
        id: 28,
        songName: `Saiyaan Ji Remix ► Yo Yo Honey Singh, Neha Kakkar-Nushrratt Bharuccha-  Lil G, Hommie D- Mihir G-Bhushan K <br>
        <div class="subtitle">Yo Yo Honey Singh, Neha Kakkar</div>`,
        poster: "img/poster 21.jpg"
    },

];

Array.from(document.getElementsByClassName('songItems')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

// Search Data Start

let search_result = document.getElementsByClassName('search_result')[0];
songs.forEach(element =>{
    const { id, songName, poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = '#' + id;
    card.innerHTML = `<img src="${poster}">
    <div class="content">
        ${songName}
    </div>`;
    search_result.appendChild(card);
});
let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');

    for (let i = 0; i < items.length; i++) {
        let as = items[i].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerText;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[i].style.display = "flex";
        }
        else{
            items[i].style.display = "none";
        }
        if (input.value == 0) {
            search_result.style.display = "none";
        } else {
            search_result.style.display = "flex";
        }
    }
})
// Search Data End


// Make A Song Player

let songPlay = document.getElementById('songPlay');
let wave = document.getElementById('wave');
// let playBtn = document.getElementsByClassName('bi-play-fill');
// let pauseBtn = document.getElementsByClassName('bi-pause-fill');
songPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add('active1');
        songPlay.classList.remove('bi-play-fill');
        songPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        wave.classList.remove('active1');
        songPlay.classList.add('bi-play-fill');
        songPlay.classList.remove('bi-pause-fill');
    }
});


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
        e.classList.add('bi-play-circle-fill');
        e.classList.remove('bi-pause-circle-fill');
    });
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItems')).forEach((el)=>{
        el.style.background = 'rgba(105, 105, 105, .0)';
    })
}


let index = 0;
let posterSongPlayer = document.getElementById('poster-song-player');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
let playlistPlay = document.getElementsByClassName('playlistPlay');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) =>{
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        music.src = `music/${index}.mp3`;
        posterSongPlayer.src = `img/${index}.jpg`;
        music.play();
        songPlay.classList.remove('bi-play-fill');
        songPlay.classList.add('bi-pause-fill');
        download_music.href = `music/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName, poster} = elss;
            title.innerHTML = songName;
            posterSongPlayer.src = poster;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItems'))[index - 1].style.background = "rgba(105, 105, 105, .4)";
        makeAllPlays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
    });
});


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot');

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime;
    let musi_dur = music.duration;
    // console.log(musi_dur);

    let min1 = Math.floor(musi_dur / 60);
    let sec1 = Math.floor(musi_dur % 60);


    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;
    
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}: ${sec2}`;


    let progressBar = parseInt((music_curr / musi_dur) * 100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

// Make Volume seekbar

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol-bar')[0];


// TODO | TODO | TODO | TODO
// TODO Add Volume Icon using Bootstrap


vol.addEventListener('change', ()=>{
    if (vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value >0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if(index <= 0){
        index = Array.from(document.getElementsByClassName('songItems')).length;
    }
    music.src = `music/${index}.mp3`;
    posterSongPlayer.src = `img/${index}.jpg`;
    music.play();
    songPlay.classList.remove('bi-play-circle-fill');
    songPlay.classList.add('bi-pause-circle-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(els =>{
        let {songName, poster} = els;
        title.innerHTML = songName;
        posterSongPlayer.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItems'))[index - 1].style.background = "rgba(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-pause-circle-fill');
    el.target.classList.add('bi-play-circle-fill');
    wave.classList.add('active1');
});


next.addEventListener('click', ()=>{
    index++;
    if(index > Array.from(document.getElementsByClassName('songItems')).length){
        index = 1;
    }
    music.src = `music/${index}.mp3`;
    posterSongPlayer.src = `img/${index}.jpg`;
    music.play();
    songPlay.classList.remove('bi-play-circle-fill');
    songPlay.classList.add('bi-pause-circle-fill');

    let songTitles = songs.filter((els) =>{
        return els.id == index;
    });

    songTitles.forEach(els =>{
        let {songName, poster} = els;
        title.innerHTML = songName;
        posterSongPlayer.src = poster;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItems'))[index - 1].style.background = "rgba(105, 105, 105, .1)";
    makeAllPlays();
    el.target.classList.remove('bi-pause-circle-fill');
    el.target.classList.add('bi-play-circle-fill');
    wave.classList.add('active1');

});




let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;
    switch (a) {
        case "next":
            shuffle.classList.add('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case "repeat":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
        
        case "random":
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});

const next_music = () =>{
        // index ++;
        if (index == songs.length) {
            index = 1;
        } else {
            index ++;
        }
        music.src = `music/${index}.mp3`;
        posterSongPlayer.src = `img/${index}.jpg`;
        music.play();
        songPlay.classList.remove('bi-play-fill');
        songPlay.classList.add('bi-pause-fill');
        download_music.href = `music/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName, poster} = elss;
            title.innerHTML = songName;
            posterSongPlayer.src = poster;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItems'))[index - 1].style.background = "rgba(105, 105, 105, .4)";
        makeAllPlays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
}
const repeat_music = () =>{
        index;
        music.src = `music/${index}.mp3`;
        posterSongPlayer.src = `img/${index}.jpg`;
        music.play();
        songPlay.classList.remove('bi-play-fill');
        songPlay.classList.add('bi-pause-fill');
        download_music.href = `music/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName, poster} = elss;
            title.innerHTML = songName;
            posterSongPlayer.src = poster;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItems'))[index - 1].style.background = "rgba(105, 105, 105, .4)";
        makeAllPlays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
}
const random_music = () =>{
        if (index == songs.length) {
            index = 1;
        } else {
            index = Math.floor((Math.random() * songs.length) + 1);
        }
        music.src = `music/${index}.mp3`;
        posterSongPlayer.src = `img/${index}.jpg`;
        music.play();
        songPlay.classList.remove('bi-play-fill');
        songPlay.classList.add('bi-pause-fill');
        download_music.href = `music/${index}.mp3`;

        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName, poster} = elss;
            title.innerHTML = songName;
            posterSongPlayer.src = poster;
            download_music.setAttribute('download', songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItems'))[index - 1].style.background = "rgba(105, 105, 105, .4)";
        makeAllPlays();
        el.target.classList.add('bi-pause-circle-fill');
        el.target.classList.remove('bi-play-circle-fill');
        wave.classList.add('active1');
}


music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;
    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
                
    } 
});