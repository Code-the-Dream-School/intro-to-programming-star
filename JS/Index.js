//copyright stuff
const today= new Date();
const thisYear= today.getFullYear(); 
const footer=document.querySelector("footer");
const copyright=document.createElement("p");
copyright.innerHTML=`&#169 Quanayzia Garden ${thisYear}`;
footer.appendChild(copyright);

//loop for skill stuff
let skills=["HTML","JavaScript","C++","OracleSQL","GIT","Self-reliant","Teamwork Oriented","Positive","Problem solver","Risk Taker"];
const skillSection=document.querySelector("#skills");
const skillList=skillSection.querySelector("ul");

for(let skll of skills){
    const skill=document.createElement("li");
    skill.innerText=skll;
    skillList.appendChild(skill);

}


