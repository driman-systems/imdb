"use client"
import {MdLightMode} from 'react-icons/md';
import {BsFillMoonFill} from 'react-icons/bs';
import { useTheme } from "next-themes";
import { useEffect, useState } from 'react';

const DarkModeSwitch = ()=> {

  const { theme, setTheme } = useTheme();

  const  [mounted, setMounted ] = useState(false);

  useEffect(()=> {
    setTheme('dark')
    setMounted(true);
  }, [setMounted, setTheme]);

  return <>
  {mounted && (theme == 'dark' ?
    <MdLightMode className='cursor-pointer text-xl hover:text-red-500' onClick={()=> setTheme('ligth')} /> : <BsFillMoonFill className='cursor-pointer text-xl hover:text-red-500'  onClick={()=> setTheme('dark')}/>
   ) }
  </>
}

export default DarkModeSwitch;
