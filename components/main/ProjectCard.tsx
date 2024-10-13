import H3 from '../H3';
import Image from 'next/image';
import Link from 'next/link';
import Pill from '../Pill';

interface ProjectCardProps {
  url: string;
  projectName: string;
  imgUrl: string;
  description?: string;
  technology: string[];
}

const techColors: {
  [key: string]: { bgColor: string };
} = {
  Javascript: { bgColor: 'bg-yellow-500' },
  Typescript: { bgColor: 'bg-blue-600' },
  'Tailwind CSS': { bgColor: 'bg-blue-400' },
  'Google Books API': { bgColor: 'bg-green-600' },
  'Firebase Auth': { bgColor: 'bg-yellow-600' },
  'Firestore Database': { bgColor: 'bg-red-600' },
  Vercel: { bgColor: 'bg-black' },
  NextJS: { bgColor: 'bg-black' },
  'Styled Components': { bgColor: 'bg-pink-400' },

  // Agrega más tecnologías y colores aquí
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  url,
  projectName,
  imgUrl,
  description,
  technology,
}) => {
  return (
    <div className='bg-gray-100 px-4 rounded shadow-lg border border-gray-600'>
      <Link
        className='text-blue-500 hover:underline'
        target='_blank'
        href={url}>
        <H3 subtitle={projectName} />
      </Link>
      <Image
        className='rounded'
        width='1990'
        height='1440'
        src={imgUrl}
        alt={projectName}
      />
      <div>
        <p className='my-2'>{description}</p>
        <div className='flex flex-wrap gap-2 pb-4 items-end'>
          {technology.map((tech) => {
            const { bgColor } = techColors[tech] || {
              bgColor: 'bg-black',
            };
            return <Pill key={tech} technology={tech} bgColor={bgColor} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
