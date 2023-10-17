import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="flex items-center border-b-2 px-6 py-2 h-20 shadow-lg">
      <div className='py-2'>
        <img src="/money.png" alt="logo"></img>
      </div>
      <div className="grow">
        <div className="flex items-center justify-center gap-2 md:gap-8">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/performance">Performance</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar