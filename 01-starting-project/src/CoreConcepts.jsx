//coreConcept
import CoreConcept from "./CoreConcept";
import Section from "./Section";
import { CORE_CONCEPTS } from "./assets/data.js";

export default function CoreConcepts(){
    return(
        // <section id="core-concepts">
        //     <h2>Time to get started!</h2>
        //     <ul>
        //     {CORE_CONCEPTS.map((conceptItem)=><CoreConcept {...conceptItem}/>)}
        //     </ul>
        // </section>
        <Section id='core-concepts' title="Time to get started">
            <ul>
                {CORE_CONCEPTS.map((conceptItem)=><CoreConcept {...conceptItem}/>)}
            </ul>
        </Section>
    )
}



/*

// previous section of code for reference
import { CORE_CONCEPTS } from '../../../data.js';
import CoreConcept from './CoreConcept.jsx';

export default function CoreConcepts() {
    return (
        //<section id="core-concepts">
            //<h2>Time to get started!</h2>
            //<ul>
                //{CORE_CONCEPTS.map((conceptItem) => (<CoreConcept {...conceptItem} />))}
            //</ul>
        //</section>
        <Section title="Time to get started!">
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept {...conceptItem} />))}
            </ul>
        </Section>
    );
}
*/