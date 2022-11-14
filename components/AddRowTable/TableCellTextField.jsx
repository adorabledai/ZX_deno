import React, { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';
export default function TableCellTextField({ rowIndex, objKey, rowData, handleChange }) {
    const [isValid, setIsValid] = useState(true);

    return (
        <TableCell align="left">
            <TextField
                // inputProps={{ readOnly: 'true' }}
                error={isValid}
                helperText="Required*"
                required
                variant="outlined"
                placeholder={`${objKey.toUpperCase()}`}
                value={rowData}
                onChange={(event) => {
                    const { value } = event.target;
                    if (value.length !== 0) {
                        setIsValid(false);
                    } else {
                        setIsValid(true);
                    }
                    handleChange((prev) => {
                        const newData = [];
                        prev.map((data, i) => {
                            if (rowIndex === i) {
                                data[objKey] = value;
                            }
                            newData.push(data);
                        });
                        return newData;
                    });
                }}
            />
        </TableCell>
    );
}
