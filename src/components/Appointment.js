function Appointment() {
  return (
    <section className="appointments">
      <div className="appointments-green">
        <div className="book-trainer d-flex flex-column align-items-center justify-content-center">
          <div className="title p-2 border-bottom">
            <h1 className="text-center">Book A Professional Trainer</h1>
          </div>
          <div className="booking-intro p-3">
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint quibusdam quas deserunt ea corporis est quaerat magni hic dignissimos, labore tempore. Recusandae sapiente facere aspernatur assumenda atque vitae nisi!</p>
          </div>
          <div className="booking-buttons d-flex gap-3">
            <select className="book-btn select" name="trainers" id="trainers">
              <option value="kampala">Kampala</option>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="congo">Congo</option>
              <option value="accra">Accra</option>
            </select>
            <button type="button" className="book-btn book">Search Trainer</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointment;