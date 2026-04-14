import Image from 'next/image';
export default function Footer() {
    return (
        <footer className="footer">
        Email
           <ul className="footer-menu">
            <li className="relative w-10 h-10 md:w-[70px] md:h-[70px]">
           <Image src="/image 12.png" alt="Profile Picture" fill />  
           </li>
           <li className="relative w-10 h-10 md:w-[70px] md:h-[70px]">
           <Image src="/image 13.png" alt="Profile Picture" fill />
           </li>
           </ul>
        </footer>
    );
    }