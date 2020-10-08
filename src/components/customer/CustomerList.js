import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import "./Customer.css"
import { useHistory } from 'react-router-dom';

export const CustomerList = () => {
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getCustomers()

    }, [])

    const history = useHistory()

    return (
        <>
            <h2>Customers</h2>
            <div className="customers">
                {
                    customers.map(customer => {
                        return <CustomerCard key={customer.id} customer={customer} />
                    })
                }
            </div>
        </>
    )
}