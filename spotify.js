console.log("welcome to spotify")

var i=0;
let pauseplay=document.getElementById("play-pause");
let forward=document.getElementById("nextsong");
let backward=document.getElementById("prvsong");
let progressbar=document.getElementById("slider");
let audioelement=new Audio('songfile/Charlie Puth - Attention [Official Video].mp3');
let songlist=[
    {title:"attention" ,path:"songfile/Charlie Puth - Attention [Official Video].mp3"},
    {title:"I Ain't Worried" ,path:"songfile/aintworried.mp3"},
    {title:"At you worst" ,path:"songfile/Calum Scott - At Your Worst (Official Video).mp3"},
    {title:"Night Changes" ,path:"songfile/One Direction - Night Changes.mp3"},
    {title:"takeaway" ,path:"songfile/The Chainsmokers, ILLENIUM - Takeaway (Official Video) ft. Lennon Stella.mp3"},
    {title:"fireproof" ,path:"songfile/One Direction - Fireproof (Audio).mp3"},
    {title:"the nights" ,path:"songfile/Avicii - The Nights (Lyric Video).mp3"},
    {title:"i wanna be yours" ,path:"songfile/I Wanna Be Yours.mp3"},
]




pauseplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        pauseplay.classList.remove("fa-play");
        pauseplay.classList.add("fa-pause");
    }
    else{
        audioelement.pause();
        pauseplay.classList.remove("fa-pause");
        pauseplay.classList.add("fa-play");
    }
})

//progress bar ke event likhne hai

progressbar.addEventListener('change',()=>{
    // console.log(progressbar.value);
    audioelement.currentTime = progressbar.value * audioelement.duration/250;
    
})

//progress bar apne aap aage ho jab gaane ka time badhe
audioelement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioelement.currentTime/audioelement.duration)* 250); 
    progressbar.value = progress;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        i=parseInt(e.target.id);
        // console.log(i);
        audioelement.src=songlist[i].path;
        // console.log(audioelement.src);
        audioelement.currentTime=0;
        audioelement.play();
        pauseplay.classList.remove("fa-play");
        pauseplay.classList.add("fa-pause");

    })
})

forward.addEventListener('click',()=>{
    if(i==songlist.length-1){
        i=0;
    }
    else{
        i++;
    }
    audioelement.src=songlist[i].path;
    // console.log(audioelement.src);
    audioelement.currentTime=0;
    audioelement.play();
    
})

backward.addEventListener('click',()=>{
    if(i==0){
        i=songlist.length-1;
    }
    else{
        i--;
    }
    audioelement.src=songlist[i].path;
    // console.log(audioelement.src);
    audioelement.currentTime=0;
    audioelement.play();
    
})

//auto next song
audioelement.addEventListener('ended', function() {
    // Your provided code here
    if(i==songlist.length-1){
        i=0;
    }
    else{
        i++;
    }
    audioelement.src=songlist[i].path;
    // console.log(audioelement.src);
    audioelement.currentTime=0;
    audioelement.play();
});
