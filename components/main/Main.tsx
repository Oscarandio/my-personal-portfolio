import Education from './Education';
import Projects from './Projects';
import Work from './Work';

const Main: React.FC = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
      <Projects />
      <Work />
      <Education />
    </section>
  );
};

export default Main;
