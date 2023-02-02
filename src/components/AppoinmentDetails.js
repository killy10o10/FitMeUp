import { useSelector } from 'react-redux';

const AppoinmentDetails = () => {
  const { appointments } = useSelector((state) => state.currentuser.data);
  console.log(appointments);
  return (
    <h1>Appointment Details</h1>
  );
};

export default AppoinmentDetails;
