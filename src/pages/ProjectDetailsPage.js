import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


import AddComment from "../components/AddComment";
import CommentCard from "../components/CommentCard";

const API_URL = "http://localhost:5005";

function ProjectDetailsPage (props) {
  const [project, setProject] = useState(null);
  const { projectId } = useParams();
  const [task, setTask] = useState(null);
  const { taskId } = useParams();
  
  const getProject = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send the token through the request "Authorization" Headers
    axios.get(`${API_URL}/api/projects/${projectId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
    .then((response) => {
      const oneProject = response.data;
      setProject(oneProject);
    })
    .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {
    getProject();
  }, [] );

 
  return (
    <div className="edit-container">

      {project && (
        <div>
        

        <div className="edit-container-text">
          <p>@{project.ownerName} : </p>
          <h1>{project.title}</h1>
        </div>

        <div className="edit-container-text">
          <p>{project.description}</p> 
        </div>

        <div>
        <img src={project.imageUrl} alt="event_picture"/>
        </div>

        <div className="edit-container-text">
          <p style={{padding: "10px"}}>👬 {project.peopleLimit}</p>
          <p style={{padding: "10px"}}>📅 {project.date}</p>
          <p style={{padding: "10px"}}>⏱️ {project.time}</p>
          <p style={{padding: "10px"}}>📍 {project.place}</p>
        </div>

         
         
        </div>
      )}

      <h2>Comments</h2>

      { project && project.tasks.map((task) => <CommentCard key={task._id} {...task} /> )} 
      <AddComment refreshProject={getProject} projectId={projectId} />           

      <div class= "event-lower">
      <Link to="/projects"><button>Back to Event</button></Link>

      <Link to={`/projects/edit/${projectId}`}><button>Edit Event</button></Link>
      </div>
      
    </div>
  );
}

export default ProjectDetailsPage;