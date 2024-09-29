interface HeaderTitleProps {
 title: string;
 description: string;
}

const HeaderTitle:React.FC<HeaderTitleProps> = ({ title, description}) => {
  return (
    <header className='my-2 px-4 py-6 text-black bg-white rounded'>
      <h1 className='text-2xl xl:text-4xl font-semibold mb-4 text-center '>{title}</h1>
      <p className='w-full xl:w-3/4 mx-auto'>{description}</p>
    </header>
  );
};

export default HeaderTitle;
