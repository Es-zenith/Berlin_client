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
            <img src="https://www.seekpng.com/png/detail/256-2564130_young-business-woman-png.png" alt="twitter"/>
          </div>
        </div>
        <div class="name">{user && user.name} </div>
        {/* <div class="career">Student</div> */}
        <hr class="horizon" />
        <div class="info">
          <p>Name: {user.name}</p>
          <p>Age: {user.age} </p>
          <p>Sex: {user.sex}</p>
          <p>Location: {user.location}</p>
          <p>Interests: {user.interests}</p>
          <p>Email: {user.email}</p>
          <p></p>
        </div>
        <button>Edit Profile</button> 
      </div>
    </div>
    );
  }
  
  export default ProfilePage;