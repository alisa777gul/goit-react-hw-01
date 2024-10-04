import "./FriendList.module.css";

import FriendListItem from "./FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div className="friends-box">
    
 <ul className="friends-list">
        {friends.map(friend => (
          <FriendListItem key={friend.id} friend={friend} /> 
        ))}
      </ul>
    </div>
  );
};



export default FriendList;