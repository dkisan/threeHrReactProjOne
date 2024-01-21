import './App.css';
import OrderForm from './Components/OrderForm';
import OrderDetails from './Components/OrderDetails';
import Orderctx from './store/Orderctx';
import {useState } from 'react';

function App() {
  const [orders, setOrders] = useState([])
  return (
    <Orderctx.Provider value={{ orders: orders, setOrders: setOrders }}>
      <OrderForm />
      <OrderDetails />
    </Orderctx.Provider>
  );
}

export default App;
