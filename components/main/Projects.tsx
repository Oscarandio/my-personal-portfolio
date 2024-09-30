import Subtitle from '@/components/Subtitle';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <aside className='py-6'>
      <Subtitle subtitle='Works' />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 py-4 text-black text-sm xl:text-base'>
        <ProjectCard
          url='https://www.tubookbuddy.es/'
          projectName='tubookbuddy.es'
          imgUrl='/tubookbuddy.webp'
          description='Tu Book Buddy allows you to keep track of your read and pending books,
        and share your readings with friends and other users.'
          technology={[
            'NextJS',
            'Typescript',
            'Tailwind CSS',
            'Google Books API',
            'Firebase Auth',
            'Firestore Database',
            'Vercel',
          ]}
        />
        <ProjectCard
          url='https://vilatijolo.pt/'
          projectName='vilatijolo.pt'
          imgUrl='/vilatijolo.webp'
          technology={['NextJS', 'Javascript', 'Styled Components']}
        />
      </div>
    </aside>
  );
};

export default Projects;
