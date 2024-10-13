import Subtitle from '@/components/Subtitle';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  return (
    <aside>
      <Subtitle subtitle='Works' />
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-4 text-black'>
        <ProjectCard
          url='https://www.tubookbuddy.es/'
          projectName='tubookbuddy.es'
          imgUrl='/tubookbuddy.webp'
          description='Tu Book Buddy allows you to keep track of your read and pending books,
        and share your readings with friends and other users. Uses the Google Books API and integrates user authentication and database with Firebase. It is a personal side-project that I am entirely in charge of.'
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
          description='This is the type of development that I carry out in my current job, which involves NextJS with Styled Components'
          technology={['NextJS', 'Javascript', 'Styled Components']}
        />
      </div>
    </aside>
  );
};

export default Projects;
