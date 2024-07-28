import React from 'react'

const Menu = () => {
    const MenuTitles = [{
        "title": 'Home',
        "link": '/'
    },
    {
        "title": 'About us',
        "link": '/about'
    },
    {
        "title": 'Gallery',
        "link": '/gallery'
    },
    {
        "title": 'Contact us',
        "link": '/contact'
    }];
    return (
        <div className='flex justify-between p-5 px-6 items-center'>
            <div className='text-2xl font-extrabold text-white'>AMEEN CORPS STRUCTURES.</div>
            <div className='flex gap-6 uppercase font-extrabold text-gray-500'>
                {MenuTitles.map((menu) => (
                    <div className='hover:text-yellow-400 cursor-pointer'>{menu.title}</div>
                ))}
            </div>

        </div>
    )
}

export default Menu