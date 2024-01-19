import React from 'react';
import Icon from '../Header/Icon';

export default function Product({ item }) {
	function handleClick() {
		let basket = JSON.parse(localStorage.getItem("basket")) || { title: "Զամբյուղ", products: [] };

		const existingItem = basket.products.find(basketItem => basketItem.id === item.id);

		if (!existingItem) {
			basket.products.push(item);
			localStorage.setItem("basket", JSON.stringify(basket));
		} else {
			console.log('Item is already in the basket');
		}
	}

	return (
		<div>
			<img src={item.src} alt="" />
			<h4 className='text-[12px]'>{item.title}</h4>
			<Icon value={item.price} type={'xxx'} />
			<button onClick={handleClick}>
				<Icon value='https://cdn-icons-png.flaticon.com/512/3721/3721818.png' type={'icon'} />
			</button>
		</div>
	);
}
