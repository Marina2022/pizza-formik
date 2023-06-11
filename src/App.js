import './scss/app.scss';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import React, {useState} from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./components/NotFound/NotFound";

function App() {

  const [searchValue, setSearchValue] = useState('')


  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          {/*<Outlet />*/}
          <Routes>
            <Route element={<Home searchValue={searchValue}  />} path={'/'} />
            <Route element={<Cart />} path={'/cart'} />
            <Route element={<NotFound />} path={'*'} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
