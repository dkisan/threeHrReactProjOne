import React from "react"
const Orderctx = React.createContext({
    table1: { orders: [], total: 0 },
    table2: { orders: [], total: 0 },
    table3: { orders: [], total: 0 }
})

export default Orderctx;