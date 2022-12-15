import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";



// We are deconstructing props object directly in the parentheses of the function
function ProjectCard ( { title, description, peopleLimit, _id, owner, imageUrl,time, date, place} ) {
  const { user } = useContext(AuthContext);
  return (
    // <div className="ProjectCard card">
    // <p>{owner} </p>
    //   <Link to={`/projects/${_id}`}>
    //     <h3>{title}</h3>
    //   </Link>
    //   <p>{description} </p>
    //   <p>{date} </p>
    //   <p>{time} </p>
    //   <img src={imageUrl} alt="event_picture" width="350"/>
      <div class="event-container">
        <div class="event-upper">
          <img src={imageUrl} alt="event_picture"/>
        </div>
        <div class="event-lower">
          <p>{owner}</p>
          <h3>{title}</h3>
          <div class="event-time">
            <img src= "https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Marker_red-512.png" alt="event_picture" width="20px" />
            <p>{place} </p>
            <img src= "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-calendar-outline-512.png" alt="event_picture" width="20px" />
            <p>{date} </p>

          </div>
  
          {/* <p>{description}</p> */}
          <Link to={`/projects/${_id}`}><button>View Event</button></Link>
        </div>
  
    </div>
  );
}

export default ProjectCard;


{/* <div class="container">
  <div class="upper">
    <img src="https://cdn1.iconfinder.com/data/icons/ionicons-sharp-vol-2/512/person-sharp-512.png" />
  </div>
  <div class="lower">
    <h2> {owner}</h2>
    <h3> Front End Developer</h3>
    <p> Lorem </p>
    <button> <Link to={`/projects/${_id}`}>
        <h3>{title}</h3>
      </Link>View Profile</button>
  </div>
</div>
 */}
