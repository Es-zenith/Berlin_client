import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";


// We are deconstructing props object directly in the parentheses of the function
function ProjectCard ( { title, description, peopleLimit, _id, owner, imageUrl,time, date} ) {
  const { user } = useContext(AuthContext);
  return (
    <div className="ProjectCard card">
    <p style={{ maxWidth: "400px" }}>{owner} </p>
      <Link to={`/projects/${_id}`}>
        <h3>{title}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
      <p style={{ maxWidth: "400px" }}>{peopleLimit} </p>
      <img src={imageUrl} alt="event_picture" width="350"/>
      <p style={{ maxWidth: "400px" }}>{date} </p>
    </div>
  );
}

export default ProjectCard;

