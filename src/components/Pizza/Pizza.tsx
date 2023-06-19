import {useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

const Pizza: React.FC = () => {

  const {id} = useParams()

  type PizzaData = {
    price: number,
    imageUrl: string,
    title: string

  }
  const [pizzaData, setPizzaData] = useState<PizzaData | null>(null)

  const navigate = useNavigate()

  useEffect(() => {

    const fetchPizza = async () => {
      try {
        const pizzaData = await axios.get('https://647794b29233e82dd53be1a1.mockapi.io/items/' + id)
        setPizzaData(pizzaData.data)
      } catch (err) {
        alert('error')
        navigate('/')
      }
    }
    fetchPizza();
  }, [id, navigate])


  if (!pizzaData) return <div className="container">...loading</div>

  return (

    <div>
      <div className="container">
        <h1 style={{'marginBottom': 100}}>{pizzaData.title} </h1>
        <img src={pizzaData.imageUrl} alt=""/>
        <p style={{'fontSize': 35}}>{pizzaData.price} руб</p>
      </div>

    </div>
  );
};

export default Pizza;
