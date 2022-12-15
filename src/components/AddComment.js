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
    <div className="AddComment">
      <h3>Comment</h3>
      
      <form onSubmit={(e) => handleSubmit(e, props.projectId)}>
        {/* <label>Title:</label>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/> */}

        <textarea type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default AddComment;