import { useContext, useRef } from "react";
import Orderctx from "../store/Orderctx";

const OrderForm = () => {
    const orderCtx = useContext(Orderctx)
    const oidRef = useRef()
    const priceRef = useRef()
    const diskRef = useRef()
    const tableRef = useRef()
    const formHandler = (event) => {
        event.preventDefault()
        if (oidRef.current.value === '' || priceRef.current.value === '' || tableRef.current.value === '' || diskRef.current.value === '') {
            alert('please fill all fields')
            return
        }
        for (var i = 0; i < orderCtx.orders.length; i++) {
            if (orderCtx.orders[i][0] === oidRef.current.value) {
                alert('Please use Unique Order Id')
                return
            }
        }
        
        const newOrder = [oidRef.current.value, priceRef.current.value, tableRef.current.value, diskRef.current.value]
        orderCtx.setOrders(() => [...orderCtx.orders, newOrder])
    }

    return (
        <form onSubmit={formHandler}>
            <label>Unique Order Id</label>
            <input ref={oidRef} type="text" />
            <label>Choose Price</label>
            <input ref={priceRef} type="number" />
            <label>Choose Disk</label>
            <input ref={diskRef} type="text" />
            <label>Table</label>
            <select ref={tableRef}>
                <option value="table1">Table 1</option>
                <option value="table2">Table 2</option>
                <option value="table3">Table 3</option>
            </select>
            <button type="submit">Add to Bill</button>
        </form>
    )
}

export default OrderForm;