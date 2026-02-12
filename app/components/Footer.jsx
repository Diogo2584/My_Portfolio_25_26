import Image from 'next/image';
export default function Footer() {
    return (
        <footer className="footer">
        Email
           <ul>
           <Image src="/image 12.png" alt="Profile Picture" width={70} height={70} />  
           <Image src="/image 13.png" alt="Profile Picture" width={70} height={70} />
           </ul>
        </footer>
    );
    }