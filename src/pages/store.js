import React from 'react';
import { Grid } from '@material-ui/core';
import Product from '../Components/Products/Product/Product';
import Transitions from '../Transition'
const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://images.pexels.com/photos/19090/pexels-photo.jpg?cs=srgb&dl=pexels-web-donut-19090.jpg&fm=jpg'},
    { id: 2, name: 'Macbook', description: 'Apple macbook', price: '$10', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80'},
];

const Products = () => 
{
    return (
		<Transitions>
			<main>
				<Grid container justifyContent="center" spacing={4}>
					{products.map((product) => (
						<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
							<Product product={product} />
						</Grid>
					))}
				</Grid>
			</main>
		</Transitions>
    );
}

export default Products;