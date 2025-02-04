import images from "../images";

export default function Advisa() {
    return (
        <div className="container-lg">
            <div className="row">
                <h1>Advisa</h1>
                <div className="tag-container mb-4">
                    <div className="tags"><span>UI/UX design</span></div>
                    <div className="tags link-btn"><a href="https://www.figma.com/proto/ykXxPD8sKokXhkNVDPqrdK/Advisa?page-id=30%3A316&node-id=169-495&starting-point-node-id=169%3A495&t=H7zPAsUZiT01R5f2-1">Prototype<i className="fa-solid fa-up-right-from-square"></i></a></div>
                </div>
                <p className="desc">
                    Academic advising is a universal challenge facing students, faculty and staff at higher education institutions. With course requirements, prerequisites, and schedules, manually planning for course registration can be stressful for a student, their advisor, and department coordinators. What does the future of advising look like?
                </p>
            </div>
            <div className="col mb-4">
                <div><img loading="lazy" src={images.advisa.mockup} className="work-image img-fluid" alt="Advisa chatbot mockups on desktop and mobile screens"></img></div>
            </div>
            <div className="row">
                <p className="desc">
                    Currently, planning for registration in the context of Lehigh University involves meetings, spreadsheets, and multiple interfaces where students and their advisors comb through course requirements. The degree audit system helps students keep track of their requirements, but remains uncoupled from the registration process.
                </p>
            </div>
            <div className="row">
                <div className="col mb-4">
                    <div>
                        <img loading="lazy" src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*w8zbJJ7H0l9dfaXCSvVQag.png" className="work-image img-fluid" alt="Lehigh's legacy degree audit system"></img>
                    </div>
                </div>
                <div className="col-md-12">
                    <p className="desc">
                        University websites map out course plans in detail, some displaying full four-year breakdowns. However, students' schedules rarely go according to plan. Course scheduling, available seats, and the ever-evolving interests of students facilitated through the push for interdisciplinary education factor into the complexity of schedule planning.
                    </p>
                    <div className="col-sm-8 mb-4">
                        <div>
                            <img loading="lazy" src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ir11u7sq5YaBXm8V8Wo3Kg.png" className="work-image img-fluid" alt="Snapshot of Lehigh's schedule recommendations"></img>
                        </div>
                    </div>
                </div>
            </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="desc"> 
                            I designed Advisa with the many tech-savvy undergrads I know in mind. Many students feel they don't have time for the intricacies of schedule planning, and when professors serve as academic advisors, it becomes a conflict on both sides.
                        </p>
                    </div>
                    <div className="col mb-4">
                        <div>
                            <img loading="lazy" src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*eeUaCfOJpOdPmmCOMy5kYg.png" className="work-image img-fluid" alt="Crochique style tile"></img>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p className="desc">
                            Advisa is a conceptual chatbot that draws interface inspiration from AI tools such as ChatGPT, evoking a modern technical aesthetic reminiscent of my favorite programming IDE color schemes. Designed for intuitive information entry, Advisa utilizes micro-animations within the space of chat messages to draw a parallel to chatbots that is distinctly non-AI.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <img loading="lazy" src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*cb4oMLzymLy8tJSTUkX4qw.png" className="work-image img-fluid" alt="Crochique style tile"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <p className="desc">
                            It aims to centralize semester plans, key dates, and program requirements with the added benefit of information syncing and automated registration.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div>
                        <img loading="lazy" src="https://miro.medium.com/v2/resize:fit:2000/format:webp/1*JwH2kYMJ5ufZbB_o17GlgA.png" className="work-image img-fluid" alt="Crochique style tile"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <p className="desc">
                            The most complex part of developing Advisa was understanding the user flow. While easy to imagine a chatbot that simply syncs all the user's data and registers them automatically, I wanted to explore the interactive options for entering that data manually. To simplify prototype complexity, I developed the above user flow that utilizes many of the same components.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <img loading="lazy" src="https://miro.medium.com/v2/resize:fit:2000/format:webp/1*XB0ytWPXGrc3Q0MP2Wb7Tw.png" className="work-image img-fluid" alt="Advisa wireframe sketches"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <p className="desc">
                            Because I prioritized data display within the boundaries of chat bubbles, most of my initial wireframing involved those intricate components. How can you ensure the user can specify they took a course Pass/Fail? Or maybe they got a D, and Advisa needs to count the credit without counting it as a prerequisite.
                        </p>
                        <p className="desc">
                            I additionally approached this design process from a development perspective, imagining the way courses may be stored in a database as objects with parent courses as prerequisites.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <img src="https://miro.medium.com/v2/resize:fit:2000/format:webp/1*3BU0vwSl64EyIoeUyTnbfw.jpeg" className="work-image img-fluid" alt="Advisa screens mockup"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <p className="desc mb-4">
                            When I had a completed flow, I completed a round of user testing through <a className="link" href="https://usertesting.com">usertesting.com</a> with the following approach:
                        </p>
                        <p className="desc bold">
                            Demographic
                        </p>
                        <ul className="desc">
                            <li>Ages 18-24</li>
                            <li>Current full-time college student</li>
                            <li>Have registered for courses online in the past, and have met with an advisor for course planning</li>
                        </ul>
                        <p className="desc bold">
                            Provided Scenario
                        </p>
                        <p className="desc">
                            You are a Graphic Design major and Apparel Design minor at Lehigh University. An academic department just released a new advising tool to streamline course registration.
                        </p>
                        <p className="desc bold">
                            Tasks
                        </p>
                        <ul className="desc">
                            <li>Make a new schedule **without** syncing your information automatically.</li>
                            <li>Enter Fall 2023 as your start date, and Spring 2027 as your last date. Send this to Advisa.</li>
                            <li>Before proceeding, what 3 words would you use to describe the personality of the tool?</li>
                            <li>Select your graphic design major and apparel design minor and send them to Advisa.</li>
                            <li>If you were not testing the site, would you stop or pause here?</li>
                            <li>Locate the programs you previously entered in your information.</li>
                            <li>Do you know any websites or apps that are similar to this one? If so, explain how this one compares.</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <img src="https://miro.medium.com/v2/resize:fit:2000/format:webp/1*nVLAHOpLrB2XnasLXI6Rnw.jpeg" className="work-image img-fluid" alt="Advisa screens mockup"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <p className="desc">
                            These preliminary tests revealed overall success in the mobile version's design, where the testers were successful in completion of their tasks other than confusion on locating previously entered courses through the dropdown menu. They also used words such as “straight to the point” and “intuitive,” while naming Canvas as a source of comparison to my surprise. From this, I discovered the app's distinction from a traditional chatbot, with users identifying it most as a course registration tool.
                        </p>
                        <p className="desc">
                            In the future, I'd like to add animated confirmation screens indicating the user is scheduled to register for courses, and perhaps an indication that saved information can be accessed through the dropdown.
                        </p>
                    </div>
                </div>
        </div>
    );
}