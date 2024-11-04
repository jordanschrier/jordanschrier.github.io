import images from "../images";

export default function Reconnecting(){
    return(
        <div class="container-lg">
            <div class="row">
                <div class="col-md-12">
                    <h1>Reconnecting Lehigh</h1>
                    <div class="tag-container mb-4">
                        <span class="tags">UI/UX Design</span>
                    </div>
                    <div class="col-8 mb-4">
                        <p class="work-description">Connect Lehigh is a recently launched campus dashboard focused on customization, serving as a hub for the entire campus community.</p>
                        <p class="work-description">Our project, Reconnecting Lehigh, is a conceptual redesign of the university's existing site,
                            with goals of increasing accessibility and reorganizing information.
                        </p>
                    </div>
                    <div class="col mb-4 d-flex justify-content-center">
                        <img loading="lazy" src={images.reconnecting.frames} class="work-image img-fluid" alt="Reconnecting Lehigh UI Mobile Frames"></img>
                    </div>
                    <p class="work-description">Common anecdotes on the website are both visual and functional, with many embedded iFrames, lack of visual graphics,
                        repeated information, redirects, and errors. While the site has a goal of customization, most students and faculty we surveyed didn't know it was possible.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col mb-4">
                    <div>
                        <img loading="lazy" src={images.reconnecting.personaStudent} class="work-image img-fluid" alt="User persona for 'Cami Custom', a student interested in customization and simplicity"></img>
                    </div>
                </div>
                <div class="col-md-12">
                    <p class="work-description">We developed personas based on the main categories of users on the site, honing in on students (who may or may not be work-study employees) and faculty.</p>
                    <div class="col mb-4 d-flex justify-content-center">
                        <div>
                            <img loading="lazy" src={images.reconnecting.personaProf} class="work-image img-fluid" alt="User persona for 'Concise Chris', a professor who finds the current site confusing"></img>
                        </div>
                    </div>
                    <div class="col mb-4 d-flex justify-content-center">
                        <div>
                            <img loading="lazy" src={images.reconnecting.desktop} class="work-image img-fluid" alt="Desktop wireframes with sections for links and widgets"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p class="work-description">To reorganize the information and keep the merit of a customizable portal, I developed
                        widget concepts for centralized information. We additionally utilized existing icons from The Perch to categorize
                        the information and increase screen reader and keyboard accessibility.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col mb-4 d-flex justify-content-center">
                    <div>
                        <img loading="lazy" src={images.reconnecting.mobile} class="work-image img-fluid" alt="Mobile wireframes with a carousel of icons and widget section"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}