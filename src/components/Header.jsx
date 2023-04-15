import MenuItem from "./MenuItem";
import {BiHomeSmile} from 'react-icons/bi';
import {BsFillInfoSquareFill} from 'react-icons/bs';
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {

  return (
    <div className="flex justify-between container mx-auto max-w-6xl items-center py-6">
        <div className="flex">
            <MenuItem title="Home" address="/" Icon={BiHomeSmile} />
            <MenuItem title="About" address="/about" Icon={BsFillInfoSquareFill} />
        </div>
        <div className="flex items-center space-x-5">
            <DarkModeSwitch />
            <Link href="/">
              <h2 className="text-xl mr-2">
                <span className="bg-red-500 py-1 px-2 rounded-lg text-bold text-white">IMDb</span>
              </h2>
            </Link>
        </div>
    </div>
  )
}
