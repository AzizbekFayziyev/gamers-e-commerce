import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, Grid, Skeleton, Tab, Tabs, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function LatestProducts({ status }) {
    const [tabIndex, setTabIndex] = useState(0);
    const [tabCategory, setTabCategory] = useState("new");
    const selector = useSelector(state => state.products);

    const filteredProducts = selector.filter(s => {
        return s.category.toLowerCase().includes(tabCategory.toLowerCase());
    });

    const onTabChange = (e, index) => {
        setTabIndex(index);
        setTabCategory(e.target.textContent);
    };

    return (
        <Stack alignItems="center">
            <Tabs
                textColor="secondary"
                indicatorColor='secondary'
                onChange={onTabChange}
                value={tabIndex}
            >
                <Tab label="New" />
                <Tab label="Recommended" />
                <Tab label="Best Sale" />
            </Tabs>
            <Grid sx={{ my: 5 }} spacing={2} container>
                {filteredProducts.map(({ img1, label, price }, id) => (
                    <Grid key={id} lg={4} md={6} xs={12} item>
                        <Card data-aos="zoom-in" variant="outlined" className='productCard'>
                            {status ? (
                                <CardActionArea component={Link} to={`/product/${label}`}>
                                    <CardMedia
                                        component="img"
                                        image={img1}
                                    />

                                    <CardContent>
                                        <Typography
                                            width={300}
                                            variant="h5"
                                            noWrap
                                            textOverflow="ellipsis"
                                            gutterBottom
                                        >
                                            {label}
                                        </Typography>
                                        <Typography variant="body1" color="primary">{price}$</Typography>
                                    </CardContent>
                                </CardActionArea>
                            ) : (
                                <Box sx={{ p: 1 }}>
                                    <Skeleton variant="text" width={300} height={30} />
                                    <Skeleton variant="text" width={100} height={20} />
                                    <Skeleton variant="rectangular" height={150} />
                                </Box>
                            )}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    )
}
