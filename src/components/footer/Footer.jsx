import { Instagram, Telegram, WhatsApp, YouTube } from '@mui/icons-material';
import { AppBar, Button, IconButton, Stack, TextField, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react';
import logo from "../../assets/images/logo.png";

export default function Footer() {
    return (
        <AppBar sx={{ mt: 8, }} position="static" color='primary'>
            <Toolbar sx={{ justifyContent: "center", flexDirection: "column", p: 5 }}>
                <Stack
                    flexDirection="row"
                    alignItems="center"

                >
                    <img src={logo} width="auto" alt="Gamers logo" />
                    <Typography color="secondary" sx={{ ml: 1 }} variant='h4'>GAMERS</Typography>
                </Stack>
                <Typography variant="subtitle1" sx={{ my: 3 }} color="text.light">
                    Subscribe to email alerts. We promise not to spam your
                    inbox.
                </Typography>
                <Stack flexDirection="row">
                    <TextField className='footerInput' color="secondary" label="Email Address" />
                    <Button sx={{ ml: 1 }} variant="outlined" color="secondary">Subscribe</Button>
                </Stack>

                <Stack sx={{ mt: 3 }} flexDirection="row">
                    <Tooltip arrow title="Telegram">
                        <IconButton size="large" color="inherit"><Telegram fontSize="large" /></IconButton>
                    </Tooltip>
                    <Tooltip arrow title="WhatsApp">
                        <IconButton size="large" color="inherit"><WhatsApp fontSize="large" /></IconButton>
                    </Tooltip>
                    <Tooltip arrow title="You Tube">
                        <IconButton size="large" color="inherit"><YouTube fontSize="large" /></IconButton>
                    </Tooltip>
                    <Tooltip arrow title="Instagram">
                        <IconButton size="large" color="inherit"><Instagram fontSize="large" /></IconButton>
                    </Tooltip>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
