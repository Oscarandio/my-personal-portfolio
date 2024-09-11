import NavList from "./nav/NavList";
import NavName from "./nav/NavName";

const Nav = () => {
  return (
    <nav className='flex flex-col md:flex-row items-center justify-center md:justify-between bg-white  transition-colors p-2 rounded-lg'>
      <NavName name='Óscar Rabadán Martínez' imageUrl='/oscar_rabadan.webp' />
      <NavList />
    </nav>
  );
};

export default Nav;
