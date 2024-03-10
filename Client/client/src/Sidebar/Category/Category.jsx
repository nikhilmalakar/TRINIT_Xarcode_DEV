import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">YOE</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="1"
          title="1"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="2"
          title="2"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="3"
          title="3"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="4"
          title="4+"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
