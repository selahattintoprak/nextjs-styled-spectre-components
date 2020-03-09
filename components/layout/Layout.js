import layoutScss from "./layout.scss";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import { OffCanvasStyles, ButtonsStyles, LayoutStyles, AccordionsStyles, MenusStyles, TypographyStyles } from "../../ui-styles/styles";
export default () => (
  <>
    <div className="app-container off-canvas off-canvas-sidebar-show">
      <Navbar />
      <Sidebar />

      <div className="off-canvas-content">
        <div className="app-content" id="content">
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
    <TypographyStyles/>
    <LayoutStyles />
    <AccordionsStyles />
    <MenusStyles />
    <OffCanvasStyles />
    <ButtonsStyles />
    <style jsx global>
      {layoutScss}
    </style>
  </>
);
