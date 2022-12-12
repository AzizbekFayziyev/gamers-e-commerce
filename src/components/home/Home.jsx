import { Box, Card, CardContent, CardMedia, Grid, Skeleton, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Header from './Header';
// images
import img1 from "../../assets/images/homeImages/card1.png";
import img2 from "../../assets/images/homeImages/card2.png";
import img3 from "../../assets/images/homeImages/card3.png";
import img4 from "../../assets/images/homeImages/card4.png";
import LatestProducts from './LatestProducts';
import Blog from './Blog';

export default function Home({ status }) {

  const cards = [
    {
      title: "Free Shiping",
      img: img1,
    },
    {
      title: "Exclusiv Deals",
      img: img2,
    },
    {
      title: "Quality Product",
      img: img3,
    },
    {
      title: "24/7 Support",
      img: img4,
    },
  ];

  const Title = (title, mb = 2) => {
    return (<Typography
      data-aos="fade-down"
      sx={{ mt: 6, mb: mb }}
      color="secondary"
      variant="h4"
      textAlign="center"
      fontWeight={500}
    >
      {title}
    </Typography>)
  };

  return (
    <>
      <Header />

      <Container fixed>
        {Title("What Gamers Offer!", 6)}

        <Grid container spacing={2}>

          {cards.map(({ title, img }, id) => (
            <Grid key={id} item lg={3} md={4} sm={6} xs={12}>
              <Card
                data-aos="zoom-in"
                sx={{ textAlign: "center", width: 270, m: "auto" }}
              >

                {status ? (
                  <>
                    <CardMedia
                      sx={{ width: 65, height: 65, m: "10px auto", display: "block" }}
                      component="img"
                      image={img}
                    />
                    <CardContent>
                      <Typography color="secondary" variant="h6" gutterBottom>
                        {title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                      </Typography>
                    </CardContent>
                  </>
                ) : (
                  <Box sx={{ p: 1 }}>
                    <Skeleton sx={{ mx: "auto" }} variant="circular" height={65} width={65} />
                    <Skeleton sx={{ mx: "auto", my: 1.5 }} variant="text" width={150} height={30} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width={150} />
                  </Box>
                )}

              </Card>
            </Grid>
          ))}
        </Grid>

        {Title("Trending Products")}
        <LatestProducts status={status} />
        {Title("Latest Blog", 6)}
        <Blog status={status} />
      </Container>
    </>
  )
}
