import React, {createContext, useState} from "react"
import {headCells} from "../components/EditableTable/mock_data.js"

export const FilterContext = createContext()

export default function FilterProvider({children}) {
    const [list, setList]=useState(headCells)
    return <FilterContext.Provider value={{list, setList}}>{children}</FilterContext.Provider>
};

