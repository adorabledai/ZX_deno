import React from 'react'
import AddRowTable from '../components/AddRowTable'
import LinkIcon from '@mui/icons-material/Link'
export default function table() {
    return (
        <>
            <AddRowTable />

            <a href="https://mui.com/material-ui/react-table/">
                <LinkIcon />
                Material Table
            </a>
        </>
    )
}

function Car(props) {
    return <h2>Hi, I am a Car!{props.value}</h2>
}

function Outter() {
    return <Car value={carProps} />
}
