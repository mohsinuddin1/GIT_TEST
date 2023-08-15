
import loadHome from "./home.js"
import loadMenu from "./menu.js";
import loadContact from  "./contacts.js";

function createHeader(){
    const header=document.createElement("div");
    header.classList.add("header");

    const restaurantName=document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent="Dastarkhwan-E-Lazeez";

    header.appendChild(restaurantName);
    header.appendChild(createNav());
}

function createNav(){
    const nav=document.createElement("nav");

    const homeButton=document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent="HOME";
    homeButton.addEventListener("click",(e)=>{
        if(e.target.classList.contains("active"))return;
        setActiveButton(homeButton);
        loadHome();
    });

    const menuButton=document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent="MENU";
    menuButton.addEventListener("click",(e)=>{
        if(e.target.classList.contains("active"))return;
        setActiveButton(menuButton);
        loadMenu();
    });

    const contactButton = document.createElement("button");
    contactButton.classList.add("button-nav");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      setActiveButton(contactButton);
      loadContact();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(button){
    const buttons=document.querySelectorAll(".button.nav")
    buttons.forEach((button)=>{
        if(button!==this){
            button.classList.remove("active");
        }
    });
    button.classList.add("active");
}

function createMain(){
    const main=document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id","main");
    return main;
}

function createFooter(){
    const footer=document.createElement("footer");
    footer.classList.add("footer");
    const copy=document.createElement('p');
    copy.textContent="Copyright © 2023 Mohsin";
    footer.appendChild(copy);

    return footer;
}

function initializeWebsite() {
const content=document.getElementById('content');
const pp=document.createElement('p');
pp.textContent="mohsin";
content.appendChild(pp);
content.appendChild(createHeader());
//content.appendChild(createMain());
//content.appendChild(createFooter());

setActiveButton(document.querySelector(".button-nav"));
loadHome();
}
export default initializeWebsite;
