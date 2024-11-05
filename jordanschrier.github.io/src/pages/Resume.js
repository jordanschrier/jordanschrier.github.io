import '../styles/resume.css';

export default function Resume(){
    return(
        <div className="container-lg resume">
            <div className="row">
                <div className="col-3"></div>
                <div className="col"><h2 className="section">Education</h2></div>
            </div>
            <div className="row">
                <div className="row date">
                    <h3 className="pe-5">May 2025</h3>
                    <h3>Lehigh University</h3>
                </div>
                <p>Bethlehem, PA</p>
                <div className="col">
                    <h2 className="section">Education</h2>
                    
                    <h3>Lehigh University</h3><p>Bethlehem, PA</p>
                    <h3>Bachelor of Arts: Computer Science and Design majors</h3>
                    <h3>Minor: Cognitive Science</h3>
                </div>
            </div>
            <div className="row">
                <h2 className="section">Coursework</h2>
                <div className="col-3"></div>
                <div className="col">
                    <ul>
                        <li>User Experience Design</li>
                        <li>Web Systems Programming</li>
                        <li>Software Engineering</li>
                        <li>Linguistics</li>
                        <li>Global Contemporary Art</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}   