/**
 * JSX Element for the recommendation section of each work page.
 * Accepts props for two different pages to recommend.
 */
import './styles/index.css';
import { Link } from 'react-router-dom';

export default function More({prevImg, nextImg, prevName, nextName, prevLink, nextLink}){
    return(
        <div>
            <h2 className="mt-5 mb-4">See more</h2>
            <div className="row">
                <div className="col-6 col-sm-5 mb-4">
                    <Link to={prevLink}>
                        <div className="ratio ratio-4x3 thumbnail">
                            <img src={prevImg} className="img-fluid home" alt=""></img>
                        </div>
                    </Link>
                    <div className="d-flex flex-sm-row mt-2">
                        <i className="fa-solid fa-arrow-left me-2"></i>
                        <h3>{prevName}</h3>
                    </div>
                </div>
                <div className="col-6 col-sm-5 mb-4 ms-auto">
                    <Link to={nextLink}>
                        <div className="ratio ratio-4x3 thumbnail">
                            <img src={nextImg} className="img-fluid home" alt=""></img>
                        </div>
                    </Link>
                    <div className="d-flex flex-sm-row mt-2 justify-content-end">
                        <h3 className="text-end">{nextName}</h3>
                        <i className="fa-solid fa-arrow-right ms-2"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}