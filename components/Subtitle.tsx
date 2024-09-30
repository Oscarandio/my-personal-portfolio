interface SubtitleProps {
  subtitle: string;
}

const Subtitle: React.FC<SubtitleProps> = ({ subtitle }) => {
  return (
    <header>
      <h2 className='font-medium text-xl py-2 text-white border-b border-white'>
        {subtitle}
      </h2>
    </header>
  );
};

export default Subtitle;
