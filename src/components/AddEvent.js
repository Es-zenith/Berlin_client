import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import service from "../services/service";


const API_URL = "http://localhost:5005";

function AddEvent(props) {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [peopleLimit, setPeopleLimit] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [place, setPlace] = useState("");
  const [type, setType] = useState("");
  // ******** this method handles the file upload ********
  const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);
 
    const uploadData = new FormData();
 
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new movie in '/api/movies' POST route
    uploadData.append("imageUrl", e.target.files[0]);
 
    service
      .uploadImage(uploadData)
      .then(response => {
        console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { title, description, peopleLimit, owner: user._id, imageUrl, date, time, type, place};

    // Get token from localStorage
    const storedToken = localStorage.getItem('authToken');
    console.log(storedToken)

    // Send token through request "Authorization" Headers
    axios
    .post(`${API_URL}/api/projects`, requestBody, { headers: { Authorization: `Bearer ${storedToken}` } })
    .then((response) => {
      console.log(response)
      setTitle("");
      setDescription("");
      setPeopleLimit("");
      setImageUrl("");
      setDate("");
      setTime("");
      setType("");
      setPlace("");
      props.refreshProjects();
    })
    .catch((error) => console.log(error));
  };

  return (
    <div className="AddProject">
      <h3>Add New Event</h3>

      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>

        <label>Description:</label>
        <textarea type="text" name="description"  value={description} onChange={(e) => setDescription(e.target.value)}/>

        <span>
        <label>When:</label>
        <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        <label>Time:</label>
        <input type="time" name="time" value={time} onChange={(e) => setTime(e.target.value)}/>
        </span>

        <label>Event Limited to:</label>
        <input type="number" name="eventLimitation" min="1" value={peopleLimit} onChange={(e) => setPeopleLimit(e.target.value)}/>
        <label>Location:</label>
        <textarea type="text" name="location" value={place} onChange={(e) => setPlace(e.target.value)}/>

        {/* <label>Event type:</label>
        <select name="type" 
          <option value="social">Social</option>
          <option value="sports">Saab</option>
          <option value="clubbing">Opel</option>
          <option value="nature">Audi</option> value={type} onChange={(e) => setDate(e.target.value)} </select> */}

        <label>Image:</label>
        <input type="file" onChange={(e) => handleFileUpload(e)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddEvent;