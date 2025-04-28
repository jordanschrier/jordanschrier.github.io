import images from "../images";
import "../styles/about.css";

export default function About(){
    return(
        <div className="container-lg">
            <div className="row about">
                <div className="col-md-7">
                    <h1>Hi, I'm Jordan</h1>
                    <p className="desc">
                        I'm a designer and developer strengthening high impact campaigns in the healthcare and pharmaceutical industries
                        through bold, accessible design.
                        As a senior double majoring in Design and Computer Science with a
                        cognitive science minor, I approach the design process holistically, considering implementation
                        and accessibility constraints.
                    </p>
                    <form id="fs-frm" name="contact" acceptCharset="utf-8" action="https://formspree.io/f/xbjnbbnw" method="post">
                        <fieldset id="fs-frm-inputs">
                            <legend>Let's get in touch!</legend>
                            <label htmlFor="full-name">Name</label><br></br>
                            <input type="text" name="name" id="full-name" placeholder="Name" required=""></input><br></br>
                            <label htmlFor="email-address">Email</label><br></br>
                            <input type="email" name="_replyto" id="email-address" placeholder="Email" required=""></input><br></br>
                            <label htmlFor="message">Message</label><br></br>
                            <textarea rows="5" name="message" id="message" placeholder="Message" required=""></textarea>
                            <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"></input>
                        </fieldset>
                        <button className="mt-2" id="submit" type="submit" value="Submit">Submit<i class="fa-solid fa-arrow-right"></i></button>
                    </form>
                </div>
                <div className="col-md-5">
                    <div className="ratio ratio-1x1 thumbnail headshot">
                        <img className="img-fluid home" src={images.headshot} alt="Jordan's headshot"></img>
                        <img className="img-fluid home overlay" src={images.headshotHover} alt="Jordan's headshot with brain, computer, and design icons"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}