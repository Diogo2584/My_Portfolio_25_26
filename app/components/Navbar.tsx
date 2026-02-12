export default function Navbar() {
    return (
        <nav className="navbar">
            Diogo Penafiel
            <ul className="navbar-menu">
            <li className="navbar-item">
                <a href="about" className="navbar-link">
                About Me
                </a>
            </li>
            <li className="navbar-item">
                <a href="projects" className="navbar-link">
                Projects
                </a>
            </li>
            <li className="navbar-item">
                <a href="contact_me" className="navbar-link">
                Contact
                </a>
            </li>
            </ul>
        </nav>
    );
    }