import { Container, Stack } from '@mui/system';
import React, { useState } from 'react';
import Slides from './Slides';

export default function Header() {
    const [slider, setSlider] = useState(0);
    const colors = ["#EECCD7", "#00ff88", "#ffee52"];

    return (
        <header style={{ background: colors[slider] }} className='header'>
            <Container sx={{pt: 5}} maxWidth="lg">
                <Slides slider={slider} />
            </Container>

            <Stack justifyContent="center" flexDirection="row">
                <div onClick={() => setSlider(0)} className={`controller ${slider == 0 ? 'active' : ""}`}></div>
                <div onClick={() => setSlider(1)} className={`controller ${slider == 1 ? 'active' : ""}`}></div>
                <div onClick={() => setSlider(2)} className={`controller ${slider == 2 ? 'active' : ""}`}></div>
            </Stack>
        </header>
    )
}
