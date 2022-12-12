import { GridView, ListOutlined } from '@mui/icons-material';
import { Card, CardActionArea, CardContent, CardMedia, FormControl, Grid, MenuItem, Rating, Select, Skeleton, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Products() {
  const [filterOptions, setFilterOptions] = useState("");
  const [view, setView] = useState("grid");
  const products = useSelector(state => state.products);
  const media = useMediaQuery('(max-width: 700px)');

  const viewOptions = (e, view) => {
    setView(view);
  };

  const filteredProducts = products.filter(s => {
    return s.category.toLowerCase().includes(filterOptions.toLowerCase());
  })

  return (
    <Container maxWidth="lg">

      <Stack flexDirection="row" justifyContent="space-between" sx={{ mt: 12, mb: 6 }}>
        <Typography
          data-aos="fade-down"
          sx={{ mr: 1 }}
          variant={media ? "h5" : "h4"}
          color="secondary"
          fontWeight={500}
        >
          All Products
        </Typography>

        <Stack flexDirection="row">
          <Stack sx={{ mr: 3 }} flexDirection="row" alignItems="center">
            <Typography sx={{ mr: 2 }} variant="subtitle1" color="secondary">
              Filter by:
            </Typography>
            <FormControl sx={{ maxWidth: 120, minWidth: 80 }}>
              <Select onChange={(e) => setFilterOptions(e.target.value)} value={filterOptions} color='secondary' variant="standard">
                <MenuItem value="">All</MenuItem>
                <MenuItem value="new">New</MenuItem>
                <MenuItem value="recommended">Recommended</MenuItem>
                <MenuItem value="best sale">Best Sale</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          {media ? "" : (
            <Stack flexDirection="row" alignItems="center">
              <Typography sx={{ mr: 2 }} variant="subtitle1" color="secondary">
                View:
              </Typography>
              <ToggleButtonGroup onChange={viewOptions} value={view} size='small' exclusive>
                <ToggleButton value="grid"><GridView /></ToggleButton>
                <ToggleButton value="list"><ListOutlined /></ToggleButton>
              </ToggleButtonGroup>
            </Stack>
          )}
        </Stack>
      </Stack>

      <Grid justifyContent="center" container spacing={2}>
        {filteredProducts.map((e, id) => (
          <Grid
            lg={view === "grid" ? 4 : 12}
            sm={view === "grid" ? 6 : 12}
            key={id}
            item>
            <Card data-aos="zoom-in" className='product'>
              <CardActionArea component={Link} to={`/product/${e.label}`}>
                <Stack
                  flexDirection={view === "grid" ? "column" : "row"}
                  alignItems="center"
                >
                  <CardMedia
                    component="img"
                    image={e.img1}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight={400}
                    >
                      {e.label}
                    </Typography>
                    <Stack flexDirection="row" alignItems="center">
                      <Typography sx={{ mr: 4 }} variant="h6" color="secondary">{e.price}$</Typography>
                      <Rating value={e.rate} readOnly precision={0.5} />
                    </Stack>
                    <Typography sx={{ maxWidth: 500 }} variant="body1" color="text.secondary">
                      {e.desc.slice(0, 115)}...
                    </Typography>
                    <Typography sx={{ mt: 1 }} fontWeight={600} color="primary" variant="subtitle1">
                      {e.category}
                    </Typography>
                  </CardContent>
                </Stack>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  )
}
