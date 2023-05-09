import React from 'react';
import { Grid } from '@material-ui/core';
import Product from '../Components/Products/Product/Product';
import Transitions from '../Transition';
import './signIn.css'
const Products = ({products}) => 
{	
	return (
			<Transitions>
				<main>
					<Grid container justifyContent="center" spacing={4}>
						{products.map((product, index) => (
							<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
								<Product product={product} productImages={product.image_urls} requireDelete={false}/>
							</Grid>
						))}
					</Grid>
				</main>
			</Transitions>
    );
}

export default Products;