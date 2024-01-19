import React from 'react';
import Category from '../components/Category';

export default function Basket() {
	const basket = JSON.parse(localStorage.getItem("basket"));
	console.log(basket);
	return (
		<div className='px-[16%]  py-[6px] mt-14 flex flex-col items-center justify-evenly gap-40 '>
			{
				basket.products.length > 0 ? (
						<Category key="Basket" category={basket} />
				) : (
					<p>No items in the basket</p>
				)
			}
		</div>
	)
}
