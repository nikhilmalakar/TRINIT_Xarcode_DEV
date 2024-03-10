import { BsFillBagFill } from "react-icons/bs";

const Card = ({
  img,
  name,
  language,
  yearsOfExperience,
  duration,
  cost,
  startTime,
  endTime,
}) => {
  return (
    <>
      <section className="card">
        <img
          src={img}
          alt={name}
          height={200}
          width={200}
          className="card-img"
        />
        <div className="card-details">
          <h3 className="card-title">
            {name} <span>{yearsOfExperience} YOE</span>
          </h3>
          {/* <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section> */}
          <section>
            <h4>{language}</h4>
            <p>
              {startTime} - {endTime}
            </p>
          </section>
          <section>
            <h4>Availability</h4>
            <p>
              {startTime} - {endTime}
            </p>
          </section>
          <section className="card-price">
            <div className="price">
              <span>{duration} mins</span> ${cost}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
