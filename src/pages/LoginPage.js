import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/auth.context";


const API_URL = "http://localhost:5005";


function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios.post(`${API_URL}/auth/login`, requestBody)
    .then((response) => {
      console.log("JWT token", response.data.authToken);
      
      storeToken(response.data.authToken);
      authenticateUser();
      navigate("/homePage");
    })
    .catch((error) => {
      const errorDescription = error.response.data.message;
      setErrorMessage(errorDescription);
    })
  };
  
  return (
    <div className="LoginPage">
      <form  class="signup" onSubmit={handleLoginSubmit}>
      <h1>Welcome Back</h1>
      <h2>Don't have an account? <span><Link class="link" to={"/signup"}>Sign Up</Link></span></h2>
      

      
      <div class="signup__field">
        <input class="signup__input" type="text" name="email" id="email" value={email} onChange={handleEmail}  />
        <label class="signup__label" for="email">Email</label>
      </div>
        

      <div class="signup__field">
        <input class="signup__input" type="password" name="password" value={password} onChange={handlePassword} />
        <label class="signup__label" for="password">Password</label>
      </div>
      { errorMessage && <p className="error-message">{errorMessage}</p> }
        <button type="submit">Login</button>
      </form>
     

    </div>
  )
}

export default LoginPage;

