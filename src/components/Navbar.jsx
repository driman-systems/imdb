import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-6 my-3 py-3 dark:bg-gray-600 bg-red-200">
        <NavbarItem title="Tendências" param='fetchTrending'  />
        <NavbarItem title="Melhor avaliados" param='fetchRated'  />
    </nav>
  )
}

export default Navbar
