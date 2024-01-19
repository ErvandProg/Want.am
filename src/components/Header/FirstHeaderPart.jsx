import React from 'react'
import Search from './Search'

export default function First_part_Header
() {
  return (
		<div className="w-[100%] px-[16%] border-b border-[#EAEAEA] pb-2">
			<div className='flex justify-between items-center'>
				<select name="" id="" className='text-[10px]'>

					<option value="am">AM</option>
					<option value="ru">ru</option>
				</select>
				<div className="deliveryAndContacts w-[40%] text-[10px] flex justify-end items-center ">
					<a href="" className='mr-[25px]'>ԱՌԱՔՈՒՄ ԵՒ ՎՃԱՐՈՒՄ</a>
					<a href="">ԿՈՆՏԱԿՏՆԵՐ</a>
				</div>
				<Search />
			</div>
		</div>
  )
}
