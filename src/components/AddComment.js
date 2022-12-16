import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

const API_URL = "http://localhost:5005";

function AddComment(props) {

  const [description, setDescription] = useState("");
  const { user } = useContext(AuthContext);
  const handleSubmit = (e , taskId) => {
    e.preventDefault(); 

    const { projectId } = props;
    let ownerName = user.name
    const requestBody = {description, projectId, ownerName };

    // Get token from localStorage
    const storedToken = localStorage.getItem('authToken');

    // Send token through request "Authorization" Headers   
    axios
    .post(`${API_URL}/api/tasks`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
    .then((response) => {
      console.log(response)
      setDescription("");
      props.refreshProject();
    })
    .catch((error) => console.log(error));
  };

  return (
    <div className="AddComment" >
      <form onSubmit={(e) => handleSubmit(e, props.projectId)}>

      <div>
        <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
      </div>

      <div>
      <button type="submit">Send</button>
      </div>
     
      </form>
      
    </div>
  );
}

export default AddComment;