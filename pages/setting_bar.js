import React from 'react'
import LockableSlider from '../container/LockableSlider'
import LinkIcon from '@mui/icons-material/Link'
export default function setting_bar(params) {
    return (
        <>
            <LockableSlider />
            <h5>
                <a href="https://mui.com/material-ui/react-slider/">
                    <LinkIcon />
                    Material Slider
                </a>
            </h5>
        </>
    )
}
