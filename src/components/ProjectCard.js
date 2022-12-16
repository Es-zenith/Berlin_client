import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";



// We are deconstructing props object directly in the parentheses of the function
function ProjectCard ( { title, description, peopleLimit, _id, owner, imageUrl,time, date, place, ownerName} ) {
  const { user } = useContext(AuthContext);
  console.log(owner)
  return (
      <div class="event-container">
        <p>@{ownerName}</p>
        <div class="event-upper">
          <img src={imageUrl} alt="event_picture"/>
        </div>
        <div>
          
          <h3>{title}</h3>
          <div class="event-time">
            <img src= "https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Marker_red-512.png" alt="event_picture" width="20px" />
            <p>{place} </p>
            <img src= "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-calendar-outline-512.png" alt="event_picture" width="20px" />
            <p>{date} </p>
          </div>

          <div>
           {/* <p>{description}</p> */}
          <Link to={`/projects/${_id}`}><button>View Event</button></Link> 
          </div>
        </div>
  
    </div>
  );
}

export default ProjectCard;


