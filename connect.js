const messageForm = document.querySelector(`[name="leave_a_message"]`);

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNameElement = document.querySelector("#first-name");
  const firstNameText = firstNameElement.value;

  const lastNameElement = document.querySelector("#last-name");
  const lastNameText = lastNameElement.value;

  const emailElement = document.querySelector("#email");
  const emailText = emailElement.value;

  const messageElement = document.querySelector("#message");
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

  newMessage.innerHTML = `<a href=mailto:${emailText}>${firstNameText}${lastNameText}</a>`;

  let removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";
  removeButton.addEventListener("click", () => {
    const entry = removeButton.parentNode;
    let ul = entry.parentNode;
    ul.removeChild(entry);
  });
  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);
  messageForm.reset();
});
