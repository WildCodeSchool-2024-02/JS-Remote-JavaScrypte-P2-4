import { useState, useEffect } from "react";
import Featured from "../components/featured/Featured";

export default function LandingPage() {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3310/featured")
      .then((response) => response.json())
      .then((data) => {
        setFeatured(data);
      });
  }, []);
  console.info(featured);

  return (
    <div className="container">
      <input type="text" placeholder="Entrez votre prénom" className="inputName" />
      <button type="button" className="mainButton">
        Commencer
      </button>
      <h2> Les plus populaires </h2>
      <div className="featuredImages">
        {featured &&
          featured.map((f) => <Featured key={f.id} imageURL={f.image} />)}
      </div>
    </div>
  );
}
