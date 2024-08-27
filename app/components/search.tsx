'use client'

import { useState } from "react"
import { SearchManufacturer } from "./searchManufacturer"
import { SearchBtn } from "./button"
import { setDefaultResultOrder } from "dns"


export default function Search() {

    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')

    const handleSearch = () => {
        
    }

    return (
        <form action="" onSubmit={handleSearch}>
            <div>
                <SearchManufacturer 
                manufacturer={manufacturer}
                setManufacturer={setManufacturer} /> 
                              
            </div>
        </form>
    )
}