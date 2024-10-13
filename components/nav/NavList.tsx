import Li from '@/components/nav/Li';

const NavList: React.FC = () => {
  return (
    <ul className='flex gap-4 md:pe-6 mt-3 md:mt-4 mb-2 md:my-0 justify-center'>
      <Li text='CV' url='/' />
      <Li text='Contact' url='/' />
    </ul>
  );
};

export default NavList;
