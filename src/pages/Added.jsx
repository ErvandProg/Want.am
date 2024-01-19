import React from 'react'
import products from "./../components/Product/dataBase";

export default function Added() {
	const data = {
		id: products[0].products.length + products[1].products.length + 1,
		src: '',
		title: '',
		price: '',
		category: ''
	}

	function change(e) {
		data[e.target.name] = e.target.value;
	}


	function save() {
		if (data.src !== '' && data.title !== '' && data.price !== '') {
			console.log(data);
			products.map((el) => {
				el.title === data.category ? el.products.push(data) : ''
			})
		}
	}

	return (
		<div className="flex justify-center items-center py-14">
			<div className="w-[600px] bg-white p-8 rounded-lg flex flex-col gap-4 border border-black">
				<div className="w-[100%] flex justify-center">
					<h2 className='text-center'>Add Product</h2>
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
