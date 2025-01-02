'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";


interface props {
    path:string;
    texto:string;
}

export const ActiveLink = ({path,texto}:props) => {
    const pathname = usePathname();
  return (
    <Link href={path}
    className={`${pathname === path ? 'text-blue-500' : 'hover:underline  hover:text-blue-500 mr-2 transition-all' }`}
    >{texto}</Link>
  )
}
