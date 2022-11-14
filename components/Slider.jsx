import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'

export default function DiscreteSlider({ value, setValue }) {
    const marks = []
    function makeMarks(step, maxV) {
        for (let i = 1; i <= maxV / step; i++) {
            marks.push({
                value: step * i,
                label: `${step * i}`,
            })
        }
        return marks
    }
    function valuetext(value) {
        return `${value}°C`
    }
    return (
        <Box sx={{ width: 500, padding: '1rem' }}>
            <Slider
                aria-label="Temperature"
                defaultValue={20}
                value={value}
                valueLabelDisplay="on"
                getAriaValueText={valuetext}
                sx={{ color: 'rgb(104, 201, 38)' }}
                step={20}
                marks={makeMarks(20, 120)}
                min={0}
                max={110}
                onChange={(evt) => {
                    setValue(evt.target.value)
                }}
            />
        </Box>
    )
}
