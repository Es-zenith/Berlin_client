import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

function ProfilePage() {
  const { user } = useContext(AuthContext);
    return (
    <div class= "profile">
      <h1>Profile</h1>
      <div class="wrapper">
        <div class="img-area">
          <div class="inner-area">
            <img src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Marker_red-512.png" alt="profile"/>
          </div>
        </div>
        <div class="name">{user && user.name} </div>
        {/* <div class="career">Student</div> */}
        <hr class="horizon" />
        <div class="info">
          <p>{user.name}</p>
          <p>{user.age} </p>
          <p>{user.sex}</p>
          <p>{user.location}</p>
          <p>{user.interests}</p>
          <p></p>
        </div>
        <button>Edit Profile</button> 
      </div>
    </div>
    );
  }
  
  export default ProfilePage;