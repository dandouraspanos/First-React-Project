import './CoreConcepts.css';
// Separation of Concerns
export default function CoreConcept({image, title, description}) {
    // Props
  return (
    <li>
      <img src={image} alt={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

