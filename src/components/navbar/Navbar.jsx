"use client"

import DarkModeToggle from '../DarkModeToggle/DarkModeToggle'
import Link from "next/link";
import cls from './page.module.css'
import { signOut, useSession } from 'next-auth/react';

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];


const Navbar = () => {
  const session = useSession()

  return (
    <nav className={cls.container}>
      <Link href='/' className={cls.logo}>
        myApp
      </Link>
      <div className={cls.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
        {session.status === "authenticated" && <button className={cls.logout} onClick={signOut}>Logout</button>}
      </div>
    </nav>
  )
}

export default Navbar;