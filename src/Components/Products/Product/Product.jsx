import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Keyboard,
    Scrollbar,
    Pagination,
    Navigation,
} from 'swiper/core';
// import 'swiper/swiper.min.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Keyboard, Scrollbar, Pagination, Navigation])

const Product = ({ product }) => {
    const classes = useStyles();

    return (
    <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.image} />
        {/* <Swiper
            grabCursor
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            navigation
            loop
            className={classes.swiperContainer} >
                    <SwiperSlide key={0}>
                        <CardMedia className={classes.media} image={productImage} />
                    </SwiperSlide>
                    <SwiperSlide key={1}>
                        <CardMedia className={classes.media} image={productImage} />
                    </SwiperSlide>
                    <SwiperSlide key={2}>
                        <CardMedia className={classes.media} image={productImage} />
                    </SwiperSlide>
        </Swiper> */}
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="h5">
                    {product.price}
                </Typography>
            </div>
            <Typography variant="body2" color="textSecondary">
                {product.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label="Delete the product from store">
                <DeleteIcon />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default Product;
