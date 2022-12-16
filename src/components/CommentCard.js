// We are deconstructing the props object directly in the parentheses of the function


function CommentCard({user, description, ownerName}) {
  return (
    <div className="CommentCard" >
     <div>
     <p style={{color: "#a4243b"}}>@{ownerName} :</p>
     </div>

     <div >
     <p style={{textAlign: "justify"},{padding: "10px"}} >{description}</p>
     </div>
      
    
    </div>
  );
}

export default CommentCard;

