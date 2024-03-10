import { useState, useEffect } from "react";

import Navigation from "../Navigation/Nav.jsx";
import Products from "../Products/Products.jsx";
// import result from "../db/data.jsx";
import Recommended from "../Recommended/Recommended.jsx";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Card from "../components/Card.jsx";
// import Header from "./Header.jsx";

function CourseGrid() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/tutor/getTutors", {
        method: "GET",
      });
      const res2 = await fetch("http://localhost:3000/language/getLanguages", {
        method: "GET",
      });

      const data1 = await res2.json();
      const data2 = await response.json();
      // console.log(data);

      for (let i = 0; i < data2.length; i++) {
        for (let j = 0; j < data1.length; j++) {
          for (let k = 0; k < data2[i].languages.length; k++) {
            if (data2[i].languages[k].languageID === data1[j]._id) {
              data2[i].languages[k].languageID = data1[j].name;
            }
          }
        }
      }
      const data = [];
      for (let i = 0; i < data2.length; i++) {
        let name = data2[i].name;
        for (let j = 0; j < data2[i].languages.length; j++) {
          let language = data2[i].languages[j].languageID;
          let yearsOfExperience = data2[i].yearsOfExperience;
          let duration1 = data2[i].languages[j].prices[0].duration;
          let cost1 = data2[i].languages[j].prices[0].cost;
          let duration2 = data2[i].languages[j].prices[1].duration;
          let cost2 = data2[i].languages[j].prices[1].cost;
          let duration3 = data2[i].languages[j].prices[2].duration;
          let cost3 = data2[i].languages[j].prices[2].cost;
          let startTime = data2[i].availability.startTime;
          let endTime = data2[i].availability.endTime;
          data.push({
            language,
            name,
            duration: duration1,
            cost: cost1,
            yearsOfExperience,
            startTime,
            endTime,
          });
          data.push({
            language,
            name,
            duration: duration2,
            cost: cost2,
            yearsOfExperience,
            startTime,
            endTime,
          });
          data.push({
            language,
            name,
            duration: duration3,
            cost: cost3,
            yearsOfExperience,
            startTime,
            endTime,
          });
        }
      }
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("products", products);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [query, setQuery] = useState("");
  //  return (
  //     <div className="App">
  //       <h1>Data Display</h1>
  //       <div className="card-container">
  //         {
  //           products.map(
  //     ({ name, language, yearsOfExperience, duration, cost, startTime, endTime }) => (
  //          <Card
  //            key={Math.random()}
  //            name={name}
  //            language={language}
  //            yearsOfExperience={yearsOfExperience}
  //            duration={duration}
  //            cost={cost}
  //            startTime={startTime}
  //            endTime={endTime}
  //          />
  //        ))
  //         }
  //       </div>
  //     </div>
  //   );

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.language.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(parseInt(event.target.value));
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    console.log(selected);
    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ yearsOfExperience, cost }) => {
          console.log(
            "yearsOfExperience",
            yearsOfExperience,
            "price",
            cost,
            "selected",
            selected
          );
          if (selected >= 15) {
            return cost <= selected;
          }
          if (selected === 4) {
            return yearsOfExperience >= selected;
          }
          return yearsOfExperience === selected || cost === selected;
        }
      );
    }
    let images = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTel-iPvHF4evF-6jJwXfYLsYsitI10M02YduHCnZxUqUNz4JlL7Ge8JjTQwC2w3Nczrzg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYCT042PG7YBItDtlwvv4k5XVId6QXRxoByfE5IRyKnysJ-LXAr0gcczTTZQL8MF-GNYg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv3BLpCHtXR6Dqqnhx1J_PPY6ZBkaHslNpSXJRpi5ON7bTE8gwdH-8_NbHNs8Z7hZtHa0&usqp=CAU",
      "data:image/jpeg;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1awlC6dZpPEomwEBteQwUh2cYpJggBH-jYfm3i6CYKqjTJB99KGHIIFsk-id1cPoGLzc&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYmUEt3O5lM0FT-95vw5FkTTwgoE_-VZKUE1gQ3kw1KZSSxPAmAskGlqjyL0pe7Uy8KA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYDsi3RukdgtMJ0hN96vvy7jW4SrpIMN0VqClchnPCSiBeBHz7OuyVRbjdhfsNwsGBhik&usqp=CAU",
    ];
    let idx = 0;
    return filteredProducts.map(
      ({
        name,
        language,
        yearsOfExperience,
        duration,
        cost,
        startTime,
        endTime,
      }) => (
        <Card
          key={Math.random()}
          img={images[idx++ % images.length]}
          name={name}
          language={language}
          yearsOfExperience={yearsOfExperience}
          duration={duration}
          cost={cost}
          startTime={startTime}
          endTime={endTime}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      {/* <Header /> */}
      <div className="container">
        <Sidebar handleChange={handleChange} />
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleClick} />
        <Products result={result} />
      </div>
    </>
  );
}
export default CourseGrid;
