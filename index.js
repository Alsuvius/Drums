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
    switch (key) {
        case 65:
            let clap = new Audio('sounds/clap.wav');
            clap.play();
            break;

        case 83:
            let hihat = new Audio('sounds/hihat.wav');
            hihat.play();
            break;

        case 68:
            let kick = new Audio('sounds/kick.wav');
            kick.play();
            break;

        case 70:
            let openhat = new Audio('sounds/openhat.wav');
            openhat.play();
            break;

        case 71:
            let boom = new Audio('sounds/boom.wav');
            boom.play();
            break;

        case 72:
            let ride = new Audio('sounds/ride.wav');
            ride.play();
            break;

        case 74:
            let snare = new Audio('sounds/snare.wav');
            snare.play();
            break;

        case 75:
            let tom = new Audio('sounds/tom.wav');
            tom.play();
            break;

        case 76:
            let tink = new Audio('sounds/tink.wav');
            tink.play();
            break;

        default:
            console.log(event.keyCode);
            break;
}}

