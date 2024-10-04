import "./Profile.module.css";

const Profile = (props) => {
  return ( 
    <div className="profile-info">
      <div className="main-info">
        <img className="img-profile"
          src={props.image}
          alt={`${props.name}'s photo`} // Fixed alt attribute
        />
        <p className="name-profile">{props.name}</p>
        <p className="tag-profile">&#64;{props.tag}</p>
        <p className="location-profile">{props.location}</p>
      </div>

      <ul className="list-stats">
        <li className="list-stats-elem">
          <span >Followers</span>
          <span className="followers">{props.stats.followers}</span>
        </li>
        <li className="list-stats-elem">
          <span>Views</span>
          <span className="views">{props.stats.views}</span>
        </li>
        <li className="list-stats-elem">
          <span>Likes</span>
          <span className="likes">{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;