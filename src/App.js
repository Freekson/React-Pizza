import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";

import "./scss/main.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./components/NotFound";

export const AppContext = createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <div className="wrapper">
        <AppContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
