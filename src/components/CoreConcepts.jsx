import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts(){
    return(
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {CORE_CONCEPTS.map((conceptItem)=> (<CoreConcept key={conceptItem.title}{...conceptItem}/> ))}
                {/*use spread operator to pull out all the key value pairs of each object in the CORE_CONCEPTS array (located in data.js) to be passed as props to the CoreConcept component here without the need to write all of them (title, description, image) and shorten your code*/}
            </ul>
        </section>
)}