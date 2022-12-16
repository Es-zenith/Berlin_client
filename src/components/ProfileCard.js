import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

function ProfilePage() {
  const { user } = useContext(AuthContext);
  const avatars = ["https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/18-man-1024.png", 
                   "https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-1024.png", 
                   "https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/58-woman-1024.png", 
                   "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-1024.png", 
                   "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/avocado_scream_avatar_food-1024.png", 
                   "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/sloth_lazybones_sluggard_avatar-1024.png",
                   'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-1024.png', 
                   'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/geisha_japanese_woman_avatar-1024.png', 
                   'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/marilyn_monroe_artist_avatar-1024.png', 
                   'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/indian_woman_hindi_avatar-1024.png', 
                   'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/pilot_traveller_person_avatar-1024.png', 
                   'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/punk_man_person_avatar-1024.png', 
                   'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/breaking_bad_chemisrty_avatar_heisenberg-1024.png', 
                   'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/muslim_woman_paranja_avatar-1024.png', 
                   'https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/59-woman-1024.png', 
                   'https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/47-nurse-1024.png', 
                   'https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/19-monk-1024.png', 
                   'https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/31-Driver-1024.png', 
                   'https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/28-man-1024.png', 
                   'https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/72-woman-1024.png', 
                   'https://cdn1.iconfinder.com/data/icons/user-avatar-20/64/52-woman-1024.png', 
                   'https://cdn2.iconfinder.com/data/icons/valentine-day-16/512/554_Girl__person__woman_Avatar_Women_valentine_valentines_day_love-1024.png', 
                   'https://cdn2.iconfinder.com/data/icons/covid-19-1/64/08-Dizziness-1024.png'
                  ]
  // select random avatar
  const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
    return (
    <div class= "profile">
      <h1>Profile</h1>
      <div class="wrapper">
        <div class="img-area">
          <div class="inner-area">
            <img src={randomAvatar} alt="profile"/>
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