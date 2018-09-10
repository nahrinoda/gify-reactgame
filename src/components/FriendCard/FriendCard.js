import React from "react";
import "./FriendCard.css";
 
const FriendCard = props => (
  // attach the handleGuesses function (that takes an id)
  <div className="card" onClick={() => props.handleGuesses(props.id)}>
    {/* type will be the class 'shake' that's added/deleted as needed */}
    <div className={`img-container ${props.type}`}>
      {/* the image gets its alt name and source */}
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;