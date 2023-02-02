import { useSelector } from 'react-redux';

const AppoinmentDetails = () => {
  const { appointments } = useSelector((state) => state.currentuser.data);
  console.log(appointments);
  return (
    <section className="appoint-details-section">
      <div className="bg-pink">
        <h1 className="text-center">Appointment Details</h1>
      </div>
    </section>
  );
};

export default AppoinmentDetails;
