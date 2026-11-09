import { EXAMPLES } from "./assets/data";
import TabButton from "./TabButton";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";
export default function Examples(){ 
    let [selectedTopic, setSelectedTopic] = useState();
    function handleSelect(selectedButton){
        console.log('Selected Button', selectedButton);
        setSelectedTopic(selectedButton);
    }

    let tabContent= <p>Please Select a Topic</p>;
    if(selectedTopic){
      tabContent = <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    }
    return(
        <Section id="examples" title="Examples">
          <Tabs buttonsContainer="menu" buttons={<>
              <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
            </>}>
            {tabContent}
          </Tabs>
        </Section>
    );
}



/*

//** previous section of code for reference **

import {Examples} from '../../assets/data';
import TabButton from '../TabButton/TabButton.jsx';
import { useState } from 'react';

export default function Examples() {
    let [selectedTopic, setSelectedTopic] = useState();
    function handleSelect(selectedButton){
        console.log('Selected Button', selectedButton);
        setSelectedTopic(selectedButton);
    }  
    return (
        <section id="examples">
            <h2>Examples</h2>  
            <menu>
                <TabButton onSelect={() => {handleSelect('components')}}> Components </TabButton>
                <TabButton onSelect={() => {handleSelect('jsx')}}> JSX </TabButton>
                <TabButton onSelect={() => {handleSelect('props')}}> Props </TabButton>
                <TabButton onSelect={() => {handleSelect('state')}}> State </TabButton>
            </menu>
            <div>
                {selectedTopic && <p>{Examples[selectedTopic]}</p>}
            </div>
        </section>
    );
}

*/