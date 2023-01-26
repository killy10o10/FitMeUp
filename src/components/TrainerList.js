/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const TrainerList = (props) => {
  const { trainers } = props;
  const trainerCard = trainers.map((item) => {
    const {
      full_name, profile_pic, bio,
    } = item;
    return (
      <div key={full_name} className="trainer-card gap-5 d-flex flex-column align-items-center justify-content-center">
        <div className="trainer-image-container d-flex align-items-center justify-content-center">
          <img src={profile_pic} alt={full_name} />
        </div>
        <div className="trainer-info">
          <div className="trainer-name d-flex flex-column align-items-center p-2">
            <h2 className="text-center">{full_name}</h2>
            <hr className="horizontal-border" />
          </div>
          <div className="trainer-description">
            <p className="text-center">{bio}</p>
          </div>
          <div className="trainer-handles d-flex align-items-center justify-content-center gap-1">
            <i className="bi bi-twitter" />
            <i className="bi bi-instagram" />
            <i className="bi bi-telephone" />
          </div>
        </div>
      </div>
    );
  });

  return (
    <Carousel className="py-5" breakPoints={breakPoints}>
      {trainerCard}
    </Carousel>
  );
};

export default TrainerList;
