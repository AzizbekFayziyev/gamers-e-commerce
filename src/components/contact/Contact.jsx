import { Button, FormControl, TextField, Typography, useMediaQuery } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'

export default function Contact() {
    const media = useMediaQuery('(max-width: 700px)');
    return (
        <Container sx={{ mt: 12, mb: 6 }} maxWidth="lg">
            <Stack flexDirection={media ? "column-reverse" : "row"} justifyContent="space-between" alignItems={media ? "center" : "flex-start"}>
                <Box sx={{ mr: 5, mt: media ? 8 : 0 }}>
                    <Typography
                        data-aos="fade-down"
                        variant="h4"
                        color="secondary"
                        fontWeight={500}
                        gutterBottom
                    >
                        Get In Touch
                    </Typography>

                    <Typography maxWidth={500} color="text.secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque aliquid, vitae veniam aspernatur obcaecati dolores enim, placeat impedit doloremque dolorum! Asperiores repudiandae.
                    </Typography>

                    <FormControl sx={{ mt: 3 }} component="form">
                        <Stack flexDirection="row">
                            <TextField autoFocus color="secondary" sx={{ mr: 2 }} label="Your Name" required />
                            <TextField color="secondary" type="email" label="Your E-mail" />
                        </Stack>

                        <TextField color="secondary" sx={{ my: 3 }} label="subject" required />

                        <TextField color="secondary" multiline label="Type Your Message" rows={4} required />

                        <Button sx={{ mt: 3 }} variant="contained" color="secondary" type="submit">Send Mail</Button>
                    </FormControl>
                </Box>

                <Box>
                    <Typography
                        data-aos="fade-down"
                        variant="h4"
                        color="secondary"
                        fontWeight={500}
                        gutterBottom
                    >
                        Information About Us
                    </Typography>

                    <Typography maxWidth={500} color="text.secondary" paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque aliquid, vitae veniam aspernatur obcaecati dolores enim, placeat impedit doloremque dolorum! Asperiores repudiandae.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur aliquid, dignissimos ex.
                    </Typography>

                    <Stack flexDirection="row">
                        <div style={{ width: 25, height: 25, borderRadius: 50, marginRight: 10, backgroundColor: "#3318ff" }}></div>
                        <div style={{ width: 25, height: 25, borderRadius: 50, marginRight: 10, backgroundColor: "#ff1893" }}></div>
                        <div style={{ width: 25, height: 25, borderRadius: 50, marginRight: 10, backgroundColor: "#18ff42" }}></div>
                        <div style={{ width: 25, height: 25, borderRadius: 50, marginRight: 10, backgroundColor: "#e0ff18" }}></div>
                    </Stack>


                </Box>
            </Stack>
        </Container>
    )
}
