import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";


// We are deconstructing props object directly in the parentheses of the function
function ProjectCard ( { title, description, peopleLimit, _id, owner, imageUrl} ) {
  const { user } = useContext(AuthContext);
  return (
    <div className="ProjectCard card">
      <Link to={`/projects/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      <p style={{ maxWidth: "400px" }}>{peopleLimit} </p>
      <img src={imageUrl} alt="movie" width="350" />
  
  
    </div>
  );
}

export default ProjectCard;

