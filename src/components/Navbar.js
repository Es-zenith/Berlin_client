import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <div className="container">
    <h2>Berlin Social </h2>
    <nav className="nav">
      
      <Link to="/homePage">Home</Link>

      {isLoggedIn && (
        <>
          <Link to="/projects">My Events</Link>
          <Link to= "/profile">Me</Link>
          {/* <button>{user && user.name}</button> */}
          <button onClick={logOutUser}>Logout</button>
       
        </>
      )}
      {!isLoggedIn && (
        <>
          <Link to="/signup">Sign Up </Link>
          <Link to="/login"> Login </Link>
        </>
      )}  
      </nav>    
    </div>
    
    
  );
}

export default Navbar;

