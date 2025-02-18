
export default function CoreConcept(props){ /* OR destructuring with CoreConcept({image, title, description}) */
  return <li>
    <img src={props.image} alt={props.title} /> {/*OR src={image} alt={title}  */}
    <h3> {props.title}</h3> {/*OR {title} */}
    <p>{props.description}</p> {/* OR {description} */}
  </li>;
}