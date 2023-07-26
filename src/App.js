import "./scss/main.scss";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

import pizzas from "./pizzas.json";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <nav className="nav">
          <Categories />
          <Sort />
        </nav>
        <h3>All pizzas</h3>
        <section className="pizza">
          {pizzas.map((item, index) => {
            return <PizzaBlock {...item} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
