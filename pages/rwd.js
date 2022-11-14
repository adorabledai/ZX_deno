import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Unstable_Grid2'
import LinkIcon from '@mui/icons-material/Link'
import TextField from '@mui/material/TextField'
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

export default function FullWidthGrid() {
    const [width, setWidth] = useState()
    useEffect(() => {
        if (window) {
            window.addEventListener('resize', () => {
                setWidth(window.innerWidth)
            })
            setWidth(window.innerWidth)
        }
    }, [])
    return (
        <>
            <h1>Screen width : {width}px</h1>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={12} sm={6} md={8}>
                        {/* <Item sx={{ background: '#ee6c4d' }}>xs=12 sm=6 md=8</Item> */}
                        <TextField
                            label="Input1"
                            variant="outlined"
                            placeholder="xs=12 sm=6 md=8"
                            sx={{ width: '100%', background: '#ee6c4d' }}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                        {/* <Item sx={{ background: '#aacc00' }}>xs=12 sm=6 md=4</Item> */}
                        <TextField
                            label="Input2"
                            variant="outlined"
                            placeholder="xs=12 sm=6 md=4"
                            sx={{ width: '100%', background: '#aacc00' }}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} md={4}>
                        {/* <Item sx={{ background: '#98c1d9' }}>xs=12 sm=6 md=4 </Item> */}
                        <TextField
                            label="Input3"
                            variant="outlined"
                            placeholder="xs=12 sm=6 md=4"
                            sx={{ width: '100%', background: '#98c1d9' }}
                        />
                    </Grid>
                    <Grid xs={12} sm={6} md={8}>
                        {/* <Item sx={{ background: '#e0fbfc' }}>xs=12 sm=6 md=8 </Item> */}
                        <TextField
                            label="Input4"
                            variant="outlined"
                            placeholder="xs=12 sm=6 md=8"
                            sx={{ width: '100%', background: '#e0fbfc' }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <div>
                <h5>
                    <a href="https://mui.com/material-ui/react-grid/#main-content">
                        <LinkIcon />
                        RWD Grid System
                    </a>
                </h5>
                <ul>
                    <li>xs, extra-small: 0px</li>
                    <li>sm, small: 600px</li>
                    <li>md, medium: 900px</li>
                    <li>lg, large: 1200px</li>
                    <li>xl, extra-large: 1536px</li>
                </ul>
            </div>
        </>
    )
}
