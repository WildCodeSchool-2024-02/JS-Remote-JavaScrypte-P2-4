import { useEffect, useState } from "react";

export default function RecipeDetails() {
  const [datas, setDatas] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    // fetch("http//localhost:3310/recipes/1").then((data) => setDatas(data) && setLoader(true)); 
    const fetchDatas = async () => {
      const response = await fetch("http://localhost:3310/recipes");
      const data = await response.json();

      setDatas(data);
      setLoader(true);
    };
    fetchDatas();
  }, []);
  console.info(loader);
  
  return (
    <div>
      {loader ? datas.recipe : <h3>...</h3>}
      {loader ? datas.map((d) => (
        <>
          <h1>{d.name}</h1>
          <figure>
            <img src={d.image} alt={d.name}/>
            <ficaption>{d.ingredients}</ficaption>
            <ficaption>{d.recipe}</ficaption>
          </figure>
        </>
      )) : null}
    </div>
  );
}
