import React, { useContext, useEffect } from "react"
import { LocationCard } from "./LocationCard"
import { LocationContext } from "./LocationProvider"
import "./Location.css"


export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => { getLocations() }, [])

    return (
        <>
            <h2>Locations</h2>
            <div className="locations">
                {
                    locations.map(location => {
                        return <LocationCard key={location.id} location={location} address={location.address} />
                    })
                }
            </div>
        </>
    )
}