import { TrendingFlat } from '@mui/icons-material';
import { Box, Button, Grow, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
// images
import img1 from "../../assets/images/homeImages/bg1.png";
import img2 from "../../assets/images/homeImages/bg2.png";
import img3 from "../../assets/images/homeImages/bg3.png";

export default function Slides({ slider }) {
    const media = useMediaQuery('(max-width: 880px)');
    const slides = [
        {
            title: "Acer Nitro 5",
            subtitle: "Nitro. Hit turbo and keep it going all day with its long-lasting battery.",
            price: 1300,
            img: img3,
        },
        {
            title: "Lenovo Gaming",
            subtitle: "Gaming laptop is the best purchase for any gamer.",
            price: 1286,
            img: img1,
        },
        {
            title: "Acer Predator",
            subtitle: "Go to extremes with the performance of Predator Gaming PCs.",
            price: 1999,
            img: img2,
        },
    ];

    return (
        <>
            <Grow translate="yes" in={true}>

                <Stack
                    flexWrap={media ? "wrap-reverse" : "noWrap"}
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                >

                    <Box className="header__content">
                        <Typography
                            fontWeight={500}
                            variant={media ? "h3" : "h2"}
                            gutterBottom
                        >
                            {slides[slider].title}
                        </Typography>

                        <Typography
                            maxWidth={400}
                            height={80}
                            fontWeight={450}
                            color="text.secondary"
                            variant="h5"
                            gutterBottom
                        >
                            {slides[slider].subtitle}
                        </Typography>

                        <Typography
                            variant="h3"
                            gutterBottom
                        >
                            {slides[slider].price}$
                        </Typography>

                        <Button
                            to={`/product/${slides[slider].title}`}
                            component={Link}
                            variant="contained"
                            size='large'
                            color="secondary"
                        >
                            Buy now <TrendingFlat fontSize='large' />
                        </Button>
                    </Box>

                    <img className='header__img' src={slides[slider].img} alt="lenova legion 5" />

                </Stack>

            </Grow>
        </>
    )
}
