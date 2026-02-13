import Link from 'next/link';
export default function Navbar() {
    return (
        <nav className="navbar">
            Diogo Penafiel
            <ul className="navbar-menu">
            <li className="navbar-item">
                <Link href="/" className="navbar-link">
                About Me
                </Link>
            </li>
            <li className="navbar-item">
                <Link href="/projects" className="navbar-link">
                Projects
                </Link>
            </li>
            <li className="navbar-item">
                <Link href="/contact_me" className="navbar-link">
                Contact
                </Link>
            </li>
            </ul>
        </nav>
    );
    }