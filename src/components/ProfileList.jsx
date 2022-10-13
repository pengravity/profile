import Profile from './Profile';
import { profileData } from '../profileData';

const ProfileList = () => {
  return (
    <>
      <h1>Team members</h1>
      <div className='profile-container'>
        {profileData.map((profile) => (
          <Profile
            key={profile.id}
            name={profile.name}
            job={profile.job}
            img={profile.img}
          />
        ))}
      </div>
    </>
  );
};

export default ProfileList;
