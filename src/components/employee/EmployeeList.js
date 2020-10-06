import React, { useContext, useEffect } from "react"
import { EmployeeCard } from "./EmployeeCard"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"


export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        getEmployees()

    }, [])

    return (
        <div className="employees">
            {
                employees.map(employee => {
                    return <EmployeeCard key={employee.id} location={employee.locationId} employee={employee} />
                })
            }
        </div>
    )
}