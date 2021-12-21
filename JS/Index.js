
//Function that shows the menu once the button is clicked 
function menuClick(){
    let items= document.querySelectorAll(".navigation")
   
    for(let i=0;i<items.length;i++){
      if(items[i].style.display=="block"){
        items[i].style.display="none";
      }else{
        items[i].style.display="block";
      }
    }
  
}
    


//Copyright 
const today= new Date();
const thisYear= today.getFullYear(); 
const footer=document.querySelector("footer");
const copyright=document.createElement("p");
copyright.setAttribute("id","copyright");
copyright.innerHTML=`&#169 Quanayzia Garden ${thisYear}`;
footer.appendChild(copyright);

// For loops that show all both my Soft skills and Hard skills 
   const hardSkillSet=["C++","Oracle SQL","HTML","CSS","JavaScript","Python"];
   const softSkillSet=["Self-motivated","Adaptability","Diligent","versitile","Strong Commumication"];
   const hSkillSet=document.getElementById("hSkills");
   const sSkillSet=document.getElementById("sSkills");
   for(let skill of hardSkillSet){
     const newList=document.createElement("li");
     newList.innerText=skill;
     newList.setAttribute("class","FhSkillList")
     hSkillSet.appendChild(newList);
   }
  
   for(const skill of softSkillSet){
     const newList=document.createElement("li");
     newList.innerText=skill;
     newList.setAttribute("class","FsSkillList")
     sSkillSet.appendChild(newList);
   }





const messageForm= document.getElementsByName("leave_message")[0]; //DOM selector Selects the Message form node

// Event listener added to the Message form node
messageForm.addEventListener("submit",()=>{
  event.preventDefault();
  const fName=event.target.name.value;
  const email=event.target.email.value;
  const mssgs=event.target.message.value;
 
  let messageSelector=document.querySelector("#messages").querySelector("ul"); // DOM selector that is selecting a unordered list item node 
  const newMessage=document.createElement("li"); // creates a list item element 
  const messageContent=document.createElement("div"); // creates a div element 
  messageContent.className+="messageContent"  // add a class attribute to the newly created div element 
  const emailLink=document.createElement("a"); // creates an anchor element 
  emailLink.setAttribute("href",""); // give the anchor element an attribute and set it to an empty string 
  emailLink.href+=`${email}`; // adds email to that empty sting; 
  emailLink.textContent=`${fName}`; // add string to the anchor elements text content
  

  let messageTxt=document.createElement("p"); //creates a paragraph element 
  messageTxt.className+="messageTxt" //adds a class attribute to the newly created paragraph element 
  messageTxt.textContent= mssgs; // the text conent of the paragraph element is set equal to the forms message text

  
  messageSelector.appendChild(newMessage); // the newly created list items are appened as a child to the unordered list element
  newMessage.appendChild(messageContent); // the newly created div element is appened as a child to the  newly created list element 
  messageContent.appendChild(emailLink); //the anchor element holding the email is appened as a child to the newly created div element 
  messageContent.appendChild(messageTxt);// the message text is appened as a child to the newly created div element 
 
  const removeBttn=document.createElement("button"); // A button elemen is created 
  removeBttn.setAttribute("type","button"); // a type attribute for the button is set
  removeBttn.className+="remove"; // a class attribte for the button element is set
  removeBttn.textContent="Remove";

  removeBttn.addEventListener("click",()=>{ // and event listener for when the remove button is clicked on
    const entry=removeBttn.parentNode;
    entry.remove(); //removes the parent list element
  });
 
  let editBttn= document.createElement("button"); //creates edit button
  editBttn.className+="edit"; // set class for edit button 
  editBttn.textContent="Edit";
 
  editBttn.addEventListener("click",()=>{  //even listener attached to edit button so it can perfom an action once clicked on

      if(editBttn.textContent==="Edit"){
        const inputElement= document.createElement("input");
        inputElement.type="text";
        inputElement.value= messageTxt.textContent;
        messageContent.insertBefore(inputElement,messageTxt); // inserts the input element before the paragraph element 
        messageContent.removeChild(messageTxt); //removes paragaph element 
        editBttn.textContent="Save";
      }else if(editBttn.textContent==="Save"){
          const inputElement=messageContent.lastChild;
          messageTxt.textContent=inputElement.value;
          messageContent.insertBefore(messageTxt,inputElement); //inserts the parapraph element before the input element
          messageContent.removeChild(inputElement); //removes input element 
          editBttn.textContent="Edit";
      }

   
  })

  newMessage.appendChild(editBttn);
  newMessage.appendChild(removeBttn);
 

 messageForm.reset();

 
});


/*var githubRequest= new XMLHttpRequest();
 githubRequest.open('GET','https://api.github.com/users/gardenqu/repos');
 githubRequest.send();*/

 fetch('https://api.github.com/users/gardenqu/repos')
 .then(Response=>Response.json())
 .then((data)=>{
    let projectSection=document.getElementById('projects');
    let projectList=projectSection.querySelector('ul');

    for (let obj in data){
        let project=document.createElement('li');
        let date=document.createElement('p');
        date.className+="date"
        project.className+="projList";
        project.innerHTML=`<a href="${data[obj].html_url}">${data[obj].name}</a>`;
        let temp= data[obj].created_at.slice(0,10);
        date.textContent=`Created on: ${temp}`;
        projectList.appendChild(project);
        projectList.appendChild(date);



    }

 });
 /*(githubRequest.addEventListener('load',()=>{
     var something=githubRequest.responseText;

     let repo=JSON.parse(githubRequest.responseText);
     console.log(repo);

    let projectSection=document.getElementById('projects');
    let projectList=projectSection.querySelector('ul');

    for (let obj in repo){
        let project=document.createElement('li');
        project.innerText= repo[obj].name;
        projectList.appendChild(project);

    }

    
 })*/