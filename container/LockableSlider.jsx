import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import LockIcon from '@mui/icons-material/Lock'
import Slider from '../components/Slider'

export default function LockableSlider(props) {
    const [locked, setLocked] = useState(false)
    const [value1, setValue1] = useState(20)
    const [value2, setValue2] = useState(20)

    useEffect(() => {}, [locked, value1, value2])
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <div>
                    <Button onClick={() => setLocked((prev) => !prev)}>
                        {locked ? (
                            <LockIcon sx={{ color: 'deeppink' }} />
                        ) : (
                            <LockOpenIcon sx={{ color: 'rgb(104, 201, 38)' }} />
                        )}
                    </Button>
                </div>

                <div>
                    <Slider value={value1} setValue={(v) => setValue1(v)} />
                    <Slider
                        value={locked ? value1 : value2}
                        setValue={(v) => (locked ? setValue1(v) : setValue2(v))}
                    />
                </div>
            </div>
        </>
    )
}
