/* eslint-disable no-unused-vars */
import { useLocation } from 'react-router-dom';

const TrainerDetails = () => {
  const location = useLocation();
  const { state } = location;

  return (
    <section className="trainer-details d-flex">
      <div className="trainer-img d-flex justify-content-center">
        <img src={state.profile_pic} alt={state.full_name} />
      </div>
      <div className="trainer-details d-flex flex-column">
        <div className="trainer-name">
          <h1>{state.full_name}</h1>
          {state.speciality.map((item) => <small key={item}>{item}</small>)}
        </div>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Location</td>
              <td>{state.address}</td>
            </tr>
            <tr>
              <td>Price</td>
              <td>{state.price}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{state.height_in_meter}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{state.weight_in_kg}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{state.weight_in_kg}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default TrainerDetails;
