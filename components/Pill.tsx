interface PillProps {
  technology: string;
  bgColor: string;
}

const Pill: React.FC<PillProps> = ({ technology, bgColor }) => {
  return (
    <button
      className={`${bgColor} text-white px-2 py-1 rounded shadow-lg cursor-default`}>
      {technology}
    </button>
  );
};

export default Pill;
