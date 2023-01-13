import React from 'react';
import Link from 'next/link';
import NavItem from './base/NavItem';
import Image from 'next/image';
import logo from '../../public/horizon-nav.png';
import { RxHamburgerMenu } from 'react-icons/rx';
import { HiOutlineLockClosed } from 'react-icons/hi';

export default function LowerNav(props: unknown) {
  console.log('LowerNav props: ', props);
  console.log('LowerNav fields', JSON.stringify(props.fields.data.datasource.children.results));
  return (
    <nav className="nav">
      <button className="md:hidden">
        <RxHamburgerMenu />
      </button>
      <ul className="hidden md:flex flex-col md:flex-row md:items-center">
        {/* <NavItem href={'/my-horizon'} value={'Home'} /> */}
      </ul>
      <Link href={'/'}>
        <Image src={logo} alt="MyHorizon Logo" height={60} />
      </Link>
      <button className="hidden md:flex items-center mr-8 px-6 py-1 h-12 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        <HiOutlineLockClosed />
        <span className="mx-1">LOG IN</span>
      </button>
      <button className="md:hidden px-4">Log In</button>
    </nav>
  );
}
