const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML= `Melania Solis, ${thisYear}`;
footer.append(copyright);
const skills = ['Coding','Typing','New Lerner'];
const skillSection = document.getElementById('skills');
const skillsList = skillSection.querySelector('ul');

for (let i=0; i<skills.length; i++) {
  const skill = document.createElement('li');
  skill.innerHTML=skills[i];
  skillsList.appendChild(skill);
};
