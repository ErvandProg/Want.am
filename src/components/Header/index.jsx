import React from 'react'
import FirstPartHeader from './FirstHeaderPart'
import SecondHeaderPart from './SecondHeaderPart'


export default function Header() {
  return (
    <div className='py-[6px]'>
      <FirstPartHeader />
      <SecondHeaderPart/>
    </div>
  )
}
