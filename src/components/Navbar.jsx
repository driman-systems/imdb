import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-6 my-3 py-3 dark:bg-gray-600 bg-red-200">
        <NavbarItem title="Trending" param='fetchTrending'  />
        <NavbarItem title="Top Rated" param='fetchRated'  />
    </nav>
  )
}

export default Navbar
