const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;


const suggestions = [
  "Computadores",
  "Celulares",
  "Servicio Tecnico",
  "F-Tech",
  "Oficina",
  "Iniciar Sesion",
  "Registrar",
];


function getCurrentPath() {
  return window.location.pathname;
}


function getRelativePath(destinationPage) {
  const currentPath = getCurrentPath();

  const currentPathParts = currentPath.split("/");

  currentPathParts.pop();

  const currentDirectory = currentPathParts.pop();


  if (currentDirectory.toLowerCase() === destinationPage.toLowerCase()) {

    return destinationPage + ".html";
  } else {

    return currentPathParts.join("/") + "/" + destinationPage + ".html";
  }
}

inputBox.onkeyup = (e) => {
  let userData = e.target.value;
  let emptyArray = [];


  if (userData) {

    icon.onclick = () => {};

    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });

    emptyArray = emptyArray.map((data) => {
      return `<li>${data}</li>`;
    });

    searchWrapper.classList.add("active");


    showSuggestions(emptyArray);


    let allList = suggBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {

    searchWrapper.classList.remove("active");
  }
};


function select(element) {
  let selectData = element.textContent;
  inputBox.value = selectData;


  if (selectData === "Computadores") {
    linkTag.setAttribute("href", "pages/computers/index.html");
    linkTag.click();
  } else if (selectData === "Celulares") {
    linkTag.setAttribute("href", "pages/cellphones/index.html");
    linkTag.click();
  } else if (selectData === "Servicio Tecnico") {
    linkTag.setAttribute("href", "pages/technical-service/index.html");
    linkTag.click();
  } 
  else {
    console.log("Sugerencia no válida seleccionada:", selectData);
  }

  searchWrapper.classList.remove("active");
}


function showSuggestions(list) {
  let listData;

  
  if (!list.length) {
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    
    listData = list.join("");
  }

  
  suggBox.innerHTML = listData;
}
