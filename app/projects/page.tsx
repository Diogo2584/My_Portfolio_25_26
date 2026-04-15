import Project_card from '../components/Project_card';

export default function Projects() {
    const projects = [
        {
            title: "Project 1",
            date: "October 4, 2024",
            info: "This is a description of project 1. It showcases my skills in web development.",
            src: "/image 17.png",
            alt: "Project 1 Image",
            link: "https://codehs.com/sandbox/id/new-sandbox-program-17F2hm?collaborate=-OcLGZ3XQY_4nHcOHr_X" // Replace with actual link
        },
        {
            title: "Project 2",
            date: "October 7, 2025" ,
            info: "This is a description of project 2. It demonstrates my expertise in React and TypeScript.",
            src: "/Project.png",
            alt: "Project 2 Image",
            link: "https://codehs.com/sandbox/id/jazilyn-velasco-summative-assessment-webdev-ver-0df0FN" // Replace with actual link
        },
        {
            title: "Project 3",
            date: "January 5, 2026",
            info: "This is a description of project 3. A full-stack application built with Next.js.",
            src: "/image 16.png",
            alt: "Project 3 Image",
            link: "https://github.com/Diogo2584/DP-Midterm/tree/main/DPMidterm" // Replace with actual link
        },
        {
            title: "Project 4",
            date: "January 21, 2026",
            info: "This is a description of project 4. An innovative solution using modern web technologies.",
            src: "/image 15.png",
            alt: "Project 4 Image",
            link: "https://ourblooms-dp.netlify.app/", // Replace with actual link
            width: 500,
            height: 400
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
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}
