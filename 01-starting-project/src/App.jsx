//app
import Header from './Header.jsx';
import CoreConcepts from './CoreConcepts.jsx';
import Examples from './Examples.jsx';

function App() {
  return (

    
    <>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </>
    
  );
}
export default App;

/*

// previous section of code for reference
import Header from './Header.jsx';
import UserData from './UserData.jsx';
import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../../../data.js';
import TabButton from './TabButton.jsx';
import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './assets/data.js';
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';
function App() {
  
  let [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton){
      console.log('Selected Button', selectedButton);
      setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='components'} onSelect={()=>{handleSelect('components')}}> Components </TabButton>
            <TabButton isSelected={selectedTopic==='jsx'}onSelect={()=>{handleSelect('jsx')}}> JSX </TabButton>
            <TabButton isSelected={selectedTopic==='props'}onSelect={()=>{handleSelect('props')}}> Props </TabButton>
            <TabButton isSelected={selectedTopic==='state'}onSelect={()=>{handleSelect('state')}}> State </TabButton>
          </menu>

          {!selectedTopic ? <p>Please select a topic</p>:(
            <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)}
        </section>
      </main>
    </div>

  );
}
export default App;

*/


//function App() {
  
  //let [selectedTopic = useState("Please click a button");
  //function handleSelect(selectedButton){
    //console.log('Selected Button', selectedButton);
    //tabContent = selectedButton;

  //}
  //return (
    //<div>
      //<Header />
      //<main>
        //<section id="core-concepts">
        //<h2>Time to get started!</h2>
        
        //<ul>
          //<CoreConcept {...CORE_CONCEPTS[0]}/>
          //<CoreConcept {...CORE_CONCEPTS[1]}/>
          //<CoreConcept {...CORE_CONCEPTS[2]}/>
          //<CoreConcept {...CORE_CONCEPTS[3]}/>
        //</ul>
        
        //</section>
        //<section id="examples">
          //<h2>Examples</h2>
          
          //<menu>
            //<TabButton onSelect={() => {handleSelectTab('components')}}> Components </TabButton>
            //<TabButton onSelect={() => {handleSelectTab('jsx')}}> JSX </TabButton>
            //<TabButton onSelect={() => {handleSelectTab('props')}}> Props </TabButton>
            //<TabButton onSelect={() => {handleSelectTab('state')}}> State </TabButton>
          //</menu>

          //?????
        //</section>  
      //</main>
    //</div>
    
  //);
//}

//export default App;