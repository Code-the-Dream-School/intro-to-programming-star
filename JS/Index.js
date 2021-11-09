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
    skill.setAttribute('class','items');
    skill.innerText=skll;
    skillList.appendChild(skill);

}

let messageForm= document.getElementsByName("leave_message")[0];
messageForm.addEventListener('submit',()=>{
    event.preventDefault();
    let fname=event.target.name.value;
    let femail=event.target.email.value;
    let fmessage=event.target.message.value 
    console.log(fname,femail,fmessage);
    const messageSelection= document.querySelector("#messages");
    const messageList= messageSelection.querySelector("ul");
    const newMessages=document.createElement("li");
    newMessages.innerHTML=`<a href="mailto:${femail}">${fname}</a> <span class="messageItems">${fmessage}</span>`;
    const removeButton=document.createElement("button");
    removeButton.setAttribute('type','button');
    removeButton.textContent="Remove";
    removeButton.addEventListener('click',()=>{
        const entry=removeButton.parentNode;
        entry.remove();
    });
    
 newMessages.appendChild(removeButton);
    messageList.appendChild(newMessages);
    

   





    messageForm.reset();

});

