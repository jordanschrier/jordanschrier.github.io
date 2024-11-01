/**
 * Interactive header adapted from Bootstrap.
 * Includes a recreation of my logo through individual spans that allow customization
 * of the letter spacing as the hover effect triggers the variable font transition.
 */
import images from "./images";
import './header.css';

export default function Header(){
    return(
        <header>
            <nav id="bootstrap-header" className="navbar navbar-expand-md navbar-light bg-white">
                <a className="navbar-brand" href="index.html">
                    <span id="header">
                        <span className="name">
                            <span>J</span>
                            <span>o</span>
                            <span>r</span>
                            <span>d</span>
                            <span>a</span>
                            <span>n</span>
                        </span><br></br>
                        <span className="name">
                            <span id="s">S</span>
                            <span id="c">c</span>
                            <span id="h">h</span>
                            <span>r</span>
                            <span id="i">i</span>
                            <span id="e">e</span>
                            <span>r</span>
                        </span>
                    </span>
                    <img id="mini_header" alt="'J' header icon" src={images.miniLogo}></img>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link text" id="index" href="index.html">work</a>
                        <a className="nav-item nav-link text" id="about" href="about.html">about</a>
                        <a className="nav-item nav-link text" id="resume" href="resume.html">resume</a>
                        <a className="nav-item nav-link icon-box" href="https://linkedin.com/in/jordanschrier">
                            <img 
                                alt="LinkedIn Icon"
                                src={images.linkedin} className="icon">
                            </img>
                        </a>
                        <a className="nav-item nav-link icon-box github" href="https://github.com/jordanschrier/jordanschrier.github.io">
                            <img 
                                alt="GitHub Icon" 
                                src={images.github} className="icon github">
                            </img>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}