const today = new Date('October 26, 2021 08:30:00');

const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const myName = document.getElementById('myName').innerText;


let copyright = document.createElement("p");


copyright.innerHTML = myName +' '+ thisYear;
footer.appendChild(copyright);

skills = [
    "HTML", "CSS", "JavaScript",
    "Git/versioncontrol",
    "Responsive-Web-Design",
    "DOM-Manipulation",
    "Testing-Debugging",
    "Problem-Solving",
];

const skillsSection = document.getElementsByTagName('skills').innerText;
const skillsList = document.querySelector('ul');

for(let i=0; i<=skills.length; i++){
    let skill = document.createElement("li");
    skill[i].innerText;
    skill.appendChild(skillsList);
    

}