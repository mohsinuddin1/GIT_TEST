function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");
  
    menu.appendChild(
      createMenuItem(
        "Hyderbadi Biryani",
        "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Kolkata Biryani",
        "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Veg Biryani",
        "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
      )
    );
    menu.appendChild(
      createMenuItem(
        "Afghani Biryani",
        "Tomato sauce, Bacon, Pineapple, Olives, Basil"
      )
    );
  
    return menu;
  }
  
  function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
  
    //const foodImage = document.createElement("img");
    //foodImage.src = `images/biryani/${name.toLowerCase()}.png`;
    //foodImage.alt = `${name}`;
  
    //menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
  }
  
  function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
  }
  
  export default loadMenu;