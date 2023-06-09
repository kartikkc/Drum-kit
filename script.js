var no_of_drum_buttons = document.querySelectorAll(".drum").length;

for (let i = 0; i < no_of_drum_buttons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonHTML = this.innerHTML;
        makeSound(buttonHTML);
        animations(buttonHTML);
    })
}

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    animations(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("./sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("./sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("./sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("./sounds/kick-bass.mp3").play();
            break;
        default:
            console.log(key);
            break;
    }
}

function animations(key){

    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
}

// function HouseKeeper(yearsofexp, name, cleaningrepertoire){
//     this.yearsofexp = yearsofexp;
//     this.name = name;
//     this.cleaningrepertoire = cleaningrepertoire;
//     this.clean = function() {
//         alert("Cleaning in progress!!");
//     }
// }

// var houseKeeper1= new HouseKeeper(12,"jane",["bathroom","lobby","bedroom"]);