const textarea = document.querySelector('#text')
let voicelist = document.querySelector('#voice')
let speechbtn = document.querySelector('.submit')
  
let synth = speechSynthesis
let isSpeaking = true;

function voicespeech(){
    for (let voice of synth.getVoices()){
        let option = document.createElement('option')
        option.text = voice.name
        voice.list.add(option)
        console.log(option)
    }
}

synth.addEventListener('voiceschanged', voicespeech)

