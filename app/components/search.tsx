'use client'

import { useState } from "react"
import { SearchManufacturer } from "./searchManufacturer"


export default function Pesquisa() {

    const [manufacturer, setManufacturer] = useState('')

    const handleSearch = () => {
        
    }

    return (
        <form action="" onSubmit={handleSearch}>
            <div>
                <SearchManufacturer manufacturer={manufacturer}
                setManufacturer={setManufacturer} />                
            </div>
        </form>
    )
}