import style from "./navbar.module.css";
import logoList from "../../assets/logos/list.png";
import logo from "../../assets/logos/logo.png";
import logoMeal from "../../assets/logos/meal.png";


function Navbar() {
  return (
    <nav className={style.navbar}>
      <img className={style.logo} src={logo} alt="logo" />
      <h1 className={style.title} > HomelyFood </h1>
      <ul>
        <li>
          <button type="button" value="list">
            <img
              className={style.logolist}
              src={logoList}
              alt="list"
            />
          </button>
        </li>
        <li>
          <button type="button" value="meals">
            <img
              className={style.logomeal}
              src={logoMeal}
              alt="meals"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
