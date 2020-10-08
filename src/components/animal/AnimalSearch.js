import React, { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalSearch = () => {
    const { setSearchTerms } = useContext(AnimalContext)

    return (
        <>
            <h3>Animal search: </h3>
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setSearchTerms(keyEvent.target.value)
                }
                placeholder="Search for an animal... " />
        </>
    )
}