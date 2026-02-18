import Project_card from '../components/Project_card';

export default function Projects() {
    const projects = [
        {
            title: "Project 1",
            date: "January 2024",
            info: "This is a description of project 1. It showcases my skills in web development.",
            src: "/Project.png",
            alt: "Project 1 Image"
        },
        {
            title: "Project 2",
            date: "February 2024",
            info: "This is a description of project 2. It demonstrates my expertise in React and TypeScript.",
            src: "/Project.png",
            alt: "Project 2 Image"
        },
        {
            title: "Project 3",
            date: "March 2024",
            info: "This is a description of project 3. A full-stack application built with Next.js.",
            src: "/Project.png",
            alt: "Project 3 Image"
        },
        {
            title: "Project 4",
            date: "April 2024",
            info: "This is a description of project 4. An innovative solution using modern web technologies.",
            src: "/Project.png",
            alt: "Project 4 Image"
        }
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1>My Projects</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {projects.map((project, index) => (
                    <Project_card
                        key={index}
                        title={project.title}
                        date={project.date}
                        info={project.info}
                        src={project.src}
                        alt={project.alt}
                    />
                ))}
            </div>
        </div>
    );
}
