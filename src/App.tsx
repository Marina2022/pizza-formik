import './scss/app.scss';
import {Route, Routes} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import {Suspense} from 'react'

import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout";
import Pizza from "./components/Pizza/Pizza";
import Form from './pages/Form/Form';
import Form2 from './pages/Form-tsx/old/Form-tsx';
import FormComp from './pages/Form-tsx/old/Form-comp';
import FormikContainer from './pages/Form-tsx/FormikContainer';
import RegFormEx1 from './pages/Form-tsx/RegFormEx1/RegFormEx1';

import {ChakraProvider} from '@chakra-ui/react'
// const Cart = React.lazy(() => import('./pages/Cart'));



function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Suspense fallback={<div>Loading..............</div>}>
          <Routes>
            <Route element={<Layout/>} path={'/'}>
              <Route element={<Home/>} path={''}/>
              <Route element={<Pizza/>} path={'pizzas/:id'}/>
              <Route element={<Form/>} path={'form'}/>
              <Route element={<Form2/>} path={'Formtsx'}/>
              <Route element={<FormComp/>} path={'Form-comp'}/>
              <Route element={<RegFormEx1/>} path={'ex1'}/>
              <Route element={<FormikContainer/>} path={'common-form'}/>
              <Route element={<Cart/>} path={'cart'}>
                <Route element={<div>Я в корзине проживаю</div>} path={'live'}/>
                <Route element={<div>Убегаю, убегаю</div>} path={'run'}/>
              </Route>
              <Route element={<NotFound/>} path={'*'}/>
            </Route>
          </Routes>
        </Suspense>
      </ChakraProvider>
    </div>
)
}

export default App;
