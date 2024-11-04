import images from "../images";

export default function Greenway(){
    return(
        <div class="container-lg">
            <div class="row">
                <div class="col-md-12">
                    <h1>Greenway Gallery</h1>
                    <div class="tag-container mb-4">
                    <span class="tags">augmented reality (AR)</span><span class="tags">branding</span>
                    </div>
                    <p class="work-description">Collaborating with engineering, architecture, product and graphic design students, our design team developed a
                        branding system for our yearlong redesign of public art panels on the South Bethlehem Greenway.
                        Our goal was to foster interest during construction and unify the four completed panels into a single exhibit for pedestrians to enjoy.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col mb-4">
                <div>
                    <img loading="lazy" src={images.greenway.styleguide} class="work-image img-fluid" alt="Greenway Gallery booklet styleguide"></img>
                </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <p class="work-description">Armed with the 3D assets from our talented peers, I designed the Greenway Gallery's symbol system. Through abstraction,
                    our symbols and pattern unite each structures' movement, function, and design. 
                    </p>
                    <p class="work-description">I additionally developed interactive augmented reality (AR) experiences and greenway photo renderings through Adobe Aero and Adobe Dimension,
                    respectively. This provided a glimpse into our progress true to scale, and supplemented much of the content in our team's main deliverable, a booklet summarizing
                    both semesters of progress. I was also responsible for the layout design of the booklet, for which I designed the above summarized styleguide.
                    </p>
                </div>
            </div>
            <div class="row">
            <div class="col-md-6 mb-4">
                <div class="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.symbolCantilever} class="work-image img-fluid" alt="Cantilever symbol reference"></img>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.renderCantilever} class="work-image img-fluid" alt="Cantilever rendering"></img>
                </div>
            </div>
            </div>
            <div class="row">
            <div class="col-md-6 mb-4">
                <div class="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.symbolSpinning} class="work-image img-fluid" alt="Spinning symbol reference"></img>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.renderSpinning} class="work-image img-fluid" alt="Spinning 3D rendering"></img>
                </div>
            </div>
            </div>
            <div class="row">
            <div class="col-md-6 mb-4">
                <div class="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.symbolArchway} class="work-image img-fluid" alt="Archway symbol reference"></img>
                </div>
            </div>
            <div class="col-md-6 mb-4">
                <div class="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.renderArchway} class="work-image img-fluid" alt="Archway 3D rendering"></img>
                </div>
            </div>
            </div>
            <div class="row">
            <div class="col-md-6 mb-4">
                <div class="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.symbolGroup2} class="work-image img-fluid" alt="Group 2 symbol reference"></img>
                </div>
            </div>
            <div class="col-md-6">
                <div class="ratio ratio-1x1">
                    <img loading="lazy" src={images.greenway.renderGroup2} class="work-image img-fluid" alt="Group 2 3D rendering"></img>
                </div>
            </div>
            </div>
        </div>
    );
}