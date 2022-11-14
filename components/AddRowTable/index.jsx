import React, { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import TableCellTextField from './TableCellTextField.jsx'
function IniRowData() {
    return {
        name: '',
        calories: '',
        fat: '',
        carbs: '',
        protein: '',
    }
}
export default function BasicTable() {
    const [rows, setRows] = useState([new IniRowData()])
    const removeHandler = (index) => {
        setRows((prev) => {
            const newState = prev.filter((e, i) => i !== index)
            return newState
        })
    }
    const addNewHandler = () => {
        setRows((prev) => {
            return [...prev, new IniRowData()]
        })
    }
    return (
        <TableContainer sx={{ minWidth: 650, maxWidth: '80vw' }}>
            <Table sx={{ minWidth: 650, maxWidth: '80vw' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Calories</TableCell>
                        <TableCell align="center">Fat&nbsp;(g)</TableCell>
                        <TableCell align="center">Carbs&nbsp;(g)</TableCell>
                        <TableCell onClick={() => console.log('on focus')} align="center">
                            Protein&nbsp;(g)
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => {
                        return (
                            <React.Fragment key={index}>
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    {Object.keys(row).map((ele, idx) => {
                                        return (
                                            <TableCellTextField
                                                key={`${ele}-${idx}`}
                                                rowIndex={index}
                                                rowData={row[ele]}
                                                objKey={ele}
                                                handleChange={(newState) => setRows(newState)}
                                            />
                                        )
                                    })}
                                    <TableCell>
                                        <RemoveCircleOutlineIcon
                                            sx={{
                                                opacity: `${rows.length >= 2 ? 1 : 0}`,
                                                fontSize: '2rem',
                                                color: 'deeppink',
                                                float: 'right',
                                                cursor: 'pointer',
                                            }}
                                            onClick={(event) => removeHandler(index, event)}
                                        />
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                        )
                    })}
                </TableBody>
            </Table>
            <AddCircleOutlineIcon
                sx={{
                    fontSize: '2rem',
                    color: 'rgb(104, 201, 38)',
                    float: 'right',
                    right: '2rem',
                    cursor: 'pointer',
                }}
                color="secondary"
                variant="outlined"
                onClick={addNewHandler}
            />
        </TableContainer>
    )
}
