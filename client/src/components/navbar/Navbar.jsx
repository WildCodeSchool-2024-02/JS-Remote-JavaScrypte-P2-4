import style from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={style.navbar}>
      <img className={style.logo} src="src/assets/logos/logo.png" alt="logo" />
      <h1 className={style.title}> HomelyFood </h1>
      <ul>
        <li>
          <button type="button" value="list">
            <img
              className={style.logolist}
              src="src/assets/logos/list.png"
              alt="list"
            />
          </button>
        </li>
        <li>
          <button type="button" value="meals">
            <img
              className={style.logomeal}
              src="src/assets/logos/meal.png"
              alt="meals"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
