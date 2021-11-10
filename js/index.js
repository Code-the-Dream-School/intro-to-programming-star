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
const messageForm = document.getElementsByName('leave_message');
messageForm[0].addEventListener('submit', (event) => {
  event.preventDefault();
  const name = event.target.name;
  const email = event.target.email;
  const message = event.target.message;
  console.log(name.value);
  console.log(email.value);
  console.log(message.value);

  messageSection = document.getElementById('messages');
  messageList = messageSection.querySelector('ul');
  newMessage = document.createElement('li');

  const a=document.createElement('a');
  const linkText = document.createTextNode(`${name.value}`);
  a.appendChild(linkText);
  a.title = `${name.value}`;
  a.href = `mailto:${email.value}`;
  newMessage.appendChild(a);
  newMessage.insertAdjacentHTML('beforeend', `<span> wrote: ${message.value} </span`);
// creating a new element, a button
  removeButton = document.createElement('button');
  removeButton.innerHTML = 'remove';
  removeButton.type = 'button';
  messageList.appendChild(newMessage);
  newMessage.appendChild(removeButton);

  removeButton.addEventListener('click', (event) =>{
    const entry = removeButton.parentNode;
    entry.remove();
    })
  messageForm[0].reset();

})
