//**** Navbar Responsive ****//
const btnNav = document.querySelector(".navbar__button");
const btnNavlines = document.querySelector(".btnLine");
const navtoggle = document.querySelector(".navbar__list-items");

document.addEventListener("click", (e)=>{
    console.log(e.target);
    if(e.target !== navtoggle && e.target !== btnNav){
        navtoggle.classList.remove("list-active");
        btnNav.classList.remove("cross");
    }
});
btnNav.addEventListener("click",()=>{
    navtoggle.classList.toggle("list-active");
    btnNav.classList.toggle("cross");
});

//**** Navbar Responsive END****//

//****Biography navigation ****//
const btnBack = document.querySelector("#bio__btn-back");
const btnFwd = document.querySelector("#bio__btn-fwd");
const bioDots = document.querySelectorAll(".bio__nav-dot");
const bioText = document.querySelector(".bio__text");

let bioTextMaker = ()=>{
    let texto1 = `I started my career with the dream of give to the world the most unique experiences in every project that i contribute to make. I really enjoy develop, design and experiment with <span class="colors">colors</span>, <span class="fonts">fonts</span>, <span class="anime">animations</span> and every component that makes a difference to give me the posibility of bring to life UIs that people will love to use!`;
    let texto2 = `I'm naturally curious, love to learn new skills and create awesome projects where i can share innovative (or crazy) ideas and put them into action. I'm constantly challenging myself to improve, looking for creative solutions in every aspect of my life.`;
    let texto3 = `Well... That's a little bit of me, now i like to know more about you. If you want to talk, being for work, some insight, cool ideas or whatever, please send me a message in my <a class="contact-link" href="#Contact">contact section</a> or <a class="contact-link" href="#footer">follow me</a> and we'll be friends!. i'll love to read what you have to say.<br>
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
bioTextMaker();
//****Biography navigation END****//

//****Soft Skills Text ****//
const softText = document.querySelector(".softSkills__text");
const softSkills = document.querySelectorAll(".flex-softSkillitem");

let softSkillTextAsign = ()=>{
    softSkills.forEach(softSkill =>{
        let newText;
        if(softSkill.firstElementChild.innerHTML == "Team Worker"){
            newText = "Team Worker:<br>i think that we are better if we work together!<br> i like to work with people to inspire and be inspired, share ideas and learn of each other."
        } else if(softSkill.firstElementChild.innerHTML == "Fast Learner"){
            newText = "Fast Learner:<br>I love to learn new things, the feels of improvement, and the satisfaction of unlock a new skill.<br> As i enjoy it so much, i tend to involve a lot and learn fast."
        } else if(softSkill.firstElementChild.innerHTML == "Friendly"){
            newText = "Friendly:<br>That's it. I'm usually in a good mood, active listener, like to chat and you can count on me pretty much for everything."
        } else if(softSkill.firstElementChild.innerHTML == "Positive"){
            newText = "Positive:<br>I like to see the bright side of thing, if there is bad moments i try to cheer things up to raise the moral of the team."
        } else if(softSkill.firstElementChild.innerHTML == "Creative"){
            newText = "Creative:<br>If there's something about this job that i like the most is that we can make reality our dreams!. I like to try different ways to make things happen, and bring creative solutions or ideas to play with."
        } else if(softSkill.firstElementChild.innerHTML == "Meticulous"){
            newText = "Meticulous:<br>I have so much attention for details. I have no problem to do and re-do things in order to make them look the way you like or improve my code to make things more legible, more efficient, prettier."
        }

        softSkill.addEventListener("click", ()=>{
            softText.innerHTML = newText;
        });
    });
};
softSkillTextAsign();
//****Soft Skills Text END****//

//****Projects Modal ****//
const projects = document.querySelector(".grid-projects");

projects.addEventListener("click", openModal = function(e){
    const modalOpener = e.target.closest(".project-title");
    if(!modalOpener) return;
    const modal = modalOpener.parentNode.nextElementSibling;
    const closeButton = modal.querySelector(".modal-close");
    modal.classList.add("open");

    closeButton.addEventListener("click", _ =>{
        modal.classList.remove("open");
    });
    
});
//****Projects Modal END****//

//****Intersection Observers****//
// Nav //
const navItem = document.querySelectorAll(".navbar__link");
const sections = document.querySelectorAll(".section");
const navOptions = {
    threshold: 0,
    rootMargin: "0px"
};

const navScroll = new IntersectionObserver(function(entries,navScroll){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            navItem.forEach(item=>{
                if(entry.target.id == item.innerHTML){
                    item.classList.add("active");
                    window.history.pushState("", "", `#${entry.target.id}`);
                }else{
                    item.classList.remove("active");
                }
            });
        }
    });
},navOptions);
sections.forEach(section=>{
    navScroll.observe(section);
});

// Faders //
const fadeBot = document.querySelectorAll(".fade-bot");
const fadeRight = document.querySelectorAll(".fade-right");
const fadeLeft = document.querySelectorAll(".fade-left");

const appearOptions = {
    rootMargin: "0px 0px 100px 0px"
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

//****Intersection Observers END****//

//****Form Validation ****/

const form = document.querySelector(".flex-form");
const namef = document.querySelector("#name");
const email = document.querySelector("#mail");
const message = document.querySelector("#msg");
const formResponse = document.querySelector(".submit-response");

const formValidation = ()=>{
    if (namef.value.length < 3 || namef.value.length > 50){
        namef.nextElementSibling.classList.add("visible");
        return false;
    }else {
        namef.nextElementSibling.classList.remove("visible");
    };

    if (email.value.length < 3 || email.value.length > 50 || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        email.nextElementSibling.classList.add("visible");
        return false;
    }else {
        email.nextElementSibling.classList.remove("visible");
    };
    if (message.value.length < 3){
        message.nextElementSibling.classList.add("visible");
        return false;
    }else {
        message.nextElementSibling.classList.remove("visible");
    };
};
//****Form Validation END ****/

//****Email Send ****/
const bsubmit = document.querySelector("input[type=submit]");
bsubmit.addEventListener("click", (e)=>{
    e.preventDefault();
    formValidation();
    let text;
    if(formValidation() == false){
        text = "Please, make sure your message is ok";
        formResponse.innerHTML= text;
        formResponse.classList.add("visible", "sendFail");
    }else{
        fetch("https://formsubmit.co/ajax/info@guscreations.net",{
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name: "FormSubmit",
                message: `Name: ${namef.value}
                Email: ${email.value}
                Message: ${message.value}`
            })
        })
        .then(response => response.json())
        .then(json => {
            text = `<i class="far fa-check-circle"></i> Your e-mail was sent, thank you for your message!`;
            formResponse.innerHTML= text;
            formResponse.classList.remove("sendFail");
            formResponse.classList.add("visible");
            form.reset();
        })
        .catch(error => {
            text = "There was an error, please try again later.";
            formResponse.innerHTML= text;
            formResponse.classList.add("visible", "sendFail");
        });
    }
});
//****Email Send END****/
