import clsx from "clsx";

const FriendListItem = ({ friend }) => { // Accept the friend prop
  const statusClass = friend.isOnline ? 'isOnline' : 'isOffline';
 
    return (
    <li className="friend-element">
      <div>
        <img
          className="friend-img"
          src={friend.avatar}
          alt={`${friend.name}'s avatar`}
          width="48"
        />
        <p className="friend-name">{friend.name}</p>
        <p className={clsx("friend-status",  statusClass)}>{friend.isOnline ? 'Online' : 'Offline'}</p>
      </div>
    </li>
  );
};

export default FriendListItem;