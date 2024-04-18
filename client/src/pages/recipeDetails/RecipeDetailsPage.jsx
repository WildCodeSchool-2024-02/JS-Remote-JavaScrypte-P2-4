import { useEffect, useState } from "react";

export default function RecipeDetails() {
  const [datas, setDatas] = useState(null);
  const [loader, setLoader] = useState(false);

  // useEffect (() => {
  //     fetch ("http://localhost:3310/recipes/1")
  //     .then((response) => response.json())
  //     .then((data) => setDatas(data))
  //     .catch(err => console.error(err));
  // }, []);
  // console.info(datas)

  useEffect(() => {
    const fetchDatas = async () => {
      const response = await fetch("http://localhost:3310/recipes/1");
      const data = await response.json();

      setDatas(data);
      setLoader(true);
    };
    fetchDatas();
  }, []);
  console.info(loader);

  return (
    <div>
      <h1>La recette</h1>
      {datas}
    </div>
  );
}
