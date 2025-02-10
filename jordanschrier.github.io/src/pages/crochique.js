import images from "../images";
import More from "../more";

export default function Crochique() {
    return (
        <div className="container-lg">
            <div className="row">
                <h1>Crochique</h1>
                <div className="tag-container mb-4">
                    <div className="tags"><span>UI/UX design</span><span>branding</span></div>
                    <div className="tags link-btn"><a href="https://www.figma.com/proto/nkMxPwNEPTVhxffoNDIGll/P1-%7C-Jordan-Schrier-%7C-E-Commerce-Mobile-Site?page-id=5470%3A2012&node-id=5470-2013&starting-point-node-id=5470%3A2013&t=QFsxIexNvVAh56RH-1">Prototype<i className="fa-solid fa-up-right-from-square"></i></a></div>
                </div>
                <p className="desc">
                    Crochique, a conceptual mobile e-commerce site, aims to increase accessibility to the crocheting hobby
                    through modularized design and a customizable kit-building interface.
                </p>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <img loading="lazy" src={images.crochique.steps} className="work-image img-fluid" alt="Crochique UI kit-building interface"></img>
                </div>
            </div>
            <div className="row">
                <p className="desc">
                    With the onset of the COVID-19 lockdown and rise in popularity of apps like
                    TikTok, people were eager to learn and share new hobbies. According to {" "}
                    <a className="link" href="https://www.forbes.com/sites/loisaltermark/2020/03/27/knitting-has-become-the-cool-activity-during-the-coronavirus-crisis/">this Forbes article</a>
                    , a particular knitting company saw a 75% sales increase each week during the pandemic.
                </p>
                <p className="desc">
                    While gaining popularity in a younger demographic, crochet e-commerce is old-fashioned, often requiring extensive research to begin the hobby
                    despite the small number of required supplies. The go-to options are big craft store websites that can be overwhelming and confusing, expecting customers to know what
                    they need, while standalone sites are specialized and expensive.
                </p>
            </div>
            <div className="row">
                <div className="col mb-4">
                    <img loading="lazy" src={images.crochique.persona} className="work-image img-fluid" alt="Crochique user persona for a student hobbyist"></img>
                </div>
                <div className="col-md-12">
                    <p className="desc">
                        Through my research and personal experience starting crochet, I developed one primary user: a young hobbyist starting crochet with a specific
                        project in mind and personal aesthetic. By delving into craft site crochet kits, I saw that their inclusions are numerous. This isn't well-suited for, say, a college
                        student picking up a new hobby they aren't yet committed to.
                    </p>
                    <div className="col mb-4">
                        <img loading="lazy" src={images.crochique.wireframe} className="work-image img-fluid" alt="Crochique low fidelity wireframe"></img>   
                    </div>
                </div>
            </div>
            <div className="row-md-12">
                <p className="desc">
                    To approach this issue, I centered Crochique around customizable crochet kits, 
                    broken down into three main components: a hook, yarn, and toolkit. The user can pick a pattern/color for
                    each component to avoid feeling limited by the kit's simplicity and beginner-friendliness. If they feel
                    confident in their skills or want to push their work further, users can also view individual products. 
                    My biggest design goal was modularity, keeping the site approachable and concise.
                </p>
                <p className="desc">
                    With my biggest reference being crochet blogs, I knew Crochique needed to 
                    feel friendly and community-based. I also studied the interfaces of Pinterest, Reddit, and 
                    Instagram since some sort of feed/post interface would be integral to that feeling.
                </p>
                <p className="desc">
                    I started with an analogous scheme of five colors, reminiscent of feminine 
                    crochet blogs, but bolder and modernized.
                </p>
            </div>
            <div className="row">
                <div className="col">
                    <img loading="lazy" src={images.crochique.styleTile} className="work-image img-fluid" alt="Crochique style tile"></img>
                </div>
            </div>
            <div className="row">
                <p className="desc">
                    As I refined the prototype and increased fidelity, I saw the need
                    for an additional contrasting color to distinguish products more, and added a yellow. 
                    Interestingly, ChatGPT is excellent at generating a suitable color to add to an existing 
                    scheme when you provide it with hex codes.
                </p>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <img loading="lazy" src={images.crochique.variants} className="work-image img-fluid" alt="Crochique style tile"></img>
                </div>
            </div>
            <div className="row">
                <p className="desc">
                    As I moved into testing, the biggest usability conflicts were 
                    confusion about page redirection and the “build a kit” interface. This was a big challenge, 
                    as I had to communicate that the three kit components were all part of the same kit.
                </p>
            </div>
            <div className="row mb-4">
                <div 
                    style={{padding: "65% 0 0 0", position: "relative"}}>
                        <iframe 
                            src="https://player.vimeo.com/video/1011413105?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write" 
                            style={{position: "absolute", top:"0", left:"0", width:"100%", height:"100%", borderRadius: "10px"}} title="Crochique Prototype">
                        </iframe>
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>   
            </div>
            <div className="row">
                <p className="desc">To solve this, I utilized icons to communicate each component of the
                    kit, as well as swipe interactions to physically move through the kit. I sourced my icons 
                    from the Figma plugins Iconduck and Bootstrap Icons, in addition to Adobe Stock vectors.
                </p>
                <p className="desc">Imagery was another big challenge, as free-use images of crochet 
                    products are few and far between. I found <a className="link" href="https://grabcad.com/library/ergonomic-crochet-hook-1">
                    this lovely 3D model of an ergonomic crochet hook</a>, 
                    which allowed me to customize the hooks in Adobe Dimension with a metallic texture, lighting 
                    environment, and various patterns. I followed the same process with a tin 3D model from Adobe 
                    Stock. However, unable to find a suitable yarn 3D model, I uploaded the two previous images 
                    into Adobe Firefly to match my style into a generative AI image. Through this, I discovered 
                    that Firefly works best with an iterative approach: uploading a reference, using the best 
                    image it generates as a reference, and so on until it creates something convincing.
                </p>
            </div>
            <div className="row">
                <div className="col">
                    <img loading="lazy" src={images.crochique.screens} className="work-image img-fluid" alt="Crochique style tile"></img>
                </div>
            </div>
            <div className="row">
                <p className="desc mt-4">
                    For some of the kit/product thumbnails, I used Photoshop to insert
                    the solid-color backgrounds then added grainy drop shadows. Not finding free images or models
                    of a blocking board, I personally 3D modeled it, then uploaded it to Firefly as a reference 
                    to match the lighting to my other images.
                </p>
                <p className="desc">
                    All “user content” photos are from Unsplash.
                </p>
                <p className="desc">
                    To tie everything together, I used <a className="link" href="https://www.noiseandgradient.com/?chaos=0.1&colors=%23ed625d-%2342b6c6-%23f79f88-%23b2dfe6-%2303232d&grain=0.1">
                    Noise & Gradient</a> to make a trendy gradient background for the entire site.
                </p>
            </div>
            <More 
                prevImg={images.reconnecting.thumbnail}
                nextImg={images.advisa.thumbnail}
                prevName={"Reconnecting Lehigh"}
                nextName={"Advisa"}
                prevLink={"/reconnecting-lehigh"}
                nextLink={"/advisa"}
            />
        </div>
    );
}