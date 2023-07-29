import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./scss/main.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import EmptyCart from "./pages/EmptyCart";
import NotFound from "./components/NotFound";

function App() {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  return (
    <div className="App">
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} exact />
          <Route path="/cart" element={<Cart />} />
          <Route path="/empty-cart" element={<EmptyCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
