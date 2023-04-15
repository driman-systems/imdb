import Link from "next/link";

export default function MenuItem({title, address, Icon}) {
  return (
    <>
        <Link href={address} className="mr-4 lg:mr-10 hover:text-red-600">
          <Icon className="text-3xl sm:hidden mx-4" />
          <p className="hidden sm:inline my-2 text-xl">{title}</p> 
        </Link>
    </>
  )
}
