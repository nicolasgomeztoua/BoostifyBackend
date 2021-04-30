const ProfileCard = ({ userImg, username }) => {
  return (
    <div>
      <main className="container-profile-profile-card">
        <div className="profile-card">
          <img src={userImg} alt="User " className="profile-card__image" />
          <div className="profile-card__text">
            <h2>{username}</h2>
          </div>
          <ul className="profile-card__info">
            <li>
              <span className="profile-card__info__stats">172</span>
              <span>posts</span>
            </li>
            <li>
              <span className="profile-card__info__stats">47</span>
              <span>followers</span>
            </li>
            <li>
              <span className="profile-card__info__stats">20</span>
              <span>following</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default ProfileCard;
