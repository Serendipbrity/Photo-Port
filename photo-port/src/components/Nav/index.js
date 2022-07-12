import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
      contactSelected,
    setContactSelected
  } = props;


  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
                  <li className="mx-2">
                      {/* when About is selected, contactSelected is set to false and About is rendered */}
            <a data-testid="about" href="#about" onClick={()=> setContactSelected(false)}>
              About me
            </a>
                  </li>
                  {/* if user selects contact, add navActive to illuminate background*/}
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <a href='#contact-form'onClick={() => handleClick('Contact')}>
              <span onClick={()=> setContactSelected(true)}>Contact</span>
            </a>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && `navActive`
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
