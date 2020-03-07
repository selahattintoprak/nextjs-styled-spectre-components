import layoutScss from "./layout.scss";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
export default () => (
  <>
    <div className="docs-container off-canvas off-canvas-sidebar-show">
      <Navbar />
      <Sidebar />

      <div className="off-canvas-content">
        <div className="docs-content" id="content">
          <div className="container" id="components">
            <h3 className="s-title">
              Components
              <a className="anchor" href="#components" aria-hidden="true">
                #
              </a>
            </h3>
            <Body />
          </div>
          <Footer />
        </div>
      </div>
    </div>
    <style jsx global>
      {layoutScss}
    </style>
  </>
);