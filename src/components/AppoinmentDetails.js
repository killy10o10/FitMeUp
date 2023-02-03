import { useSelector } from 'react-redux';

const AppoinmentDetails = () => {
  const { appointments } = useSelector((state) => state.currentuser.data);

  const appointmentTable = appointments.map((appointment) => (
    <table key={appointment.id} className="table appointment-details table-dark table-striped shadow-sm">
      <tbody>
        <tr>
          <td className="fw-bold">Appointment Date</td>
          <td>{appointment.appointment_date}</td>
        </tr>
        <tr>
          <td className="fw-bold">Trainer</td>
          <td>{appointment.full_name}</td>
        </tr>
        <tr>
          <td className="fw-bold">Price</td>
          <td>{appointment.price}</td>
        </tr>
        <tr>
          <td className="fw-bold">Appointment Status</td>
          <td>{appointment.appointment_status}</td>
        </tr>
      </tbody>
    </table>
  ));

  return (
    <section className="appoint-details-section">
      <div className="bg-pink d-flex flex-column align-items-center justify-content-center">
        <h1 className="text-center">Appointment Details</h1>
        {
          appointmentTable
        }
      </div>
    </section>
  );
};

export default AppoinmentDetails;
