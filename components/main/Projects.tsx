import Subtitle from '@/components/Subtitle';
import H3 from '../H3';
import Image from 'next/image';
import Link from 'next/link';
import Pill from '../Pill';

const Projects: React.FC = () => {
  return (
    <aside className='px-4 py-6 text-black bg-white rounded'>
      <Subtitle subtitle='Works' />
      <Link
        className='text-blue-500'
        target='_blank'
        href='https://www.tubookbuddy.es/'>
        <H3 subtitle='tubookbuddy.es' />
      </Link>
      <Image
        className='rounded'
        width='1990'
        height='1440'
        src='/tubookbuddy.webp'
        alt='tuBookBuddy'
      />
      <p className='my-2'>
        Tu Book Buddy allows you to keep track of your read and pending books,
        and share your readings with friends and other users.
      </p>
      <div className='flex flex-wrap gap-2'>
        <Pill technology='Next JS' bgColor='bg-black' textColor='text-white' />
        <Pill
          technology='Typescript'
          bgColor='bg-blue-600'
          textColor='text-white'
        />
        <Pill
          technology='Tailwind CSS'
          bgColor='bg-blue-400'
          textColor='text-white'
        />
        <Pill
          technology='Google Books API'
          bgColor='bg-green-600'
          textColor='text-white'
        />
        <Pill
          technology='Firebase Auth'
          bgColor='bg-yellow-600'
          textColor='text-white'
        />
        <Pill
          technology='Firestore Database'
          bgColor='bg-red-600'
          textColor='text-white'
        />
        <Pill technology='Vercel' bgColor='bg-black' textColor='text-white' />
      </div>
      {/* <H3 subtitle='Ojalá' /> */}
    </aside>
  );
};

export default Projects;
