// We are deconstructing the props object directly in the parentheses of the function


function CommentCard({user, description}) {
  return (
    <div className="CommentCard">
      <h5>Comment:</h5>
      <p>{description}</p>
    </div>
  );
}

export default CommentCard;
