import Image from 'next/image';

export default function Project_card({
  title,
  date,
  info,
  src,
  alt,
  link
}: {
  title: string;
  date: string;
  info: string;
  src: string;
  alt: string;
  link?: string;
}) {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <h3 className="text-sm text-gray-600 mb-3">{date}</h3>
      <p className="mb-4">{info}</p>

      {/* UNIFORM IMAGE CONTAINER */}
      <div className="w-full h-64 overflow-hidden rounded-lg">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Image
              src={src}
              alt={alt}
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </a>
        ) : (
          <Image
            src={src}
            alt={alt}
            width={500}
            height={300}
            className="object-cover w-full h-full"
          />
        )}
      </div>
    </div>
  );
}
