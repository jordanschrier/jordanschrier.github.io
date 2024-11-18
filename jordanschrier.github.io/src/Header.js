/**
 * Header adapted from Bootstrap, but with the icon version of my logo at the mobile breakpoint.
 * Conditionally adds the active class depending on current location to highlight its
 * corresponding tab.
 */
import images from "./images";
import { Link, useLocation } from "react-router-dom";
import './styles/header.css';

export default function Header(){
    const page = useLocation();
    const {pathname} = page;
    return(
        <header className="container-lg">
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
                <Link to="/" className="navbar-brand">
                    <img id="main-header" src={images.logo} alt="Jordan Schrier full logo"></img>
                    <img id="mini-header" src={images.miniLogo} alt="'J' icon logo"></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className={`nav-link text ${pathname === '/' ? 'active' : ''}`}>
                            work
                        </Link>
                        <Link to="about" className={`nav-link text ${pathname === '/about' ? 'active' : ''}`}>
                            about
                        </Link>
                        <Link to="resume" className={`nav-link text ${pathname === '/resume' ? 'active' : ''}`}>
                            resume
                        </Link>
                        <a className="nav-link icon-box" href="https://linkedin.com/in/jordanschrier">
                            <i className="fa-brands fa-linkedin-in fa-lg" alt="LinkedIn logo"></i>
                        </a>
                        <a className="nav-item nav-link icon-box github" href="https://github.com/jordanschrier/jordanschrier.github.io">
                            <i className="fa-brands fa-github fa-lg" alt="GitHub logo"></i>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}