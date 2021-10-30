const stats = (stats) => `
<li id="allocatedDisk">Total Disk: ${stats[0].toString().slice(0, 4)} GB</li>
<li id="allocatedDisk">Allocated Disk: ${stats[1]
  .toString()
  .slice(0, 4)} GB</li>
<li id="freeDisk">Free Disk: ${stats[2].toString().slice(0, 4)} GB</li>
`;

const projectList = (file) => `
<li class="project">
    <button onclick="projectClicked('${file}')">
       <p> ${file} </p>
    </button>
</li>`;

const optionProject = (option) =>
  `\n
  <button class="projectOptions__option" onclick="optionClicked('${option.event}')">
    <p>  
        ${option.name}
    </p>
  </button>`;

const projectOptions = (project, type, address) => {
  let escapedAddress = address.replaceAll("\\", "\\\\");
  let template = "";
  //   ANGULAR CHECK
  if (type == "Angular") {
    let AngOp = [
      {
        name: "Open in VScode",
        event: `CD ${escapedAddress} && code ${escapedAddress}`,
      },
      {
        name: "Mount local Server (DEV)",
        event: `CD ${escapedAddress} && ng serve --configuration development`,
      },
      {
        name: "Mount local Server (PROD)",
        event: `CD ${escapedAddress} && ng serve --configuration production`,
      },
      {
        name: "Build and Deploy FB",
        event: `CD ${escapedAddress} && ng build --configuration production && firebase deploy`,
      },
    ];
    AngOp.forEach((option) => {
      template += optionProject(option);
    });
    return template;
  }
  // BASIC CHECK
  if (type == "Basic") {
    let basicOp = [
      {
        name: "Open in VScode",
        event: `code ${escapedAddress}`,
      },
    ];
    basicOp.forEach((option) => {
      template += optionProject(option);
    });
    return template;
  }
};
