import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Entrez votre prénom"
        className="inputName"
      />
      <button
        type="button"
        className="mainButton"
        onClick={() => navigate("/search")}
      >
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
