interface WorkCardProps {
  title: string;
  date: string;
  description: string[];
}

const WorkCard: React.FC<WorkCardProps> = ({ title, date, description }) => {
  return (
    <>
      <header className='flex justify-between pt-4 font-semibold '>
        <p>{title}</p>
        <p className='italic'>{date}</p>
      </header>
      <ul className='px-5 py-2'>
        {description.map((desc, index) => (
          <li className='list-disc py-1' key={index}>
            {desc}
          </li>
        ))}
      </ul>
    </>
  );
};

export default WorkCard;
