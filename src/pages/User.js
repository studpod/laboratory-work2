import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  return <h2>Інформація про користувача з ID: {id}</h2>;
};

export default User;
