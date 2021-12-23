const today = new Date("October 26, 2021 08:30:00");

const thisYear = today.getFullYear();
const footer = document.querySelector(".footer");
const myName = document.getElementById("myName").innerText;

let copyright = document.getElementById("copyright");

copyright.innerHTML = myName + " &copy; " + thisYear;
//footer.appendChild(copyright);

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Git/versioncontrol",
  "Responsive-Web-Design",
  "DOM-Manipulation",
  "Testing-Debugging",
  "Problem-Solving",
];

const skillsSection = document.getElementById("skills");
console.log(skillsSection);
//const skillsList = document.querySelector("ul");//
const unorderedList = document.createElement("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.id = "skill-item";
  skill.innerText = skills[i];
  unorderedList.appendChild(skill);
}

skillsSection.appendChild(unorderedList);
