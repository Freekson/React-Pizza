function Sort() {
  return (
    <div className="nav__sort active">
      <img src="assets/arrow.svg" alt="^-^" />
      <p>
        Sort by <span>popularity</span>
      </p>
      <ul className="nav__menu nav__menu_active">
        <li className="menu__item menu__item_active">popularity</li>
        <li className="menu__item">price</li>
        <li className="menu__item">alphabet</li>
      </ul>
    </div>
  );
}
export default Sort;
