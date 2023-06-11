import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {BrowserRouter, createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from "./pages/404";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import {configureStore} from "@reduxjs/toolkit";
import filterSlice from "./redux/store/filterSlice";
import {Provider} from "react-redux";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <NotFound />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "cart",
//         element: <Cart />,
//       },
//       {
//         path: "*",
//         element: <NotFound />,
//       },
//     ],
//   },
// ]);

const store = configureStore({
    reducer: {
      filters: filterSlice
    }
  }
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ Provider>
)


// ReactDOM.createRoot(document.getElementById("root")).render(
// <React.StrictMode>
// <RouterProvider router={router}/>
// <App/>
// </React.StrictMode>
// );
