import { useContext } from "react";
import Orderctx from "../store/Orderctx";

const OrderList = (props) => {
    const orderCtx = useContext(Orderctx)

    const deleteHandler = (event) => {
        const oid = event.target.getAttribute('id')
        const ordersFilter = orderCtx.orders.filter(o => o[0] !== oid)
        orderCtx.setOrders(() => ordersFilter)
    }
    return (
        <li>{`${props.order[1]} - ${props.order[2]} - ${props.order[3]}`}
            <button id={props.order[0]} onClick={deleteHandler}>delete order</button>
        </li>
    )
}

const OrderDetails = () => {
    const orderCtx = useContext(Orderctx)
    const tableOne = orderCtx.orders.filter(o => o[2] === 'table1')
    const tableTwo = orderCtx.orders.filter(o => o[2] === 'table2')
    const tableThree = orderCtx.orders.filter(o => o[2] === 'table3')

    return (
        <div>
            <h1>Orders</h1>
            <h4>Table 1</h4>
            <ul>
                {tableOne.map((ord, idx) => {
                    return <OrderList order={ord} key={idx} />
                })}
            </ul>
            <h4>Table 2</h4>
            <ul>
                {tableTwo.map((ord, idx) => {
                    return <OrderList order={ord} key={idx} d />
                })}
            </ul>
            <h4>Table 3</h4>
            <ul>
                {tableThree.map((ord, idx) => {
                    return <OrderList order={ord} key={idx} />
                })}
            </ul>
        </div>
    )
    // })




}

export default OrderDetails;