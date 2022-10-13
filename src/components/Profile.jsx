import { BsTwitter } from 'react-icons/bs';
import { SiFacebook } from 'react-icons/si';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Card from './Card';

const Profile = ({ name, job, img }) => {
  return (
    <Card>
      <div className='profile'>
        <img src={img} alt='person' />
        <div className='profile-content'>
          <div className='text'>
            <p> {name}</p>
            <p> {job}</p>
          </div>
          <IconContext.Provider value={{ color: '#666', size: '20px' }}>
            <BsTwitter />
            <SiFacebook />
            <AiOutlineGooglePlus />
          </IconContext.Provider>
        </div>
      </div>
    </Card>
  );
};

export default Profile;
