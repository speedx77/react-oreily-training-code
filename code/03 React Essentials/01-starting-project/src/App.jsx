import reactImg from './assets/rei-pfp.jpg';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import React, { useState } from "react";


/* const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
} */

/* function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
} */

//alt method
//concept = props
function createConcepts(concept) {
  return (
    <CoreConcept
      key={concept.id}
      image={concept.image}
      title={concept.title}
      description={concept.description}
    />)
}
// you can deconstruct props
function createConceptsAlt({id, image, title, description}){
  return (
    <CoreConcept
      key = {id}
      image = {image}
      title = {title}
      description = {description}
    />
  )
}

function App() {

  var [tabContent, setTabContent] = useState("Please Select a Tab")

  function handleSelect(selectedButton){
    console.log(selectedButton)
    setTabContent(selectedButton)
  }


  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Concepts - Get it Right</h2>
          <ul>

            {/*
            //Method 1 - map array and use props in component               
            {CORE_CONCEPTS.map(concept => {
                return (
                  <CoreConcept 
                    key = {concept.id}
                    image = {concept.image}
                    title = {concept.title}
                    description = {concept.description}
                  />
              )})} 

              //Method 3 - add individually
              <CoreConcept 
                image = {reactImg}
                title = "Work"
                description = "Work very hard"
              />
              <CoreConcept 
                image = {CORE_CONCEPTS[0].image}
                title = {CORE_CONCEPTS[0].title}
                description = {CORE_CONCEPTS[0].description}
              />
              <CoreConcept  {...CORE_CONCEPT[1]}/>
              <CoreConcept  {...CORE_CONCEPT[2]}/>
            */}
{/*             Method 2 - map array and use function to create individual components
 */}            
            {CORE_CONCEPTS.map(createConceptsAlt)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>

    </div>
  );
}

export default App;
