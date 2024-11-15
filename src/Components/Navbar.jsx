import React, { useRef, useState } from 'react';

function Navbar() {
    const mob_v = useRef(null);

    function showmenu() {
        mob_v.current.classList.toggle('hidden');
    }

    function hidemobmenu(event) {
        mob_v.current.classList.add('hidden');               
    }

    return (
        <>
            <div className="fixed top-2 m-4 right-[4%] z-50 w-[90%] rounded-xl flex justify-between bg-white text-black items-center p-5">

                <div className="flex gap-2">
                    <h2 className='text-2xl font-semibold cursor-pointer'>JATIN</h2>
                </div>

                <div className="md:hidden">
                    <button className='text-xl' onClick={showmenu}><i class="ri-menu-3-fill"></i></button>
                </div>

                {/* window view */}
                <div className="hidden md:flex gap-12">
                    <ul className='flex gap-6 text-xl'>
                        <li><a href='#Home' className='hover:text-gray-500' onClick={hidemobmenu}>Home</a></li>
                        <li><a href='#about' className='hover:text-gray-500' onClick={hidemobmenu}>About</a></li>
                        {/* <li><a href='#skills' className='hover:text-gray-500' onClick={hidemobmenu}>Skills</a></li> */}
                        <li><a href='#projects' className='hover:text-gray-500' onClick={hidemobmenu}>Projects</a></li>
                        <li><a href='#contact' className='hover:text-gray-500' onClick={hidemobmenu}>Contact</a></li>
                    </ul>
                </div>

                {/* mobile view */}
                <div className="hidden fixed w-full top-0 h-96 -ml-8 md:ml-0 m-5 rounded-md bg-black text-white z-10 md:hidden p-4" id='mob_v' ref={mob_v}>
                    <div className="flex justify-between p-8 m-4">
                        <div className="">
                            <h2 className='text-xl font-semibold'>JATIN</h2>
                        </div>
                        <div className="md:hidden">
                            <button onClick={showmenu}><i className="ri-close-large-line"></i></button>
                        </div>
                    </div>

                    <ul className='mt-8 flex flex-col justify-around items-center gap-4'>
                        <li><a href='#Home' className='hover:text-gray-500' onClick={hidemobmenu}>Home</a></li>
                        <li><a href='#about' className='hover:text-gray-500' onClick={hidemobmenu}>About</a></li>
                        {/* <li><a href='#skills' className='hover:text-gray-500' onClick={hidemobmenu}>Skills</a></li> */}
                        <li><a href='#projects' className='hover:text-gray-500' onClick={hidemobmenu}>Projects</a></li>
                        <li><a href='#contact' className='hover:text-gray-500' onClick={hidemobmenu}>Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;
