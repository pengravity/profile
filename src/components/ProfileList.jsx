import Profile from './Profile';
import { profileData } from '../profileData';

const ProfileList = () => {
  return (
    <div>
      {profileData.map((profile) => (
        <Profile
          key={profile.id}
          name={profile.name}
          job={profile.job}
          img={profile.img}
        />
      ))}
    </div>
  );
};

export default ProfileList;
