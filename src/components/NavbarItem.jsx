"use client";
import Link from "next/link"
import { useSearchParams } from 'next/navigation';

const NavbarItem = ({title, param}) => {

    const search = useSearchParams();

    const genre = search.get("genre");

  return (
    <div>
        <Link className={`font-semibold hover:text-red-500 ${
            genre && genre === param && `underline underline-offset-8 decoration-4 rounded-lg decoration-red-500`
        }`} href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}

export default NavbarItem
