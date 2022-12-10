import React from "react";

function Loginpage(){
    return (
        
        <div>
         <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
         <label for="inputEmail" class="sr-only">Email address</label>
         <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus></input>
         <label for="inputPassword" class="sr-only">Password</label>
         <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
         <div class="checkbox mb-3">
         </div>
         <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
         <p class="mt-5 mb-3 text-muted">&copy; 2022</p>

        </div>
    )

};

export default Loginpage;