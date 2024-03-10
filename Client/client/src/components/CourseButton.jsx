const CourseButton = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns m-5">
      {title}
    </button>
  );
};

export default CourseButton;
