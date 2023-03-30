import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image1: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg', image2: "https://www.istockphoto.com/photo/white-sport-shoes-on-isolated-white-background-with-copy-text-space-gm938896378-256730008", image3: "https://www.dreamstime.com/closeup-running-shoe-person-nature-beautiful-sunlight-image163710909"},
    { id: 2, name: 'Macbook', description: 'Apple macbook', price: '$10', image1: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80', image2: "https://www.istockphoto.com/photo/laptop-on-white-table-gm506061551-45377176", image3: "https://www.istockphoto.com/photo/apple-macbook-air-2018-in-review-gm1074074468-287566242"},
];

const Products = () => 
{
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;