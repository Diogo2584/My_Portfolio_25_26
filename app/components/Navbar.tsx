import Link from 'next/link';
export default function Navbar() {
    return (
        <nav className="navbar">
            Diogo Penafiel
            <ul className="navbar-menu">
            <li className="navbar-item">
                <a href="/" className="navbar-link hover:underline" >
                About Me
                </a>
            </li>
            <li className="navbar-item">
                <a href="/projects" className="navbar-link hover:underline">
                Projects
                </a>
            </li>
            <li className="navbar-item">
                <a href="/contact_me" className="navbar-link hover:underline" >
                Contact
                </a>
            </li>
            </ul>
        </nav>
    );
    }