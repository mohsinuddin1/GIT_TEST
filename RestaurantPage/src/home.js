function createHome(){
    const home=document.createElement("div")
    home.classList.add("home");
    
    const chefImg=document.createElement("img");
    //chefImg.src="";
    chefImg.alt="this is chef";
    home.appendChild(createPara('Best Biryani in the World'));
    home.appendChild(createHome('Made with Love'));
    home.appendChild(chefImg);
    home.appendChild(createPara("Order online or visit us"));

    return home;

}

const createPara=(text)=>{
    const pp=document.createElement("p");
    pp.textContent=text;
    return pp;
}

function loadHome(){
    const main=document.getElementById("main");
    main.textContent="";
    main.appendChild(createHome());
}

export default loadHome();