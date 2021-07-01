
let skillText = document.querySelector(".skills__text");
let softText = document.querySelector(".softskills__text");
let skills = document.querySelectorAll(".flex-skillitem");
let softSkills = document.querySelectorAll(".flex-softskills-item");
let projects = document.querySelectorAll(".grid-projects__item");
let aside = document.querySelector(".flex-aside");

let skillTextAsign = ()=>{
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
        };

        skills[i].addEventListener("click", ()=>{
            skillText.innerHTML = newText;
        });
    };
};

let softSkillTextAsign = ()=>{
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
        };

        softSkills[i].addEventListener("click", ()=>{
            softText.innerHTML = newText;
        });
    };
};

let asideMaker = ()=> {
    for (i=0; i<projects.length; i++){
        let text;
        if(i == 0){
            text= `<h3 class="card__title">Proyecto 1</h3>
			<p class="card__text">Texto del proyecto 1</p>`;
            projects[i].addEventListener("click", ()=>{
                console.log(i);
                aside.classList.add("aside-visible");
                aside.classList.remove("even");
                aside.innerHTML = text;
            });
        } else if(i == 1) {
            text= `<h3 class="card__title">Proyecto 2</h3>
			<p class="card__text">Texto del proyecto 2</p>`;
            projects[i].addEventListener("click", ()=>{
                aside.classList.add("aside-visible", "even");
                aside.innerHTML = text;
            });
        } else if(i == 2){
            text= `<h3 class="card__title">Proyecto 3</h3>
			<p class="card__text">Texto del proyecto 3</p>`;
            projects[i].addEventListener("click", ()=>{
                console.log(i);
                aside.classList.add("aside-visible");
                aside.classList.remove("even");
                aside.innerHTML = text;
            });
        } else if(i == 3) {
            text= `<h3 class="card__title">Proyecto 4</h3>
			<p class="card__text">Texto del proyecto 4</p>`;
            projects[i].addEventListener("click", ()=>{
                aside.classList.add("aside-visible", "even");
                aside.innerHTML = text;
            });
        };
    }
}

skillTextAsign();
softSkillTextAsign();
asideMaker();