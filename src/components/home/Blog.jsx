import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Skeleton, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useCallback, useState } from 'react';
// images
import img1 from "../../assets/images/blog/1.png";
import img2 from "../../assets/images/blog/2.png";
import img3 from "../../assets/images/blog/3.png";

export default function Blog({ status }) {
    const blogs = [
        {
            img: img1,
            title: "Top esssential Trends in 2022",
            desc: "NO STRINGS WITH THESE WIRELESS HEADPHONE",
            created: "21 January,2022",
            author: "Mohit Sign",
        },
        {
            img: img2,
            title: "Laptop Buying Guide",
            desc: "Laptop Buying Guide - Everything You Need To Know",
            created: "31 January,2022",
            author: "Akshay",
        },
        {
            img: img3,
            title: "Virtual Reality",
            desc: "5 Reason To Switch To A pair of wireless Virtual Reality",
            created: "11 February,2022",
            author: "SaberAli",
        },
    ];

    const randomColor = ["#00ed28", "#380aee", "#fcfc4a", "#9005fb", "#05dafb", "#fb9905"];
    const createRandomColor = useCallback(() => {
        return randomColor[Math.floor(Math.random() * 5)]
    }, [randomColor]);

    const [selectedBlog, setSelectedBlog] = useState([]);
    const [isModalOpen, setModalOpen] = useState(false);
    const readMore = useCallback((blog) => {
        setSelectedBlog(blog);
        setModalOpen(true);
    }, [selectedBlog]);

    return (
        <>
            <Grid alignItems="center" justifyContent="center" container spacing={2}>
                {blogs.map((e, id) => (
                    <Grid lg={4} md={6} xs={12} item key={id}>
                        <Card data-aos="zoom-in">
                            {status ? (
                                <>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: createRandomColor }}>{e.author.slice(0, 1)}</Avatar>
                                        }
                                        title={
                                            <Typography
                                                variant="h6"
                                                color="primary"
                                                fontWeight={500}
                                            >
                                                {e.author}
                                            </Typography>
                                        }
                                        subheader={e.created}
                                    />
                                    <CardMedia
                                        sx={{ width: "100%", height: 255, objectFit: "cover" }}
                                        component="img"
                                        image={e.img}
                                    />

                                    <CardContent>
                                        <Typography
                                            variant="h5"
                                            color="primary"
                                            fontWeight={500}
                                            gutterBottom
                                        >
                                            {e.title}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            gutterBottom
                                        >
                                            {e.desc}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => readMore(e)}>Read More</Button>
                                    </CardActions>
                                </>
                            ) : (
                                <Box sx={{ p: 1.5 }}>
                                    <Stack flexDirection="row">
                                        <Skeleton sx={{ mr: 2 }} variant="curcular" width={50} height={50} />
                                        <Box>
                                            <Skeleton width={120} height={18} variant="text" />
                                            <Skeleton width={100} height={15} variant="text" />
                                        </Box>
                                    </Stack>
                                    <Skeleton sx={{ mt: 2 }} variant="rounded" height={255} width="100%" />
                                </Box>
                            )}
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Dialog open={isModalOpen} onClose={() => setModalOpen(false)}>
                <DialogTitle>
                    {selectedBlog.title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {selectedBlog.desc + " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus autem nostrum cupiditate minus, eum quae eaque dolore animi, quod sit iste nobis facilis deserunt vitae voluptas cumque doloribus. Facilis, magni!"}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setModalOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
