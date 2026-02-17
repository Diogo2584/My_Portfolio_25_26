import Image from "next/image";
export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1 className="heading1">Hi, I'm Diogo Penafiel</h1>
                <p className="paragraph">A passionate Frontend Developer with expertise in React and Next.js. I create engaging and user-friendly web applications that bring ideas to life.</p>
            </div>
            <div className="hero-image">
                <Image src="/image 11.png" alt="Profile Picture" width={300} height={300} />
            </div>
        </div>
    );
}