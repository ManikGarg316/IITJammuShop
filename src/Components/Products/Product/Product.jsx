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
import {projectFirestore} from '../../../firebase/config';
import { useNavigate } from 'react-router-dom';

SwiperCore.use([Keyboard, Scrollbar, Pagination, Navigation])

const Product = ({ product, productImages, requireDelete }) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const DeleteItem = async () => {
        await projectFirestore.collection('Products').doc(product.id).delete();
        localStorage.setItem("PRODS_STATE", "Change");
        navigate("/home");
        window.location.reload();
    }
    return (
    <Card className={classes.root}>
        <Swiper
            grabCursor
            keyboard={{ enabled: true }}
            pagination={{ clickable: true }}
            navigation
            loop
            className={classes.swiperContainer} >
                {productImages?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <CardMedia className={classes.media} image={image} />
                    </SwiperSlide>
                ))}
        </Swiper>
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant="h5" gutterBottom>
                    {product.product_name}
                </Typography>
                <Typography variant="h5">
                    {product.product_price}
                </Typography>
            </div>
            <Typography variant="body2" color="textSecondary">
                {product.desc}
            </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <Typography variant="h7">
                    Contact Me:&nbsp;
                    {product.contact_number}
            </Typography>
            <Typography variant={requireDelete ? "h4": "h5"}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            {requireDelete ?
                <IconButton aria-label="Delete the product from store">
                    <DeleteIcon onClick={DeleteItem}/>
                </IconButton>
                : null}
        </CardActions>
    </Card>
  )
}

export default Product;
