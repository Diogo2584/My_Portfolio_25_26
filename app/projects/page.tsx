import Project_card from '../components/Project_card';

export default function Projects() {
    const projects = [
        {
            title: "CTE Webpage Design",
            date: "October 4, 2024",
            info: "Me and other group members designed a webpage for the Computer Science department at our school using HTML, CSS, and JavaScript. The webpage includes information about the department, courses offered, and contact details.",
            src: "/image 17.png",
            alt: "Project 1 Image",
            link: "https://codehs.com/sandbox/id/new-sandbox-program-17F2hm?collaborate=-OcLGZ3XQY_4nHcOHr_X"
        },
        {
            title: "Advanced Project 1",
            date: "October 7, 2025" ,
            info: "A business website built with HTML, CSS, and JavaScript. It features a responsive design and interactive elements.",
            src: "/Project.png",
            alt: "Project 2 Image",
            link: "https://codehs.com/sandbox/id/diogo-and-jazilyn-adv-project1-sZ7KQz" 
        },
        {
            title: "Tea Cozy Midterm",
            date: "January 5, 2026",
            info: "A midterm project where we replicated the Tea Cozy website using HTML, CSS, and JavaScript. It includes a responsive design and interactive features.",
            src: "/image 16.png",
            alt: "Project 3 Image",
            link: "https://github.com/Diogo2584/DP-Midterm/tree/main/DPMidterm" // Replace with actual link
        },
        {
            title: "Ourblooms Website",
            date: "January 21, 2026",
            info: "This is a website replication of the Ourblooms website, built using HTML, CSS, and JavaScript. It features a responsive design and interactive elements.",
            src: "/image 15.png",
            alt: "Project 4 Image",
            link: "https://ourblooms-dp.netlify.app/", // Replace with actual link
            width: 500,
            height: 400
        }
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1 className ="text-2xl font-bold text-center mb-4">My Projects</h1>
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
