import React from 'react'
import { footerList1, footerList2, footerList3 } from '../utils/constants'

const List = ( {items, mt}: {items: string[], mt:boolean} ) => {
    return <div className={`flex flex-wrap gap-2 ${mt ? 'mt-5' : ''}`}>
    {items.map(item => {return (
            <p key={item} className='text-gray-400 text-sm hover:underline cursor-pointer'>
                {item}
            </p>
        )
    })}
</div>
}

const Footer = () => {
  return (
    <div className='mt-6 hidden xl:block'>
        <List mt={false} items={footerList1}/>
        <List mt items={footerList2}/>
        <List mt items={footerList3}/>
        <p className='text-gray-400 text-sm mt-5'>2022 &copy;</p>
    </div>
  )
}

export default Footer