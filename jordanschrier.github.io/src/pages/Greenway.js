import images from "../images";

export default function Greenway(){
    return(
        <div className="container-lg">
            <div className="row">
                <div className="col-md-12">
                    <h1>Greenway Gallery</h1>
                    <div className="tag-container mb-4">
                    <span className="tags">augmented reality (AR)</span><span className="tags">branding</span>
                    </div>
                    <p className="work-description">Collaborating with engineering, architecture, product and graphic design students, our design team developed a
                        branding system for our yearlong redesign of public art panels on the South Bethlehem Greenway.
                        Our goal was to foster interest during construction and unify the four completed panels into a single exhibit for pedestrians to enjoy.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col mb-4">
                <div>
                    <img loading="lazy" src={images.greenway.styleguide} className="work-image img-fluid" alt="Greenway Gallery booklet styleguide"></img>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p className="work-description">Armed with the 3D assets from our talented peers, I designed the Greenway Gallery's symbol system. Through abstraction,
                    our symbols and pattern unite each structures' movement, function, and design. 
                    </p>
                    <p className="work-description">I additionally developed interactive augmented reality (AR) experiences and greenway photo renderings through Adobe Aero and Adobe Dimension,
                    respectively. This provided a glimpse into our progress true to scale, and supplemented much of the content in our team's main deliverable, a booklet summarizing
                    both semesters of progress. I was also responsible for the layout design of the booklet, for which I designed the above summarized styleguide.
                    </p>
                </div>
            </div>
            <div className="row">
            <div className="col-md-6 mb-4">
                <div className="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.symbolCantilever} className="work-image img-fluid" alt="Cantilever symbol reference"></img>
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.renderCantilever} className="work-image img-fluid" alt="Cantilever rendering"></img>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-6 mb-4">
                <div className="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.symbolSpinning} className="work-image img-fluid" alt="Spinning symbol reference"></img>
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.renderSpinning} className="work-image img-fluid" alt="Spinning 3D rendering"></img>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-6 mb-4">
                <div className="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.symbolArchway} className="work-image img-fluid" alt="Archway symbol reference"></img>
                </div>
            </div>
            <div className="col-md-6 mb-4">
                <div className="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.renderArchway} className="work-image img-fluid" alt="Archway 3D rendering"></img>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-md-6 mb-4">
                <div className="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.symbolGroup2} className="work-image img-fluid" alt="Group 2 symbol reference"></img>
                </div>
            </div>
            <div className="col-md-6">
                <div className="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.renderGroup2} className="work-image img-fluid" alt="Group 2 3D rendering"></img>
                </div>
            </div>
            </div>
        </div>
    );
}