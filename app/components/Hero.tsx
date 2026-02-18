import Image from "next/image";
export default function Hero() {
    return (
        <div className="hero" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', backgroundColor: '#FDF0D5' }}>
            <div className="hero-content" style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h1 className="heading1">Hi, I'm Diogo Penafiel</h1>
                <p className="paragraph">A passionate Frontend Developer with expertise in React and Next.js. I create engaging and user-friendly web applications that bring ideas to life.</p>
            </div>
            <div className="hero-image" style={{ display: 'flex', justifyContent: 'center' }}>
                <Image src="/image 11.png" alt="Profile Picture" width={1253} height={330} />
            </div>
        </div>
    );
}