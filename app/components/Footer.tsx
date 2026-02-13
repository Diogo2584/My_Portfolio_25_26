import Image from 'next/image';
export default function Footer() {
    return (
        <footer className="footer">
        Email
           <ul className="footer-menu">
            <li>
           <Image src="/image 12.png" alt="Profile Picture" width={70} height={70} />  
           </li>
           <li>
           <Image src="/image 13.png" alt="Profile Picture" width={70} height={70} />
           </li>
           </ul>
        </footer>
    );
    }