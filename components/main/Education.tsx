import Subtitle from '@/components/Subtitle';

const Education: React.FC = () => {
  return (
    <aside className='py-6'>
      <Subtitle subtitle='Education' />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 py-4 text-black text-sm xl:text-base'></div>
    </aside>
  );
};

export default Education;
