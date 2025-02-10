import images from "../images"
import { useEffect } from "react";
import More from "../more";

export default function Clippies(){
    useEffect(() => {
        // Initialize the Dimensions tag
        window.initDimensions({
            cloudName: "d8s-hixquv",
            viewers: ["3D"],
            threeDViewer: {
                viewer: {
                    controls: {
                        //disables scroll-to-zoom functionality (gets annoying when scrolling)
                        mouseZoom: false,
                        //turn off the 'view in AR' button
                        ar: false,
                    },
                    rotation: {
                        //turn off rotation when user starts to interact with the model
                        offOnInteraction: true,
                    },
                },
            },
        });
    }, []);
    return(
        <div className="container-lg">
            <div className="row">
                <div className="col-md-12">
                    <h1>Clippies</h1>
                    <div className="tag-container mb-4">
                        <div className="tags"><span>branding</span><span>product design</span><span>packaging</span></div>
                    </div>
                    <p className="desc">
                        Clippies is a conceptual, fun solution to the quirks of kids' lunchtime&ndash;a clip that doubles as a utensil and bag clasp, 
                        found hanging in the snack aisles of supermarkets. With vibrancy and minimalism, the brand aims to appeal to both kids and their 
                        parents. Paper bags are the ideal Clippies combo, providing a better single-use alternative to snack bags that bring back that 
                        lunchtime nostalgia.
                    </p>
                </div>
                <div className="col mb-4">
                    <img loading="lazy" src={images.clippies.rendering} className="work-image img-fluid" alt="Clippies Packaging Mockup"></img>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-6 mb-4">
                    <div className="ratio ratio-1x1">
                        <img loading="lazy" src={images.clippies.sticker} className="work-image img-fluid" alt="Clippies sticker"></img>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="ratio ratio-1x1">
                        <img loading="lazy" src={images.clippies.bags} className="work-image img-fluid" alt="Clippies bags"></img>
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <p className="desc">Check out these <a className="link" href="https://www.figma.com/proto/2BUebbx9J0BzATJMvK3ob8/Clippies-Ad-Mockups?node-id=7-15&starting-point-node-id=7%3A15&t=kEInEp7RKPuFAQ1E-1">parallax banner ads</a> I created on Figma!</p>
                <div className="col-md-15 mb-4">
                    <div className="ratio ratio-16x9">
                        <iframe 
                            src="https://player.vimeo.com/video/1016845010?loop=1&autopause=0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style={{position:"absolute", top:"0", left:"0", width: "100%", height:"100%", borderRadius: "10px"}}
                            title="banner_demo_nfjoif">
                        </iframe>
                        <script src="https://player.vimeo.com/api/player.js"></script>
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-12">
                    <p className="desc">
                        I delved into product design components while developing the Clippies brand, working in Rhino to 3D model 
                        and print multiple iterations of the clip itself. This involved studying the shape and scale of kids' 
                        utensils and bag clips with the limitations of a traditional 3D printer. Modifying a hanging box dieline 
                        to fit 4 colorful clips seen through the logo's letters, I lasercut and etched single-color icons and text 
                        describing the product.
                    </p>
                </div>
                <div
                    id="three-d-viewer"
                    style={{height: "400px"}}
                    data-d8s-type="3d"
                    data-d8s-id="Clippies-Box-Mockup-6-9-2024-1">        
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-md-12">
                    <h2>Ideation</h2>
                </div>
            </div>
            <div className="row">
                <div className="col mb-4">
                    <div className="ratio ratio-16x9">
                        <img loading="lazy" src={images.clippies.ideationClippies} className="work-image img-fluid" alt="Clippies moodboard and sketch"></img>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col mb-4">
                    <div className="ratio ratio-16x9">
                        <img loading="lazy" src={images.clippies.ideationZipvana} className="work-image img-fluid" alt="Zipvana moodboard and sketch"></img>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col mb-4">
                    <div className="ratio ratio-16x9">
                        <img loading="lazy" src={images.clippies.ideationZipzest} className="work-image img-fluid" alt="Zipzest moodboard and sketch"></img>
                    </div>
                </div>
            </div>
            <More 
                prevImg={images.greenway.thumbnail}
                nextImg={images.reconnecting.thumbnail}
                prevName={"Greenway Gallery"}
                nextName={"Reconnecting Lehigh"}
                prevLink={"/greenway-gallery"}
                nextLink={"/reconnecting-lehigh"}
            />
        </div>
    );
}