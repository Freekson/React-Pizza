import "./scss/main.scss";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

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
          <PizzaBlock title="pizza 1" price={50} />
          <PizzaBlock title="pizza 2" price={60} />
          <PizzaBlock title="pizza 3" price={45} />
        </section>
      </div>
    </div>
  );
}

export default App;
