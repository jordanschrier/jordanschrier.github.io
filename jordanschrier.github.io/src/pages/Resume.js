import '../styles/resume.css';

export default function Resume(){
    return(
        <div className="container-lg resume">
            <div className="row">
                <h1 className="section mb-3">Education</h1>
                <div className="col-md-4">
                    <h2>Lehigh University</h2>
                    <p className="date">May 2025</p>
                </div>
                <div className="col desc">
                    <ul>
                        <li>Bachelor of Arts: Computer Science & Design majors</li>
                        <li>Minor: Cognitive Science</li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <h1 className="section mb-3 mt-3">Experience</h1>
                <div className="col-md-4">
                    <h2>Novocure</h2>
                    <h3>Digital Marketing Intern</h3>
                    <p className="date">Jun 2023 &mdash; Present</p>
                </div>
                <div className="col">
                    <ul className="desc">
                        <li>
                            Lead end-to-end development of US digital team's internal programmatic creative,
                            from content creation to PRC approval and agency handoff, improving efficiency, 
                            reducing costs, and elevating design standards
                        </li>
                        <li>
                            Implement vector illustration, generative AI, and interactivity to align creative
                            with evolving campaigns and branding under pharmaceutical regulations
                        </li>
                        <li>
                            Authored and monitored organic and paid social content tailored to the CX funnel
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-md-4">
                    <h2>Lehigh University</h2>
                    <h3>Apprentice Teacher</h3>
                    <p className="date">Jan 2024 &mdash; May 2024</p>
                </div>
                <div className="col">
                    <ul className="desc">
                        <li>
                            Mentored 16 2-D Design students through weekly critique, work periods, and grading
                        </li>
                        <li>
                            Assessed, developed, and presented lesson materials for various skill levels
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row pt-3">
                <div className="col-md-4">
                    <h2>Lehigh Sustainability</h2>
                    <h3>Graphic Design Assistant</h3>
                    <p className="date">Aug 2021 &mdash; Dec 2023</p>
                </div>
                <div className="col">
                    <ul className="desc">
                        <li>
                            Designed marketing collateral for social formats and campus locations, contributing to 
                            consistent branding of annual campaigns to achieve university sustainability goals
                        </li>
                        <li>
                            Fostered collaboration within the team, providing feedback and presenting progress in 
                            weekly meetings
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row pt-3">
                <h1 className="section mb-3 mt-3">Leadership</h1>
                <div className="col-md-4">
                    <h2>Lehigh F1RST</h2>
                    <h3>Vice President</h3>
                    <p className="date">May 2024 &mdash; Present</p>
                </div>
                <div className="col">
                    <ul className="desc">
                        <li>
                            Conduct interviews for first-generation e-board members and advise incoming marketing 
                            director on brand and social media direction
                        </li>
                        <li>
                            Serve as the primary liaison with organizations and external partners, fostering strong 
                            relationships and effective communication
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row pt-3">
                <h1 className="section mb-3 mt-3">Skills & Tools</h1>
                <div className="col">
                <div className="tag-container">
                    <span className="tags">Wireframing & Prototyping</span>
                    <span className="tags">Augmented Reality (AR)</span>
                    <span className="tags">Responsive Design</span>
                    <span className="tags">Agile Development</span>
                    <span className="tags">HTML/CSS</span>
                    <span className="tags">Javascript</span>
                    <span className="tags">Typescript</span>
                    <span className="tags">Java</span>
                    <span className="tags">SQL</span>
                    <span className="tags">REST</span>
                    <span className="tags">React</span>
                    <span className="tags">Bootstrap</span>
                    <span className="tags">Git</span>
                    <span className="tags">Jira</span>
                    <span className="tags">Sharepoint</span>
                    <span className="tags">Veeva Vault PromoMats</span>
                    <span className="tags">Adobe Creative Suite</span>
                    <span className="tags">Figma</span>
                </div>
                </div>
            </div>
        </div>
    );
}   