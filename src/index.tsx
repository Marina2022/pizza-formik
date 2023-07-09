import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {BrowserRouter} from "react-router-dom";
import {configureStore} from "@reduxjs/toolkit";
import filterSlice from "./redux/store/filterSlice";
import {Provider, useDispatch} from "react-redux";
import cartSlice from "./redux/store/cartSlice";
import pizzaSlice from "./redux/store/pizzaSlice";

const store = configureStore({
    reducer: {
      filters: filterSlice,
      cart: cartSlice,
      pizza: pizzaSlice,
    }
  }
)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: ()=>AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ Provider>
  )



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


// ReactDOM.createRoot(document.getElementById("root")).render(
// <React.StrictMode>
// <RouterProvider router={router}/>
// <App/>
// </React.StrictMode>
// );





