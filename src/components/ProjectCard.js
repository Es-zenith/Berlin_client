import { Link } from "react-router-dom";

// We are deconstructing props object directly in the parentheses of the function
function ProjectCard ( { title, description, peopleLimit, _id } ) {
  
  return (
    <div className="ProjectCard card">
      <Link to={`/projects/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      <p style={{ maxWidth: "400px" }}>{peopleLimit} </p>
    </div>
  );
}

export default ProjectCard;