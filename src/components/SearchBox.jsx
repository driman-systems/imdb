"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {

const router = useRouter();

const [search, setSearch] = useState("");

const handleSubmit = (e)=>{
    e.preventDefault();
    if(!search) return;
    router.push(`/search/${search}`);
}

  return (
    <form className="flex justify-between items-center px-5 space-x-4"
               onSubmit={handleSubmit}
    >
        <input type="text"
                    onChange={(e)=> setSearch(e.target.value)}
                    placeholder="Search keywords..."
                    className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1"
        />
        <button disabled={!search} type="submit" className="text-red-600 disabled:text-gray-400">Search</button>
    </form>
  )
}

export default SearchBox
