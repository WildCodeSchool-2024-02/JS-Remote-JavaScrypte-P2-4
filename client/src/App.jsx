import { useState, useEffect } from "react";
import Featured from "./components/featured/Featured";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  const [imageURL, setImageURL] = useState([]);
  let id = [];
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      .then((response) => response.json())
      .then((data) => {
        const tempData = data.meals.slice(0, 4);
        id = tempData.map((t) => t.idMeal);
        setImageURL(tempData.map((m) => m.strMealThumb));
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <input
          type="text"
          placeholder="Enter your name"
          className="inputName"
        />
        <button type="button" className="mainButton">
          {" "}
          Start{" "}
        </button>
        <h2> Most Popular </h2>
        <div className="featuredImages">
          {imageURL &&
            imageURL.map((i, index) => (
              <Featured key={id[index]} imageURL={i} />
            ))}
        </div>
      </div>
    </>
  );
}
export default App;
