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
    <div className="ProjectDetails">
      {project && (
        <>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.date}</p>
          <p>{project.time}</p>
          <p>{project.place}</p>
          <p>{project.peopleLimit}</p>
          <img src={project.imageUrl} alt="event_picture" width="350"/>
        </>
      )}

      <h4>Comments</h4>

      { project && project.tasks.map((task) => <CommentCard key={task._id} {...task} /> )} 
      <AddComment refreshProject={getProject} projectId={projectId} />           

      

      <Link to="/projects"><button>Back to Event</button></Link>

      <Link to={`/projects/edit/${projectId}`}><button>Edit Event</button></Link>
      
    </div>
  );
}

export default ProjectDetailsPage;