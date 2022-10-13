const Profile = ({ name, job, img }) => {
  return (
    <div className='Profile'>
      <img src={img} alt='person' />
      <p>Name: {name}</p>
      <p> Job: {job}</p>
    </div>
  );
};

export default Profile;
