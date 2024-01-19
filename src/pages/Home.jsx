import React from 'react'
import Category from '../components/Category';
import products from "./../components/Product/dataBase";

export default function Home() {
	const initialBasket = {
		title: "Զամբյուղ",
		products: []
	};
	if (!localStorage.getItem("basket")) {
		localStorage.setItem("basket", JSON.stringify(initialBasket));
	}

  return (
    <div className='px-[16%]  py-[6px] mt-14 flex flex-col items-center justify-evenly gap-20 '>
      {
        products.map((el)=>{
          return(
            <Category key={el.id} category={el}/>
          )
        })
      }
    </div>
  )
}
