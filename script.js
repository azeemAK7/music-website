let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.querySelector("#masterPlay");
let myProgressbar = document.querySelector("#myProgressbar")
let gif = document.querySelector("#gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let bottom = document.getElementById("bottomText");


let songs = [
    {songName:"Chaleya",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Zinda Banda",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Bande Hain Hum Uske",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Sooraj Dooba Hain Yaaron",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"zaalima",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Bandeya Rey Bandeya",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Malang",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Kesariya",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Pasoori ",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"ilahi",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
]


masterPlay.addEventListener('click', function(){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");
        gif.style.opacity = "1";

    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause");
        masterPlay.classList.add("fa-play");
        gif.style.opacity = "0";
    }
})

audioElement.addEventListener("timeupdate",function(){
    progress = parseFloat(audioElement.currentTime/audioElement.duration)*100;
    myProgressbar.value = progress;
})

myProgressbar.addEventListener("change",function(){
    audioElement.currentTime = myProgressbar.value * audioElement.duration / 100 ;
})

songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
            element.classList.add("fa-play");
            element.classList.remove("fa-pause");
    })
}
const makeAllShadowless = ()=>{
    Array.from(document.getElementsByClassName("songItem")).forEach((element)=>{
            element.classList.remove("shadow");
    })
}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click", ()=>{
        makeAllPlay();
        makeAllShadowless();
        const songIndex = element.id;
        audioElement.src = "songs/"+songIndex+".mp3";
        audioElement.currentTime = 0;
        bottom.innerText = songs[songIndex-1].songName;
        var songshadow = document.getElementsByClassName("songItem")[songIndex-1];
        songshadow.classList.add("shadow");
        if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
            element.classList.remove("fa-play");
            element.classList.add("fa-pause");
            masterPlay.classList.remove("fa-play");
            masterPlay.classList.add("fa-pause");
            gif.style.opacity = "1";
        
        }else{
            audioElement.pause();
            element.classList.remove("fa-pause");
            element.classList.add("fa-play");
            masterPlay.classList.remove("fa-pause");
            masterPlay.classList.add("fa-play");
            gif.style.opacity = "0";
        }
    })
})

document.getElementById("next").addEventListener("click", ()=>{
    if(songIndex >= 10){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
    makeAllPlay();
    audioElement.src = "songs/"+songIndex+".mp3";
    audioElement.currentTime = 0;
    audioElement.play();
    bottom.innerText = songs[songIndex-1].songName;
    var songItems = document.getElementsByClassName("songItemPlay")[songIndex-1];
    makeAllShadowless();
    var songshadow = document.getElementsByClassName("songItem")[songIndex-1];
    songshadow.classList.add("shadow");
    songItems.classList.remove("fa-play");
    songItems.classList.add("fa-pause");
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
})

document.getElementById("prev").addEventListener("click", ()=>{
    if(songIndex <= 1){
        songIndex = 10;
    }
    else{
        songIndex -= 1;
    }
    makeAllPlay();
    audioElement.src = "songs/"+songIndex+".mp3";
    audioElement.currentTime = 0;
    audioElement.play();
    bottom.innerText = songs[songIndex-1].songName;
    var songItems = document.getElementsByClassName("songItemPlay")[songIndex-1];
    makeAllShadowless();
    var songshadow = document.getElementsByClassName("songItem")[songIndex-1];
    songshadow.classList.add("shadow");
    songItems.classList.remove("fa-play");
    songItems.classList.add("fa-pause");
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
})


