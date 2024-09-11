import Li from "../Li";

const NavList = () => {
  return (
    <ul className='flex gap-4 pe-6 mt-4 mb-2 md:my-0'>
      <Li text='Home' url='/' />
      <Li text='Projects' url='/' />
      <Li text='CV' url='/' />
      <Li text='Contact' url='/' />
    </ul>
  );
};

export default NavList;
