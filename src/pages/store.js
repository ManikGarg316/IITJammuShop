import React from 'react';
import { Grid } from '@material-ui/core';
import Product from '../Components/Products/Product/Product';
import Transitions from '../Transition';
import { projectFirestore } from '../firebase/config';
import { useEffect } from 'react';
import { useState } from 'react';

const products = [];
const Products = () => 
{
	const [flag, setFlag] = useState(false);
	useEffect(() => {
		async function fetchMyAPI() {
			products.length = 0;
			const querySnapshot = await projectFirestore.collection('Products').get();
			let val = 1;
			querySnapshot.forEach((doc) => {
			   products.push({ id: val, ...doc.data() });
			   val++;
			})
			setFlag(true);
			// console.log(products);
    	}
		fetchMyAPI();
	  }, []);
	
	return (
		<Transitions>
			<main>
				{ flag ? 
				<Grid container justifyContent="center" spacing={4}>
					{products.map((product, index) => (
						<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
							<Product product={product} productImages={product.image_urls}/>
						</Grid>
					))}
				</Grid> : null}
			</main>
		</Transitions>
    );
}

export default Products;