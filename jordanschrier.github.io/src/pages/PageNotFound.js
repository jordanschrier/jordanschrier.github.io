import { Link } from "react-router-dom";

export default function PageNotFound(){
    return(
        <div className="container-lg">
            <div className="row not-found">
                <h1>404</h1>
                <h2>
                    It looks like I don't have that page, but you can check out my work{" "}  
                    <Link to="/">
                        here!
                    </Link>
                </h2>
            </div>
        </div>
    );
}