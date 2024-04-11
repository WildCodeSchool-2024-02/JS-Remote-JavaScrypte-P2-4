import {useState, useEffect} from "react";
import Featured from "./components/featured/Featured"
import Navbar from "./components/navbar/Navbar";
import "./App.css";


function App() {
  const [imageURL, setImageURL] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
    .then((response) => response.json())
    .then((data) => {
      const tempData = data.meals.slice(0, 4);
      setImageURL(tempData.map((m) => m.strMealThumb))
    })
  }, []);
  // console.info(imageURL)

  return (
    <>
      <Navbar />
      <div className="container">
        <input type="text" placeholder="Enter your name" className="inputName" />
        <button type="button" className="mainButton"> Start </button>
        <h2> Most Popular </h2>
            <div className="featuredImages">
              {imageURL && imageURL.map((i, index) => {
                const id = index + 0.1
                return <Featured key={id} imageURL={imageURL[index]} />
              })}
            </div>
      </div>
    </>
  );
}
export default App;