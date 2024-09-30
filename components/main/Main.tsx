import Education from './Education';
import Projects from './Projects';
import Work from './Work';

const Main: React.FC = () => {
  return (
    <>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-4 my-2'>
        <Work />
        <Education />
      </section>
      <section className='grid grid-cols-1 gap-2'>
        <Projects />
      </section>
    </>
  );
};

export default Main;
