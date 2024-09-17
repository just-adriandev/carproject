'use client'

import { useState } from "react"
import { SearchManufacturer } from "./searchManufacturer"
import { SearchBtn } from "./button"

export default function Search() {

    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')

    const handleSearch = () => {
        
    }

    return (
        <form onSubmit={handleSearch}>
            <div>
                <SearchManufacturer 
                manufacturer={manufacturer}
                setManufacturer={setManufacturer} /> 
                <SearchBtn/>     
            </div>
        </form>
    )
}