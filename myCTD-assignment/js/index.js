const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");

const copyright = document.createElement("P");
    copyright.innerHTML = "Curtis Clayton " + thisYear;
    footer.appendChild(copyright);


let skills = ["javaScript", "HTML", "CSS"];
const skillsSection = document.querySelector("#skills");

const skillsList =document.querySelector("#skills ul");

    for(let i = 0; i < skills.length; i++){
        let skill = document.createElement("li");
        skill.innerText = skills[i];
        
        skillsList.appendChild(skill);
    }
    
    
    const messageForm = document.querySelector("[name=\"leave_message\"]").addEventListener("submit", function(event){
        let name = event.target.name.value ;
        let email = event.target.email.value;
        let message = event.target.message.value;

        console.log(name +" " + email + " " + message);
        event.preventDefault();
    });
