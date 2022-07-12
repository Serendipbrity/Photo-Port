
import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]); 

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  //  set initial value of contact selected to false to prevent the contact form from showing when user initially enters the page
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected = {setContactSelected}
      ></Nav>
      <main>
      {/* <ContactForm />
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About> */}
        {/* if contact tab not selected, only show gallery and about */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;