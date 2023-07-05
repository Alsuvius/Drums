document.addEventListener("keydown", function(event){
        makeSound(event.keyCode);
        buttonAnimation(event.keyCode);
        console.log(event.keyCode);
})

function buttonAnimation(currentKey){
    var activeButton = document.querySelector(`.key[data-key="${currentKey}"]`);
    activeButton.classList.add("playing");
    setTimeout(() => {
        activeButton.classList.remove("playing")
    }, 100);
}


function makeSound(key){
    let audio = document.querySelector(`audio[data-key="${key}"]`);
    audio.play();
}

