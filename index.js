
//initialise variables
let songIndex = 0;
let audioElement  = new Audio("songs/1.mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressionBar');
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementsByClassName("masterSongNAme")[0];

let songs = [    //array containing js objects
    {songName:"Legion" , filePath:"songs/1.mp3",coverPath:"covers/1.jpg",duration:"3.50"},
    {songName:"Trap" , filePath:"songs/2.mp3",coverPath:"covers/2.jpg",duration:"2.33"},
    {songName:"Lowkey Pesci" , filePath:"songs/3.mp3",coverPath:"covers/3.jpg",duration:"4.33"},
    {songName:"Plugwalk" , filePath:"songs/4.mp3",coverPath:"covers/4.jpg",duration:"4.27"},
    {songName:"Shadow" , filePath:"songs/5.mp3",coverPath:"covers/5.jpg",duration:"3.28"},
    {songName:"Safety Dance" , filePath:"songs/6.mp3",coverPath:"covers/6.jpg",duration:"3.28"},
    {songName:"Back It Up" , filePath:"songs/7.mp3",coverPath:"covers/7.jpg",duration:"4.33"},
    {songName:"Woman" , filePath:"songs/8.mp3",coverPath:"covers/8.jpg",duration:"3.50"},
    {songName:"Woman 2" , filePath:"songs/9.mp3",coverPath:"covers/9.jpg",duration:"3.28"},
    {songName:"True Love" , filePath:"songs/10.mp3",coverPath:"covers/10.jpg",duration:"4.27"},



]


//MAKING EACH SONG TO BE DISPLAYED
songItems.forEach((element,i) => {
   
    element.getElementsByTagName("img")[0].setAttribute("src" , songs[i].coverPath);
    element.getElementsByClassName("songName")[0].innerHTML = "<b>"+songs[i].songName+"</b>";
    element.getElementsByTagName("span")[2].innerHTML = "<i>"+songs[i].duration+"</i>";
    
});


//ADDING EVENT LISTENER TO EVERY PLAY THAT WE CLICK ON . 
Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>{

    element.addEventListener("click",function(e)
    {
       
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = "songs/"+(songIndex+1)+".mp3";
        audioElement.currentTime = 0;
        audioElement.play();
        console.log("error");
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        masterSongName.innerHTML =  "<i>"+songs[songIndex].songName+"</i>";
        gif.style.opacity = 1;



    })


});


//IF PREVIOUS IS CLICKED ON
document.getElementById('previous').addEventListener("click",function(){
    var current = document.getElementById(songIndex.toString());
    if(songIndex===0) //update songindex
    songIndex = 9;
    else
    songIndex--;
    var previous = document.getElementById(songIndex.toString());

    audioElement.src = "songs/"+(songIndex+1)+".mp3";  //playing previous song
    audioElement.currentTime = 0;
    audioElement.play();
    console.log("error");
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    current.classList.remove("fa-circle-pause");
    current.classList.add("fa-circle-play");
    previous.classList.remove("fa-circle-play");
    previous.classList.add("fa-circle-pause");
    masterSongName.innerHTML = "<i>"+songs[songIndex].songName+"</i>";
    gif.style.opacity = 1;

    


})


//IF NEXT IS CLICKED ON
document.getElementById('next').addEventListener("click",function(){
    var current = document.getElementById(songIndex.toString());
    if(songIndex===9) //update songindex
    songIndex = 0;
    else
    songIndex++;
    var next = document.getElementById(songIndex.toString());

    audioElement.src = "songs/"+(songIndex+1)+".mp3";  //playing previous song
    audioElement.currentTime = 0;
    audioElement.play();
    console.log("error");
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    current.classList.remove("fa-circle-pause");
    current.classList.add("fa-circle-play");
    next.classList.remove("fa-circle-play");
    next.classList.add("fa-circle-pause");
    masterSongName.innerHTML =  "<i>"+songs[songIndex].songName+"</i>";
    gif.style.opacity = 1;


})



function makeAllPlays()   //make all plays converts the pause of the previous song which has 'pause' to 'plays'
{
    Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>{

        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    
    
    });

}









//handle play/pause
masterPlay.addEventListener("click",function()
{
    if(audioElement.paused || audioElement.currentTime<=0) //play
    {
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity = 1;
        
    }
    else   //pause
    {
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity = 0;

    }
})

//listen to audio event for progress bar
audioElement.addEventListener("timeupdate",function()
{
   //update progress bar 
    progess = ((audioElement.currentTime/audioElement.duration)*100); //gives percentage of audio finished
    myProgressBar.value = progess;
})


//chnage audio time if progress bar is changed , value of progresss bar is in %
myProgressBar.addEventListener("change",function()
{
    console.log("hello");
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})