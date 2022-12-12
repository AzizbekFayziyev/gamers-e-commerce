import { Container, Typography } from '@mui/material'
import React from 'react'
import Blog from '../home/Blog'

export default function Blogs({ status }) {
    return (
        <Container sx={{ mt: 12, mb: 6 }} maxWidth="lg">
            <Typography data-aos="fade-down" sx={{mb: 3}} variant="h4" color="secondary" fontWeight={500}>
                All Blogs
            </Typography>
            <Blog status={status} />
        </Container>
    )
}
