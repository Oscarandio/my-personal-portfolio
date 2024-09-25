import Link from "next/link";

interface LiProps {
  text: string;
  url: string;
}
const Li: React.FC<LiProps> = ({ url, text }) => {
  return (
    <li className='text-gray-700 hover:text-gray-900'>
      <Link href={url}>{text}</Link>
    </li>
  );
};

export default Li;
