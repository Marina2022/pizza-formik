import './scss/app.scss';
import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout";
import Pizza from "./components/Pizza/Pizza";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>} path={'/'}>
          <Route element={<Home/>} path={''} />
          <Route element={<Pizza/>} path={'pizzas/:id'} />
          <Route element={<Cart/>} path={'cart'}>
            <Route element={<div>Я в корзине проживаю</div>} path={'live'}/>
            <Route element={<div>Убегаю, убегаю</div>} path={'run'}/>
          </Route>
          <Route element={<NotFound/>} path={'*'}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
