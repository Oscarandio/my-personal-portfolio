interface SubtitleProps {
  subtitle: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => {
  return (
    <header>
      <h2 className='font-semibold text-xl'>{subtitle}</h2>
    </header>
  );
};

export default Subtitle;
