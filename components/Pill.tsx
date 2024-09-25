interface PillProps {
  technology: string;
  bgColor: string;
  textColor: string;
}

const Pill: React.FC<PillProps> = ({ technology, bgColor, textColor }) => {
  return <button className={`${bgColor} ${textColor} px-2 py-1 rounded shadow cursor-default`}>{technology}</button>;
};

export default Pill;
