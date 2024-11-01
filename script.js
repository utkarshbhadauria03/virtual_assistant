let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
text_speak.volume=1
text_speak.lang="hi-GB"
window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day = new Date()
    let hours= day.getHours()
    if(hours>=12 && hours<12){
        speak("Good Morning Arjun")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon Arjun")
    }
    else{
        speak("Good Evening Arjun")
    }
}
window.addEventListener('load',()=>{
    wishMe()
 })
    let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    let recognition = new speechRecognition()
    recognition.onresult = (event)=>{
       let currentIndex= event.resultIndex
       let transcript = event.results[currentIndex][0].transcript
      content.innerText=transcript
        takeCommand(transcript.toLowerCase())
    }
    btn.addEventListener("click",()=>{
 recognition.start()
 btn.style.display="none"
 voice.style.display="block"
    })
    
    
    function takeCommand(message){
        btn.style.display="flex"
        voice.style.display="block"
        if(message.includes("hello") || message.includes("hey")) {
            speak("hello arjun, how can i help you")
        }
        else if(message.includes("who are you")){
            speak("I am ROBOT Being an Virtual Assistant, Created By Arjun Sir")
        }
       else if(message.includes("how are you")){
    speak("I am Good,Tell me about you")

       }
    else if(message.includes("open youtube")){
        speak("Opening Youtube")
        window.open("https://www.youtube.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("Opening Google")
        window.open(" https://www.google.co.in/","_blank")
    }
   
    else if(message.includes("play music")){
        speak("Playing Music")
        window.open(" https://www.youtube.com/watch?v=W0DM5lcj6mw","_blank")
    }

    else if(message.includes("open calculator")){
        speak("Opening Calculator")
        window.open("calculator://")
    }
    else if(message.includes("open clock")){
    speak("Opening Clock")
    window.open("lock://")   
    }
    else {
        speak(`This What i have find about ${message}`)
      window.open(`https://www.google.com/search?q=${message}`)
    }
}


    
