const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");

const copyright = document.createElement("P");
    copyright.innerHTML = "Curtis Clayton " + thisYear;
    footer.appendChild(copyright);


let skills = ["javaScript", "HTML", "CSS"];
const skillsSection = document.querySelector("#skills");

const skillsList = document.querySelector("#skills ul");

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    
    skillsList.appendChild(skill);
}


const messageForm = document.querySelector("[name=\"leave_message\"]");

    messageForm.addEventListener("submit", function(event){
    let name = event.target.name.value ;
    let email = event.target.email.value;
    let message = event.target.message.value;

    event.preventDefault();
    console.log(name +" " + email + " " + message);
    
    let messageSection = document.querySelector("#messages");
    let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    newMessage.innerHTML = "<a href=\"mailto:" + email + "?subject=Emails about Portfolio\">"+ name +"</a> <span style=\"color:green;font-weight:bold\">"+ message +"</span>";

    let removeButton =document.createElement("button");
        removeButton.setAttribute("type", "button");
        removeButton.innerText = "remove";
        removeButton.classList.add("removeButton");
        

    removeButton.addEventListener("click", function(){
    let entry = removeButton.parentNode;
        entry.remove();
        
    });
    
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});


    const githubRequest = new XMLHttpRequest();

    // console.log(githubRequest.readyState);

    githubRequest.open("GET", "https://api.github.com/users/curt4207/repos");
    githubRequest.send();
    githubRequest.addEventListener("load", function(){
    let repositories = JSON.parse(this.response);
    const projectSection = document.querySelector("#projects");
    const projectList = projectSection.querySelector("ul");

    for(let i = 0; i < repositories.length; i++){
        let project = document.createElement("li");

        project.innerText = repositories[i].name;
        projectList.appendChild(project);
        console.log(i);
    }
    });
