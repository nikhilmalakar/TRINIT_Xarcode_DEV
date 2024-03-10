import Category from "./Category/Category.jsx";
import Price from "./Price/Price.jsx";
// import Colors from "./Colors/Colors.jsx";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <a href="/">
            <h1 className=" text-sm uppercase text-[#0699cd] transition-colors hover:text-blue-1000">
              LinguaConnect
            </h1>
          </a>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        {/* <Colors handleChange={handleChange} /> */}
      </section>
    </>
  );
};

export default Sidebar;
