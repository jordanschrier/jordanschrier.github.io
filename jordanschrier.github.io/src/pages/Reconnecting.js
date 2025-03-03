import images from "../images";
import More from "../more";

export default function Reconnecting(){
    return(
        <div className="container-lg">
            <div className="row">
                <div className="col-md-12">
                    <h1>Reconnecting Lehigh</h1>
                    <div className="tag-container mb-4">
                        <div className="tags"><span>UI/UX design</span></div>
                        <div className="tags link-btn"><a href="https://www.figma.com/proto/5uq3VUnkZrczTpHFqtN4NM/Reconnecting-Lehigh-Collaborative-Boards?page-id=31%3A44&node-id=31-46&starting-point-node-id=31%3A46&t=GenUq8pDDqTp7pUv-1">Prototype<i className="fa-solid fa-up-right-from-square"></i></a></div>
                    </div>
                    <div className="col mb-4">
                        <p className="desc">Connect Lehigh is a recently launched campus dashboard focused on customization, serving as a hub for the entire campus community.</p>
                        <p className="desc">Our project, Reconnecting Lehigh, is a conceptual redesign of the university's existing site,
                            with goals of increasing accessibility and reorganizing information.
                        </p>
                    </div>
                    <div className="col mb-4 d-flex">
                        <img loading="lazy" src={images.reconnecting.frames} className="work-image img-fluid" alt="Reconnecting Lehigh UI Mobile Frames"></img>
                    </div>
                    <p className="desc">Common anecdotes on the website are both visual and functional, with many embedded iFrames, lack of visual graphics,
                        repeated information, redirects, and errors. While the site has a goal of customization, most students and faculty we surveyed didn't know it was possible.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col mb-4">
                    <div>
                        <img loading="lazy" src={images.reconnecting.personaStudent} className="work-image img-fluid" alt="User persona for 'Cami Custom', a student interested in customization and simplicity"></img>
                    </div>
                </div>
                <div className="col-md-12">
                    <p className="desc">We developed personas based on the main categories of users on the site, honing in on students (who may or may not be work-study employees) and faculty.</p>
                    <div className="col mb-4 d-flex">
                        <div>
                            <img loading="lazy" src={images.reconnecting.personaProf} className="work-image img-fluid" alt="User persona for 'Concise Chris', a professor who finds the current site confusing"></img>
                        </div>
                    </div>
                    <div className="col mb-4 d-flex">
                        <div>
                            <img loading="lazy" src={images.reconnecting.desktop} className="work-image img-fluid" alt="Desktop wireframes with sections for links and widgets"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p className="desc">
                        To reorganize the information and keep the merit of a customizable portal, I developed
                        widget concepts for centralized information. We additionally utilized existing icons from The Perch to categorize
                        the information and increase screen reader and keyboard accessibility.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col mb-4 d-flex">
                    <div>
                        <img loading="lazy" src={images.reconnecting.mobile} className="work-image img-fluid" alt="Mobile wireframes with a carousel of icons and widget section"></img>
                    </div>
                </div>
            </div>
            <More 
                prevImg={images.clippies.thumbnail}
                nextImg={images.crochique.thumbnail}
                prevName={"Clippies"}
                nextName={"Crochique"}
                prevLink={"/clippies"}
                nextLink={"/crochique"}
            />
        </div>
    );
}