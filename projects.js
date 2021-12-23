const today = new Date("October 26, 2021 08:30:00");

const thisYear = today.getFullYear();
const footer = document.querySelector(".footer");
const myName = document.getElementById("myName").innerText;

let copyright = document.getElementById("copyright");

copyright.innerHTML = myName + " &copy; " + thisYear;
//footer.appendChild(copyright);

//githubRequest.send();

fetch("https://api.github.com/users/Amirah5/repos")
  .then((response) => response.json())
  .then((repositories) => {
    //repositories = JSON.parse(githubRequest.responseText);
    console.log(repositories);

    let projectSection = document.getElementById("projects");

    let projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      //console.log(i);
      let project = document.createElement("li");
      project.innerText = repositories[i].name;
      //console.log(repositories[i].name);
      projectList.appendChild(project);
      //console.log(data.message);
    }
  });
