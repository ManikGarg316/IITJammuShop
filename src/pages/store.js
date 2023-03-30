import React from 'react';
import { Grid } from '@material-ui/core';
import Product from '../Components/Products/Product/Product';
import Transitions from '../Transition'
const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', images: ['https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg', "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81Zo8BXMKQS._UL1500_.jpg", "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e839f55c-84d5-4030-9bcf-644e6a6463ea/revolution-6-running-shoes-5k6Jh6.png"]},
    { id: 2, name: 'Macbook', description: 'Apple macbook', price: '$10', images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80', "https://images.hindustantimes.com/tech/img/2022/07/29/600x338/IMG_4284_1657976137822_1659067579143_1659067579143.jpg"]},
];

const Products = () => 
{
    return (
		<Transitions>
			<main>
				<Grid container justifyContent="center" spacing={4}>
					{products.map((product, index) => (
						<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
							<Product product={product} productImages={product.images}/>
						</Grid>
					))}
				</Grid>
			</main>
		</Transitions>
    );
}

export default Products;