import CourseButton from "../components/CourseButton";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <CourseButton onClickHandler={handleClick} value="" title="All Products" />
          {/* <CourseButton onClickHandler={handleClick} value="Nike" title="Nike" />
          <CourseButton onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <CourseButton onClickHandler={handleClick} value="Puma" title="Puma" />
          <CourseButton onClickHandler={handleClick} value="Vans" title="Vans" /> */}
        </div>
      </div>
    </>
  );
};

export default Recommended;