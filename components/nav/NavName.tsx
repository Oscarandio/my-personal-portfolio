
 import Image from "next/image";

 interface NavProps {
   name: string;
   imageUrl: string;
 }
 
 const NavName: React.FC<NavProps> = ({ name, imageUrl }) => {
   return (
     <figure className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-2 md:gap-4 text-gray-700'>
       <Image
         className='rounded'
         width='48'
         height='48'
         src={imageUrl}
         alt={name}
       />
       <figcaption className='xl:text-xl font-bold'>{name}</figcaption>
     </figure>
   );
 };

export default NavName
