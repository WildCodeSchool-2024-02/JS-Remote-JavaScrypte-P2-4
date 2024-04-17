import style from "./filter.module.css";

export default function Filter() {
  const saveAllergy = (str, bool) => {
    localStorage.setItem(str, bool);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    localStorage.setItem("vegetarian", form[0].value);
    localStorage.setItem("limit", form[1].value);
  };

  return (
    <>
      <div className={style.allergies}>
        <p>Avez-vous des allérgies ?</p>
        <div>
          <button
            className={style.buttonAllergies}
            type="button"
            onClick={() => saveAllergy("arachides", true)}
          >
            Arachides
          </button>
          <button
            type="button"
            className={style.buttonAllergies}
            onClick={() => saveAllergy("fruits-de-mer", true)}
          >
            Crustacées
          </button>
          <button
            type="button"
            className={style.buttonAllergies}
            onClick={() => saveAllergy("poisson", true)}
          >
            Poisson
          </button>
          <button
            type="button"
            className={style.buttonAllergies}
            onClick={() => saveAllergy("lactose", true)}
          >
            Lactose
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={style.vegetarian}>
          <label>
            Êtes-vous végétarien ?
            <select name="vegetarian">
              <option value="">Peu importe</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </select>
          </label>
        </div>
        <div className={style.limit}>
          <label>
            Combien de résultats souhaiteriez vous obtenir ?
            <select name="limit">
              <option value="">Sélectionnez un nombre</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
        </div>
        <button type="submit">Continuer</button>{" "}
      </form>
    </>
  );
}
