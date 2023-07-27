import "./scss/main.scss";

import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [pizzas] = await Promise.all([
          axios.get("http://localhost:3001/pizzas"),
        ]);
        setItems(pizzas.data);
      } catch (err) {
        console.log(err);
        alert("Error while data loading");
      }
    }
    fetchData();
  }, []);
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
          {items.map((item) => {
            return <PizzaBlock {...item} key={item.id} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default App;
