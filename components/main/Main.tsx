import Education from './Education';
import Projects from './Projects';
import Work from './Work';

const Main: React.FC = () => {
  return (
    <>
      <section className='grid grid-cols-1'>
        <Projects />
      </section>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <Work />
        <Education />
      </section>
    </>
  );
};

export default Main;
