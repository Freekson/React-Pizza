import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";

import "./scss/main.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import EmptyCart from "./pages/EmptyCart";
import NotFound from "./components/NotFound";

export const AppContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="App">
      <div className="wrapper">
        <AppContext.Provider
          value={{ searchValue, setSearchValue, currentPage, setCurrentPage }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/cart" element={<Cart />} />
            <Route path="/empty-cart" element={<EmptyCart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
