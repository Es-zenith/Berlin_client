import { useState, useEffect } from "react";
import axios from "axios";
import AddEvent from "../components/AddEvent";
import ProjectCard from "./../components/ProjectCard";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";




const API_URL = "http://localhost:5005";

function ProjectListPage() {
  const [projects, setProjects] = useState([]);
  const { user } = useContext(AuthContext);
console.log(projects)
  const getAllProjects = () => {
    // Get the token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // Send the token through the request "Authorization" Headers
    axios.get(`${API_URL}/api/projects`, { headers: { Authorization: `Bearer ${storedToken}` } })
    .then((response) => setProjects(response.data))
    .catch((error) => console.log(error));
  };

  // We set this effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => {
    getAllProjects();
  }, [] );

  
  return (
    <div className="ProjectListPage">
      
      <AddEvent refreshProjects={getAllProjects} />
      
      {projects
      .filter((project)=> {
        if (project.owner == null ) return false
        else {return project.owner._id == user._id}})
        
      .map((project) => <ProjectCard key={project._id} {...project} />  )} 
      
    </div>
  );
}

export default ProjectListPage;

