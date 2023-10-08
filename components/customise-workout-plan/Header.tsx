"use client"
import { UserCircleIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import Avatar from 'react-avatar'

const Header = () => {
    return (
        <header>
            <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl'>

                <div
                    className='absolute top-0 left-0 w-full h-96 bg-gradient-to-r from-[#191f85] to-[#c1252d] rounded-md filter blur-3xl opacity-50 -z-50'
                />

                <div className='flex items-center space-x-1'>
                    <Image
                        src="https://ik.imagekit.io/8dbiy1f1a/gymguruai_icons/blue-barbell/icons8-dumbbell-100.png" alt='gymguruai_logo'
                        width={300}
                        height={100}
                        className='w-16 md:w-20 h-12 object-contain'
                    />
                    <h1 className='text-2xl font-bold text-blue-800'>GymGuru Ai</h1>
                </div>

                <div className='flex items-center space-x-5 w-full flex-1 justify-end'>
                    <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
                        <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
                        <input type='text' placeholder='Search'
                            className='flex-1 outline-none p-2'
                        />
                        <button type='submit' hidden>Search</button>
                    </form>

                    <Avatar name="Deepak Gunpal" size='50' round color='#0055D1' />
                </div>
            </div>
            <div className='flex items-center justify-center px-5 py-2 md:py-5'>
                <p className='flex items-center text-sm font-light p-5 shadow-xl  rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]'>
                    <UserCircleIcon className='inline-block h-10 w-10 mr-1 text-[#0055D1]' />
                    GPT is summarising your workout plan...
                </p>
            </div>
        </header>
    )
}

export default Header