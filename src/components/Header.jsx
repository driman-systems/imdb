import MenuItem from "./MenuItem";
import {BiHomeSmile} from 'react-icons/bi';
import {BsFillInfoSquareFill} from 'react-icons/bs';
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between mx-2 max-w-6xl sm:m-auto items-center py-6">
        <div className="flex">
            <MenuItem title="Home" address="/" Icon={BiHomeSmile} />
            <MenuItem title="About" address="/about" Icon={BsFillInfoSquareFill} />
        </div>
        <div>
            <Link href="/">
              <h2 className="text-2xl ">
                <span className="bg-red-500 py-1 px-2 rounded-lg text-bold text-white">IMDb</span>
              </h2>
            </Link>
        </div>
    </div>
  )
}
