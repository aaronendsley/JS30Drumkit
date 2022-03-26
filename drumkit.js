/// Drumkit Data
    const drumData = [
        {
            keyName:"A",
            dataKey:'KeyA',
            soundName:'clap',
            audioSrc:'sounds/clap.wav'
        },
        {
            keyName:"S",
            dataKey:'KeyS',
            soundName:'hihat',
            audioSrc:'sounds/hihat.wav'
        },
        {
            keyName:"D",
            dataKey:'KeyD',
            soundName:'kick',
            audioSrc:'sounds/kick.wav'
        },
        {
            keyName:"F",
            dataKey:'KeyF',
            soundName:'openhat',
            audioSrc:'sounds/openhat.wav'
        },
        {
            keyName:"G",
            dataKey:'KeyG',
            soundName:'boom',
            audioSrc:'sounds/boom.wav'
        },
        {
            keyName:"H",
            dataKey:'KeyH',
            soundName:'ride',
            audioSrc:'sounds/ride.wav'
        },
        {
            keyName:"J",
            dataKey:'KeyJ',
            soundName:'snare',
            audioSrc:'sounds/snare.wav'
        },
        {
            keyName:"K",
            dataKey:'KeyK',
            soundName:'tom',
            audioSrc:'sounds/tom.wav'
        },
        {
            keyName:"L",
            dataKey:'KeyL',
            soundName:'tink',
            audioSrc:'sounds/tink.wav'
        },
    ]
///


const drumkit = document.querySelector('.drumkit');
let keyContainer = document.createElement('div');
keyContainer.className='keys';
drumkit.appendChild(keyContainer);



function playSound(){

}

/// create the buttons
function createButton(data){
    const container = document.querySelector('.keys');
    const buttonData = data;
    let buttonDiv = document.createElement('div');
    let keyboard = document.createElement('kbd');
    let soundSpan= document.createElement('span');
    keyboard.innerText= data.keyName;
    buttonDiv.className='key';
    soundSpan.className="sound";
    soundSpan.innerText= buttonData.soundName;
    buttonDiv.setAttribute('data-key', buttonData.dataKey);
    buttonDiv.appendChild(keyboard);
    buttonDiv.appendChild(soundSpan);
    container.appendChild(buttonDiv);
    buttonData.buttonref = buttonDiv;
}



function createAudio(data){
    const audioData = data;
    let audioTag = document.createElement('audio');
    audioTag.setAttribute('data-key', audioData.dataKey);
    audioTag.setAttribute('src', audioData.audioSrc);

    drumkit.appendChild(audioTag);
    audioData.audioTag = audioTag;

}


//building the drum interface
drumData.forEach(function(element){
    createButton(element);  
    createAudio(element); 
})
   
window.addEventListener('keydown', function(event){
    console.log(event);
    drumData.map(function(item){
        if(event.code === item.dataKey){
            if(item.audioTag.paused){
                item.audioTag.play();
                console.log(item.audioTag);
            }else{
                item.audioTag.paused = true;
                item.audioTag.currentTime = 0;
                item.audioTag.play();
            }
            
        }
    })
})


