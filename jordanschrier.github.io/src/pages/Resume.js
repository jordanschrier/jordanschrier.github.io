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
                            Analyze and modify pages in Drupal CMS sites for accessibility and SEO improvements
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
                            Oversee the First-Year Representative Program, interview first-generation e-board members, support initiatives like the Calculator Lending Library, and manage representatives through regular meetings
                        </li>
                        <li>
                            Serve as the primary liaison with external partners, strengthening communication
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row pt-3">
                <h1 className="section mb-3 mt-3">Skills & Tools</h1>
                <div className="col">
                    <div className="tag-container">
                        <div className="tags">
                        <span>Wireframing & Prototyping</span>
                        <span>Augmented Reality (AR)</span>
                        <span>Responsive Design</span>
                        <span>Agile Development</span>
                        <span>WCAG Guidelines</span>
                        <span>HTML/CSS</span>
                        <span>Javascript</span>
                        <span>Typescript</span>
                        <span>Java</span>
                        <span>SQL</span>
                        <span>REST</span>
                        <span>React</span>
                        <span>Bootstrap</span>
                        <span>Git</span>
                        <span>Jira</span>
                        <span>Sharepoint</span>
                        <span>Veeva Vault PromoMats</span>
                        <span>Adobe Creative Suite</span>
                        <span>Figma</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}   