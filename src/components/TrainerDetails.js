/* eslint-disable no-unused-vars */
import { useLocation } from 'react-router-dom';

const TrainerDetails = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <section>
      <h1 className="text-center">Details</h1>
      <h2>{state.full_name}</h2>
    </section>
  );
};
export default TrainerDetails;
