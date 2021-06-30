
let skillText = document.querySelector(".skills__text");
let softText = document.querySelector(".softskills__text");
let skills = document.querySelectorAll(".flex-skillitem");
let softSkills = document.querySelectorAll(".flex-softskills-item");

for (i = 0; i< skills.length; i++){
    let newText = "";
    if(i == 0){
        newText = "el texto de html";
    }else if(i == 1){
        newText = "el texto de css";
    }else if(i == 2){
        newText = "el texto de js";
    }else if(i == 3){
        newText = "el texto de git";
    }else if(i == 4){
        newText = "el texto de responsive";
    }else if(i == 5){
        newText = "el texto de vsCode";
    }else if(i == 6){
        newText = "el texto de bootstrap";
    }else if(i == 7){
        newText = "el texto de photoshop";
    }else if(i == 8){
        newText = "el texto de illustrator";
    }

    skills[i].addEventListener("click", ()=>{
        skillText.innerHTML = newText;
    });
}

for (i = 0; i< softSkills.length; i++){
    let newText = "";
    if(i == 0){
        newText = "el texto de tw";
    }else if(i == 1){
        newText = "el texto de fast";
    }else if(i == 2){
        newText = "el texto de nice";
    }else if(i == 3){
        newText = "el texto de positive";
    }else if(i == 4){
        newText = "el texto de funny";
    }else if(i == 5){
        newText = "el texto de vsCode";
    }else if(i == 6){
        newText = "el texto de bootstrap";
    }else if(i == 7){
        newText = "el texto de photoshop";
    }else if(i == 8){
        newText = "el texto de illustrator";
    }

    softSkills[i].addEventListener("click", ()=>{
        softText.innerHTML = newText;
    });
}