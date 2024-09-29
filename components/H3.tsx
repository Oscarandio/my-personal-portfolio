interface H3Props {
  subtitle: string;
}

const Subtitle: React.FC<H3Props> = ({ subtitle }) => {
  return (
    <header className="mt-4 mb-2">
      <h3 className='font-medium text-base xl:text-lg'>{subtitle}</h3>
    </header>
  );
};

export default Subtitle;
