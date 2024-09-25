import NavList from '@/components/nav/NavList';
import NavName from '@/components/nav/NavName';

const Nav: React.FC = () => {
  return (
    <nav className='flex flex-col md:flex-row justify-center md:justify-between bg-white  transition-colors p-2 rounded-lg'>
      <NavName name='Óscar Rabadán Martínez' imageUrl='/oscar_rabadan.webp' />
      <NavList />
    </nav>
  );
};

export default Nav;
