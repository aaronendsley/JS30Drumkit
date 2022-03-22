/// Drumkit Data
    const drumData = [
        {
            keyName:"A",
            dataKey:65,
            soundName:'clap',
            audioSrc:'sounds/clap.wav'
        },
        {
            keyName:"S",
            dataKey:83,
            soundName:'hihat',
            audioSrc:'sounds/hihat.wav'
        },
        {
            keyName:"D",
            dataKey:68,
            soundName:'kick',
            audioSrc:'sounds/kick.wav'
        },
        {
            keyName:"F",
            dataKey:70,
            soundName:'openhat',
            audioSrc:'sounds/openhat.wav'
        },
        {
            keyName:"G",
            dataKey:71,
            soundName:'boom',
            audioSrc:'sounds/boom.wav'
        },
        {
            keyName:"H",
            dataKey:72,
            soundName:'ride',
            audioSrc:'sounds/ride.wav'
        },
        {
            keyName:"J",
            dataKey:74,
            soundName:'snare',
            audioSrc:'sounds/snare.wav'
        },
        {
            keyName:"K",
            dataKey:75,
            soundName:'tom',
            audioSrc:'sounds/tom.wav'
        },
        {
            keyName:"L",
            dataKey:76,
            soundName:'tink',
            audioSrc:'sounds/tink.wav'
        },
    ]
///


const drumkit = document.querySelector('.drumkit');
let keyContainer = document.createElement('div');
keyContainer.className='keys';
drumkit.appendChild(keyContainer);





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
}

function createAudio(data){
    const audioData = data;
    let audioTag = document.createElement('audio');
    audioTag.setAttribute('data-key', audioData.dataKey);
    audioTag.setAttribute('src', audioData.audioSrc);
    drumkit.appendChild(audioTag);

}


//building the drum interface
drumData.forEach(function(element){
    createButton(element);  
    createAudio(element); 
})
   



console.log(drumkit);