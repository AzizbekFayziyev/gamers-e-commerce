import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Alert, Button, Card, CardActions, CardContent, CardMedia, Container, Divider, IconButton, List, ListItem, ListItemText, Rating, Snackbar, Tab, Tabs, Typography, useMediaQuery } from '@mui/material'
import { Stack } from '@mui/system';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { productToCart } from '../../store/actions';

export default function Product() {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products);
    const [tabIndex, setTabIndex] = useState(0);
    const [snackBar, setSnackBar] = useState(false);
    const [slide, setSlide] = useState(1);
    const { id } = useParams();
    const media = useMediaQuery('(max-width: 700px)');

    const selectedProduct = product.filter(s => {
        return s.label.toLowerCase().includes(id.toLowerCase());
    });

    const toCart = (e) => {
        dispatch(productToCart(e));
        setSnackBar(true);
    };

    const sliderRight = () => {
        if (slide >= 1) {
            setSlide(e => e + 1);
        }

        if (slide >= 3) {
            setSlide(1);
        }
    };

    const sliderLeft = () => {
        if (slide > 1) {
            setSlide(e => e - 1);
        }

        if (slide === 1) {
            setSlide(3);
        }
    };

    return (
        <Container sx={{ mt: 12 }} maxWidth="lg">
            {selectedProduct.slice(0, 1).map((e, id) => {

                const slides = () => {
                    if (slide === 1) {
                        return e.img1
                    } else if (slide === 2) {
                        return e.img2
                    } else if (slide === 3) {
                        return e.img3
                    }
                };

                return <div key={id}>
                    <Typography data-aos="fade-down" sx={{mb:3}} variant="h4" color="secondary" fontWeight={500}>
                        Product Details
                    </Typography>

                    <Card data-aos="zoom-in" className="selectedProduct">
                        <Stack
                            divider={<Divider orientation='vertical' flexItem />}
                            alignItems="center"
                            justifyContent="space-evenly"
                            flexDirection={media ? "column" : "row"}
                        >
                            <Stack justifyContent="center" alignItems="center">
                                <Stack className="selectedProduct__slider" flexDirection="row" alignItems="center">
                                    <IconButton className="arrowLeft" onClick={sliderLeft} edge="start" size="large">
                                        <KeyboardArrowLeft fontSize='large' />
                                    </IconButton>

                                    <CardMedia
                                        className='selectedProduct__img'
                                        component="img"
                                        alt={e.label}
                                        image={slides()}
                                    />

                                    <IconButton className="arrowRight" onClick={sliderRight} edge="start" size="large">
                                        <KeyboardArrowRight fontSize='large' />
                                    </IconButton>
                                </Stack>

                                <Stack flexDirection="row" alignItems="center" justifyContent="center">
                                    <img
                                        onClick={() => setSlide(1)}
                                        style={{ borderColor: slide === 1 ? "#FB2E86" : "" }}
                                        className="selectedProduct__subImage"
                                        src={e.img1}
                                        alt={e.label}
                                    />
                                    <img
                                        onClick={() => setSlide(2)}
                                        style={{ borderColor: slide === 2 ? "#FB2E86" : "" }}
                                        className="selectedProduct__subImage"
                                        src={e.img2}
                                        alt={e.label}
                                    />
                                    <img
                                        onClick={() => setSlide(3)}
                                        style={{ borderColor: slide === 3 ? "#FB2E86" : "" }}
                                        className="selectedProduct__subImage"
                                        src={e.img3}
                                        alt={e.label}
                                    />
                                </Stack>
                            </Stack>
                            <div>
                                <CardContent>

                                    <Typography variant="h5" color="primary" gutterBottom>
                                        {e.category}
                                    </Typography>

                                    <Typography
                                        variant="h4"
                                        gutterBottom
                                    >
                                        {e.label}
                                    </Typography>

                                    <Rating size="large" readOnly value={e.rate} precision={0.5} />
                                    <Stack flexDirection="row" alignItems="center" sx={{ my: 2 }}>
                                        <Typography
                                            sx={{ mr: 2.5 }}
                                            noWrap
                                            variant="h4"
                                            color="secondary"
                                        >
                                            {e.price}$
                                        </Typography>

                                        <Typography variant="h5" color="text.secondary">
                                            Free delivery
                                        </Typography>
                                    </Stack>

                                    <Stack flexDirection="row" alignItems="center">
                                        <Typography sx={{ mr: 2.5 }} fontWeight={500} variant="subtitle2" color="primary">
                                            {e.brand.toUpperCase()}
                                        </Typography>
                                        <Typography variant="subtitle2" color="text.secondary">
                                            1 Year Warranty
                                        </Typography>
                                    </Stack>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => toCart(e)} size="large" variant="contained" color="secondary">ADD TO CART</Button>
                                </CardActions>
                            </div>
                        </Stack>
                    </Card>


                    <div data-aos="fade-down" className="productInfo">
                        <Tabs
                            onChange={(e, index) => setTabIndex(index)}
                            textColor="secondary"
                            indicatorColor='secondary'
                            value={tabIndex}
                            sx={{ mt: 6 }}
                            variant="fullWidth"
                        >
                            <Tab value={0} label="Description" />
                            <Tab value={1} label="Addetional info" />
                        </Tabs>

                        {tabIndex === 0 ? (
                            <Typography sx={{ p: 5 }} variant="body1">
                                {e.desc}
                            </Typography>
                        ) : (
                            <List sx={{ my: 5 }} disablePadding>
                                <ListItem sx={{ textAlign: "center" }} divider>
                                    <ListItemText><Typography fontWeight={500}>Brand:</Typography></ListItemText>
                                    <ListItemText>{e.brand}</ListItemText>
                                </ListItem>
                                <ListItem sx={{ textAlign: "center" }} divider>
                                    <ListItemText><Typography fontWeight={500}>Screen:</Typography></ListItemText>
                                    <ListItemText>{e.screen}</ListItemText>
                                </ListItem>
                                <ListItem sx={{ textAlign: "center" }} divider>
                                    <ListItemText><Typography fontWeight={500}>Processor:</Typography></ListItemText>
                                    <ListItemText>{e.processor}</ListItemText>
                                </ListItem>
                                <ListItem sx={{ textAlign: "center" }} divider>
                                    <ListItemText><Typography fontWeight={500}>Ram:</Typography></ListItemText>
                                    <ListItemText>{e.ram} GB</ListItemText>
                                </ListItem>
                                <ListItem sx={{ textAlign: "center" }} divider>
                                    <ListItemText><Typography fontWeight={500}>Videocard:</Typography></ListItemText>
                                    <ListItemText>{e.videocard}</ListItemText>
                                </ListItem>
                                <ListItem sx={{ textAlign: "center" }} divider>
                                    <ListItemText><Typography fontWeight={500}>Memory:</Typography></ListItemText>
                                    <ListItemText>{e.memory}</ListItemText>
                                </ListItem>
                            </List>
                        )}
                    </div>
                </div>
            })}

            <Snackbar open={snackBar} onClose={() => setSnackBar(false)} autoHideDuration={3000}>
                <Alert severity='info'>Product added to cart!</Alert>
            </Snackbar>
        </Container>
    )
}
