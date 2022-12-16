import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";
import logo from "../berlin-logo.png"
import logoNew from "../berlin.png"


function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div>
    
    <div className="container">
    <Link to="/login"><img className="logo-img" src={logo} alt="logo"/></Link>
    
    <nav className="nav">
      
      {isLoggedIn && (
        <>
          <Link to="/homePage">Home</Link>
          <Link to="/projects">My Events</Link>
          <Link to= "/profile">Me</Link>
          {/* <button>{user && user.name}</button> */}
          <button onClick={logOutUser}>Logout</button>
          
       
        </>
      )}
      {!isLoggedIn && (
        <>
          {/* <Link to="/signup">Sign Up </Link>
          <Link to="/login"> Login </Link> */}
        </>
      )}  
      </nav>    
    </div>

    </div>
    
    
    
  );
}

export default Navbar;

