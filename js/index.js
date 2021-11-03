const today = new Date("October 26, 2021 08:30:00");

const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const myName = document.getElementById("myName").innerText;

let copyright = document.createElement("p");

copyright.innerHTML = myName + " " + thisYear;
footer.appendChild(copyright);

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
  skill.innerText = skills[i];
  unorderedList.appendChild(skill);
}

skillsSection.appendChild(unorderedList);

const messageForm = document.querySelector(`[name="leave_message"]`);

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNameElement = document.querySelector("#first-name-input");
  const firstNameText = firstNameElement.value;

  const lastNameElement = document.querySelector("#last-name-input");
  const lastNameText = lastNameElement.value;

  const emailElement = document.querySelector("#email-input");
  const emailText = emailElement.value;

  const messageElement = document.querySelector("#message-input");
  const messageText = messageElement.value;

  console.log(
    firstNameElement +
      " " +
      lastNameElement +
      " " +
      emailElement +
      " " +
      messageElement
  );
  document.getElementById("form").reset();

  const messageSection = document.querySelector("messages");
  const messageList = document.querySelector("ul");
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href=mailto:${emailElement}>${firstNameElement}${lastNameElement}</a>`;

  let removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", () => {
    const entry = removeButton.parentNode;
    entry.removeChild();
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});
