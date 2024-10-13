import Subtitle from '@/components/Subtitle';
import WorkCard from './WorkCard';

const Work: React.FC = () => {
  return (
    <aside className='py-2'>
      <Subtitle subtitle='Work Experience' />
      <div className='pt-4 text-black'>
        <div className='bg-gray-100 px-4 rounded shadow-lg border border-gray-600'>
          <WorkCard
            title='Persuadis'
            date='Septiembre 2022 - At the moment'
            description={[
              'Carry out the implementation of web designs from Figma, working with designers to achieve the best look and feel of landings and websites.',
              'Collaborate with the backend team to ensure a smooth and efficient integration of the web pages created.',
              'Supervise interns and provide them with training in layout, which has allowed their professional growth and improved their ability to practice the profession.',
              // Poner absolutamente todo lo que hago en la empresa, con detalle y edulcorandolo
            ]}
          />
        </div>
      </div>
    </aside>
  );
};

export default Work;
