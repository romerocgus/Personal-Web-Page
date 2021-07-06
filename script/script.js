const btnBack = document.querySelector("#bio__btn-back");
const btnFwd = document.querySelector("#bio__btn-fwd");
const bioDots = document.querySelectorAll(".bio__nav-dot");
const bioText = document.querySelector(".bio__text");
const skillText = document.querySelector(".skills__text");
const softText = document.querySelector(".softSkills__text");
const skills = document.querySelectorAll(".flex-skillitem");
const softSkills = document.querySelectorAll(".flex-softSkillitem");
const projects = document.querySelectorAll(".grid-projects__item");
const aside = document.querySelector(".flex-aside");

let skillTextAsign = ()=>{
    for (i = 0; i< skills.length; i++){
        let newText = "";
        if(i == 0){
            newText = `HTML:<br>I'm confident in the use of Html to structure the document with good semantics in order to boost your SEO.`;
        }else if(i == 1){
            newText = `CSS:<br>I like to keep up with every fuctionality that Css brings. I work with Grid, Flexbox, animations, pseudo-elements and more to make your wishes come true!`;
        }else if(i == 2){
            newText = `Javascript:<br>I love programming and find creative solutions. I'm confident in the use of Javascript Vanilla, and also have experience using some frameworks too.`;
        }else if(i == 3){
            newText = `GIT:<br>I use Git as version control sistem for my projects.<br>`;
        }else if(i == 4){
            newText = `Responsive Design:<br>All my Apps can adapt to any device you've got!`;
        }else if(i == 5){
            newText = `Visual Studio Code:<br>This is my editor of choice. I'm pretty used to it, and love working with.`;
        }else if(i == 6){
            newText = `Bootstrap:<br>I rather work with pure CSS, but i have experiencie using bootstrap and feel confident with it too.`;
        }else if(i == 7){
            newText = `Photoshop:<br>I use it as a tool to boost up my images and make the things even more beatiful.`;
        }else if(i == 8){
            newText = `Illustrator:<br>I have some experience with it, making my own designs when needed.`;
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

let bioTextMaker = ()=>{
    let texto1 = `I started my career with the dream of give to the world the most unique experiences in every project that i contribute to make. I really enjoy develop, design and experiment with <span class="colors">colors</span>, <span class="fonts">fonts</span>, <span class="anime">animations</span> and every component that makes a difference to give me the posibility of bring to life UIs that people will love to use!`;
    let texto2 = `I'm naturally curious, love to learn new skills and create awesome projects where i can share innovative (or crazy) ideas and put them into action. I'm constantly challenging myself to improve, looking for creative solutions in every aspect of my life.`;
    let texto3 = `Well... That's a little bit of me, now i like to know more about you. If you want to talk, being for work, some insight, cool ideas or whatever, please send me a message in my <a class="contact-link" href="#contact">contact section</a> or <a class="contact-link" href="#footer">follow me</a> and we'll be friends!. i'll love to read what you have to say.<br>
    Hope you enjoy my site as much as i did making it!<br>
    Gus`;
    let arrayText= [texto1,texto2,texto3];
    let arrayPos = 0;
    bioDots[0].classList.add("dot-active");
    bioText.innerHTML = arrayText[0];

    btnFwd.addEventListener("click",()=>{
        if (arrayPos == 0){
            bioText.innerHTML = arrayText[1];
            bioDots[0].classList.remove("dot-active");
            bioDots[1].classList.add("dot-active");
            arrayPos++;
        } else if (arrayPos == 1){
            bioText.innerHTML = arrayText[2];
            bioDots[1].classList.remove("dot-active");
            bioDots[2].classList.add("dot-active");
            arrayPos++
        } else if (arrayPos == 2){
            bioText.innerHTML = arrayText[0];
            bioDots[2].classList.remove("dot-active");
            bioDots[0].classList.add("dot-active");
            arrayPos = 0;
        }
    });
    btnBack.addEventListener("click",()=>{
        if (arrayPos == 0){
            bioText.innerHTML = arrayText[2];
            bioDots[0].classList.remove("dot-active");
            bioDots[2].classList.add("dot-active");
            arrayPos = 2;
        } else if (arrayPos == 2){
            bioText.innerHTML = arrayText[1];
            bioDots[2].classList.remove("dot-active");
            bioDots[1].classList.add("dot-active");
            arrayPos--;
        } else if (arrayPos == 1){
            bioText.innerHTML = arrayText[0];
            bioDots[1].classList.remove("dot-active");
            bioDots[0].classList.add("dot-active");
            arrayPos--;
        }
    });

}
skillTextAsign();
softSkillTextAsign();
asideMaker();
bioTextMaker();

// intersection observers
// Nav
const navItem = document.querySelectorAll(".navbar__item");
const sections = document.querySelectorAll(".section");
const navOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
};

const navScroll = new IntersectionObserver(function(entries,navScroll){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        } else {
            if(entry.target.id == "header"){
                navItem[0].classList.add("active");
                navItem[1].classList.remove("active");
            }else if(entry.target.id == "about"){
                navItem[1].classList.add("active");
                navItem[0].classList.remove("active");
                navItem[2].classList.remove("active");
            }else if(entry.target.id == "projects"){
                navItem[2].classList.add("active");
                navItem[1].classList.remove("active");
                navItem[3].classList.remove("active");
            }else if(entry.target.id == "contact"){
                navItem[3].classList.add("active");
                navItem[2].classList.remove("active");
            }
        }
        window.history.pushState("", "", `#${entry.target.id}`);
    });
},navOptions);
sections.forEach(section=>{
    navScroll.observe(section);
});

//Faders Start
const fadeBot = document.querySelectorAll(".fade-bot");
const fadeRight = document.querySelectorAll(".fade-right");
const fadeLeft = document.querySelectorAll(".fade-left");

const appearOptions = {
    root: null
};
const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
},appearOptions);
fadeBot.forEach(fader =>{
    appearOnScroll.observe(fader);
});
fadeRight.forEach(fader =>{
    appearOnScroll.observe(fader);
});
fadeLeft.forEach(fader =>{
    appearOnScroll.observe(fader);
});
//Faders End