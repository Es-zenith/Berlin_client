import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleSex = (e) => setSex(e.target.value);



  
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, name, age, sex };

    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios.post(`${API_URL}/auth/signup`, requestBody)
    .then((response) => {
      navigate("/login");
    })
    .catch((error) => {
      // const errorDescription = error.response.data.message;
      // setErrorMessage(errorDescription);
    })
  };

  return (
    <div className="LoginPage">
      
        <form  class="signup" onSubmit={handleSignupSubmit}>
          <h1>Have Account ?</h1>
          <h2>Already have an account? <span><Link class="link" to={"/login"}>Sign In</Link></span></h2>

          <div class="signup__field">
            <input class="signup__input" type="text" name="name" id="email" value={name} onChange={handleName}  />
            <label class="signup__label" for="email">Username</label>
          </div>

          <div class="signup__field">
            <input class="signup__input" type="text" name="email" id="email" value={email} onChange={handleEmail}  />
            <label class="signup__label" for="email">Email</label>
          </div>

          <div class="signup__field">
            <input class="signup__input" type="number" min="18" name="age" value={age} onChange={handleAge} />
            <label class="signup__label" for="age">Age</label>
          </div>

          {/* <div > 
            <label class="signup__input" className="SexBox" >Sex</label>
            
            <input type="checkbox" name="sex" value={sex} onChange={handleSex} />
            <label class="signup__input" >Male</label>

            
            <input type="checkbox" name="sex" value={sex} onChange={handleSex} />
            <label class="signup__input" >Female</label>

           
            <input type="checkbox" name="sex" value={sex} onChange={handleSex} />
            <label class="signup__input">Not to define</label>
          </div>   */}

          <div class="signup__field">
            <input class="signup__input" type="password" name="password" value={password} onChange={handlePassword} />
            <label class="signup__label" for="password">Password</label>
          </div>

          <button type="submit">Sign Up</button>

        </form>
      
    </div>
  )
}

export default SignupPage;