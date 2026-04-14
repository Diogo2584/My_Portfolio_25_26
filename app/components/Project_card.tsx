import Image from 'next/image';

export default function Project_card({title, date, info, src, alt, link, width = 500, height = 300}: {title: string, date: string, info: string, src: string, alt: string, link?: string, width?: number, height?: number}) {
    return(
        <div>
            <h2> {title} </h2>
            <h3> {date} </h3>
            <p> {info} </p>
            {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                    />
                </a>
            ) : (
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                />
            )}
        </div>
    );
}
