import React from "react";
import { Route, Routes } from "react-router-dom";

import "./scss/main.scss";

import Header from "./components/Header";
import Home from "./pages/Home";

const Cart = React.lazy(
  () => import(/*webpackChunkName: "Catrt"*/ "./pages/Cart")
);
const NotFound = React.lazy(
  () => import(/*webpackChunkName: "NotFound"*/ "./components/NotFound")
);

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <React.Suspense fallback={<div>Page is loading</div>}>
                <Cart />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<div>Page is loading</div>}>
                <NotFound />
              </React.Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
