import React from 'react';
import Icon from '../Header/Icon';

export default function Product({ item }) {
	function handleClickBasket() {
		let basket = JSON.parse(localStorage.getItem("basket")) || { title: "Զամբյուղ", products: [] };

		const existingItem = basket.products.find(basketItem => basketItem.id === item.id);

		if (!existingItem) {
			basket.products.push(item);
			localStorage.setItem("basket", JSON.stringify(basket));
		} else {
			console.log('Item is already in the basket');
		}
	}

	function handleClickEdit() {
		let data = {
			id: '',
			src: '',
			title: '',
			price: '',
			isAdded: true,
			category: ''
		}

		function change(e) {
			data[e.target.name] = e.target.value;
		}

		function save() {
			if (data.src !== '' && data.title !== '' && data.price !== '') {
				if (data.category === "") {
					data.category = "ՊԱՀԱՆՋՎԱԾ"
				}
				products.map((el) => {
					el.title === data.category ? el.products.push(data) : ''
				});
			}
		}

		return (
			<div className="flex justify-center items-center py-14">
				<div className="w-[600px] bg-white p-8 rounded-lg flex flex-col gap-4 border border-black">
					<div className="w-[100%] flex justify-center">
						<h2 className='text-center'>Edit Product</h2>
					</div>
					<div className="flex flex-col">
						<label className='flex justify-between items-center mt-3'>
							Image URL:
							<input type="text" name="src" onChange={change} className="border border-black pl-[4px] pr-[4px]" />
						</label>
						<label className='flex justify-between items-center mt-3'>
							Product Name:
							<input type="text" name="title" onChange={change} className="border border-black pl-[4px] pr-[4px]" />
						</label>
						<label className='flex justify-between items-center mt-3'>
							Price:
							<input type="number" min={1} name="price" onChange={change} className="border border-black pl-[4px] pr-[4px]" />
						</label>
						<label className='flex justify-between items-center mt-3'>
							Category:
							<select name='category' onChange={change} className='' >
								<option value="ՊԱՀԱՆՋՎԱԾ">ՊԱՀԱՆՋՎԱԾ</option>
								<option value="ԲՈԼՈՐ ՆՎԵՐՆԵՐԸ">ԲՈԼՈՐ ՆՎԵՐՆԵՐԸ</option>
							</select>
						</label>
					</div>
					<div className="w-[100%] flex justify-center items-center gap-[20px] mt-[20px]">
						<button onClick={save} className="w-[80px] py-[4px] rounded border border-black">Save</button>
					</div>
				</div>
			</div>
		)
	}

	return (
		<div>
			<img src={item.src} alt="" />
			<h4 className='text-[12px]'>{item.title}</h4>
			<Icon value={item.price} type={'xxx'} />
			<button onClick={handleClickBasket}>
				<Icon value='https://cdn-icons-png.flaticon.com/512/3721/3721818.png' type={'icon'} />
			</button>
			{item.isAdded && (
				<button onClick={handleClickEdit}>
					<Icon value='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qLbMXZDz-3HRWovVA_aBvvwDZSN0NHNnlfcu20pvbHG2xdyoxGNnU6ULlQ&s' type={'icon'} />
				</button>
			)}
		</div>
	);
}
