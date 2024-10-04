
import './App.css'
import Profile from './profile/Profile'
import userData from './profile/userData.json';
import FriendList from './friends/FriendList.jsx'
import friendData from './friends/friends.json';

function App() {
 

  return (
    <>
       <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
       <FriendList friends={friendData} />
    </>
  )
}

export default App
