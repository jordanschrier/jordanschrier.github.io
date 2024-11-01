import images from './images';
import './App.css';

function App() {
  return (
    <div className="container mt-xxl">
      <div class="row">
        <div class="col-md-6 mb-4">
          <a href="clippies.html">
            <div class="ratio ratio-4x3 thumbnail">
              <img src={images.clippies.thumbnail} class="img-fluid home" alt="Clippies Thumbnail"></img>
              <img src={images.clippies.hover} class="img-fluid home overlay" alt="Clippies 3D Model Animation"></img>
            </div>
          </a>
          <h2>Clippies</h2>
          <div class="tag-container mb-4">
            <span class="tags">branding</span><span class="tags">product design</span><span class="tags">packaging</span>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <a href="greenway-gallery.html">
            <div class="ratio ratio-4x3 thumbnail">
              <img src={images.greenway.thumbnail} class="img-fluid home" alt="Prosaic"></img>
              <img src={images.greenway.hover} class="img-fluid home overlay" alt="Greenway AR Demo"></img>
            </div>
          </a>
          <h2>Greenway Gallery</h2>
          <div class="tag-container mb-4">
            <span class="tags">augmented reality (AR)</span><span class="tags">branding</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 mb-4">
          <a href="crochique.html">
              <div class="ratio ratio-4x3 thumbnail">
                <img src={images.crochique.thumbnail} class="img-fluid home" alt="Crochique: Crochet mobile app thumbnail"></img>
                <img src={images.crochique.hover} class="img-fluid home overlay" alt="Crochique mobile video walkthrough"></img>
              </div>
            </a>
            <h2>Crochique</h2>
            <div class="tag-container mb-4">
              <span class="tags">UI/UX Design</span><span class="tags">branding</span>
            </div>
        </div>
        <div class="col-md-6 mb-4">
          <a href="reconnecting.html">
              <div class="ratio ratio-4x3 thumbnail">
                <img src={images.reconnecting.thumbnail} class="img-fluid home" alt="Wicked Thumbnail"></img>
                <img src={images.reconnecting.hover} class="img-fluid home overlay" alt="Reconnecting Lehigh Widget Micro-Interactions"></img>
              </div>
            </a>
          <h2>Reconnecting Lehigh</h2>
          <div class="tag-container mb-4">
            <span class="tags">UI/UX Design</span>
          </div>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col-md-6 mb-4">
          <a href="wicked.html">
            <div class="ratio ratio-4x3 thumbnail">
              <img src={images.wicked.thumbnail} class="img-fluid home" alt="Wicked Thumbnail"></img>
              <img src={images.wicked.hover} class="img-fluid home overlay" alt="Wicked Icon Animation"></img>
            </div>
          </a>
          <h2>Wicked</h2>
          <div class="tag-container mb-4">
            <span class="tags">branding</span><span class="tags">animation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
