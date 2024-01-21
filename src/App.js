import './App.css';
import OrderForm from './Components/OrderForm';
import OrderDetails from './Components/OrderDetails';
import Orderctx from './store/Orderctx';
import { useEffect, useState } from 'react';

function App() {
  const [orders, setOrders] = useState([])
  useEffect(()=>{
    if (localStorage.getItem('restaurantOrders')) {
      setOrders(()=>JSON.parse(localStorage.getItem('restaurantOrders')))
    }
  },[])
  useEffect(() => {
    if (orders.length > 0) {
      localStorage.setItem('restaurantOrders', JSON.stringify(orders))
    }
  }, [orders])
  return (
    <Orderctx.Provider value={{ orders: orders, setOrders: setOrders }}>
      <OrderForm />
      {orders.length > 0 && <OrderDetails />}
    </Orderctx.Provider>
  );
}

export default App;
