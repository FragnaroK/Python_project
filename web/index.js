eel.expose(selectProject);
function selectProject(projectSelected) {
  document.querySelector(".projectInfo__title").innerHTML = projectSelected;
}
eel.expose(showErrorMessage);
function showErrorMessage(msg) {
  alert("An error ocurred: " + msg);
}

eel.expose(getProjects);
function getProjects(projects) {
  let files = projects;
  files.forEach((file) => {
    document.querySelector(".projects").innerHTML += projectList(file);
  });
}

eel.expose(getProject);
function getProject(project, type, address) {
  document.querySelector(".projectOptions").innerHTML = projectOptions(
    project,
    type,
    address
  );
}

eel.expose(getStats);
function getStats(stat) {
  console.log(stat);
  document.querySelector(".systemInfo__list").innerHTML = stats(stat);
}

function projectClicked(project) {
  eel.getProject(project);
}

function optionClicked(option_event) {
  eel.execCode(option_event);
}

selectProject("Select One Project");
