import images from '../images';
import '../styles/home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container-lg pt-6">
      <div className="row">
        <div className="col-md-6 py-3">
          <Link to="/clippies">
            <div className="ratio ratio-4x3 thumbnail">
              <img src={images.clippies.thumbnail} className="img-fluid home" alt="Clippies Thumbnail"></img>
              <img src={images.clippies.hover} className="img-fluid home overlay" alt="Clippies 3D Model Animation"></img>
            </div>
          </Link>
          <h2>Clippies</h2>
          <div className="tag-container">
            <span className="tags">branding</span><span className="tags">product design</span><span className="tags">packaging</span>
          </div>
        </div>
        <div className="col-md-6 py-3">
          <Link to="/greenway-gallery">
            <div className="ratio ratio-4x3 thumbnail">
              <img src={images.greenway.thumbnail} className="img-fluid home" alt="Greenway Gallery Thumbnail"></img>
              <img src={images.greenway.hover} className="img-fluid home overlay" alt="Greenway Augmented Reality Demo"></img>
            </div>
          </Link>
          <h2>Greenway Gallery</h2>
          <div className="tag-container">
            <span className="tags">augmented reality (AR)</span><span className="tags">branding</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 py-3">
          <Link to="/crochique">
              <div className="ratio ratio-4x3 thumbnail">
                <img src={images.crochique.thumbnail} className="img-fluid home" alt="Crochique: Crochet mobile app thumbnail"></img>
                <img src={images.crochique.hover} className="img-fluid home overlay" alt="Crochique: mobile video walkthrough"></img>
              </div>
          </Link>
          <h2>Crochique</h2>
          <div className="tag-container">
            <span className="tags">UI/UX Design</span><span className="tags">branding</span>
          </div>
        </div>
        <div className="col-md-6 py-3">
          <Link to="/reconnecting-lehigh">
              <div className="ratio ratio-4x3 thumbnail">
                <img src={images.reconnecting.thumbnail} className="img-fluid home" alt="Reconnecting Lehigh Mobile UI Mockup"></img>
                <img src={images.reconnecting.hover} className="img-fluid home overlay" alt="Reconnecting Lehigh Widget Micro-Interactions"></img>
              </div>
          </Link>
          <h2>Reconnecting Lehigh</h2>
          <div className="tag-container">
            <span className="tags">UI/UX Design</span>
          </div>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6 mb-4">
          <a href="wicked.html">
            <div className="ratio ratio-4x3 thumbnail">
              <img src={images.wicked.thumbnail} className="img-fluid home" alt="Wicked Thumbnail"></img>
              <img src={images.wicked.hover} className="img-fluid home overlay" alt="Wicked Icon Animation"></img>
            </div>
          </a>
          <h2>Wicked</h2>
          <div className="tag-container">
            <span className="tags">branding</span><span className="tags">animation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;