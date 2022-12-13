import { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "./../components/ProfileCard";
import "../profile.css"

const API_URL = "http://localhost:5005";

function ProfilePage() {
  
  return (
    <div >
      
      <ProfileCard/>
      
    </div>
  );
}

export default ProfilePage;
