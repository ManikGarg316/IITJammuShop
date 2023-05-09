import React from 'react';
import Transitions from '../Transition';
import { Grid } from '@material-ui/core';
import Product from '../Components/Products/Product/Product';
const MyItems = ({products, LoggedInEmail}) => 
{	
	// console.log(LoggedInEmail);
	
	return (	
		<Transitions>
			<main>
				<Grid container justifyContent="center" spacing={4}>
					{products.map((product) => (
						product.email === LoggedInEmail ?
							(<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
								<Product product={product} productImages={product.image_urls} requireDelete={true}/>
							</Grid>) : null
					))}
				</Grid>
			</main>
		</Transitions>
    );
}

export default MyItems;
