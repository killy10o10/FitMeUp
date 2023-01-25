import React from 'react';
import { useSelector } from 'react-redux';
import personalTrainer from '../images/personal-trainer.png';

const Home = () => {
  const trainerSelector = useSelector((state) => state);
  const { trainers } = trainerSelector;
  console.log(trainers);
  return trainers.length > 0 ? (
    <>
      <section className="home container d-flex flex-column align-items-center">
        <div className="mt-5 pt-5">
          <h1 className="text-uppercase text-center ">Industry Level Trainers</h1>
          <h4 className="text-secondary fs-5 text-center">Please select a trainer from list</h4>
        </div>
        <div className="trainer-showcase p-5 d-flex gap-3">
          {/* card */}
          <div className="trainer-card gap-5 d-flex flex-column align-items-center justify-content-center">
            <div className="trainer-image-container d-flex align-items-center justify-content-center">
              <img src={trainers[0].profile_pic} alt="killy" />
            </div>
            <div className="trainer-info">
              <div className="trainer-name d-flex flex-column align-items-center p-2">
                <h2 className="text-center">John Aakash</h2>
                <hr className="horizontal-border" />
              </div>
              <div className="trainer-description">
                <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quod ullam dolor. Ipsam dignissimos consectetur molestiae rem iusto natus nihil perferendis!</p>
              </div>
              <div className="trainer-handles d-flex align-items-center justify-content-center gap-1">
                <i className="bi bi-twitter" />
                <i className="bi bi-instagram" />
                <i className="bi bi-telephone" />
              </div>
            </div>
          </div>
          {/* card */}
          <div className="trainer-card gap-5 d-flex flex-column align-items-center justify-content-center">
            <div className="trainer-image-container d-flex align-items-center justify-content-center">
              <img src={personalTrainer} alt="killy" />
            </div>
            <div className="trainer-info">
              <div className="trainer-name d-flex flex-column align-items-center p-2">
                <h2 className="text-center">John Aakash</h2>
                <hr className="horizontal-border" />
              </div>
              <div className="trainer-description">
                <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quod ullam dolor. Ipsam dignissimos consectetur molestiae rem iusto natus nihil perferendis!</p>
              </div>
              <div className="trainer-handles d-flex align-items-center justify-content-center gap-1">
                <i className="bi bi-twitter" />
                <i className="bi bi-instagram" />
                <i className="bi bi-telephone" />
              </div>
            </div>
          </div>
          {/* card */}
          <div className="trainer-card gap-5 d-flex flex-column align-items-center justify-content-center">
            <div className="trainer-image-container d-flex align-items-center justify-content-center">
              <img src={personalTrainer} alt="killy" />
            </div>
            <div className="trainer-info">
              <div className="trainer-name d-flex flex-column align-items-center p-2">
                <h2 className="text-center">John Aakash</h2>
                <hr className="horizontal-border" />
              </div>
              <div className="trainer-description">
                <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quod ullam dolor. Ipsam dignissimos consectetur molestiae rem iusto natus nihil perferendis!</p>
              </div>
              <div className="trainer-handles d-flex align-items-center justify-content-center gap-1">
                <i className="bi bi-twitter" />
                <i className="bi bi-instagram" />
                <i className="bi bi-telephone" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  ) : <p>Loading Data...</p>;
};

export default Home;
