import navbarScss from "./navbar.scss";
import { FormsStyles } from "../../ui-styles/styles";

export default () => (
  <>
    <div className="app-navbar">
      <a className="off-canvas-toggle btn btn-link btn-action" href="#sidebar">
        <i className="icon icon-menu"></i>
      </a>
      <div className="btns d-flex">
        <input className="app-search form-input" type="text" placeholder="Search Docs" />
        <a className="btn ml-1" href="https://www.paypal.me/picturepan2" target="_blank">
          PayPal
        </a>
        <a className="btn btn-primary ml-1" href="https://github.com/picturepan2/spectre" target="_blank">
          GitHub
        </a>
      </div>
    </div>
    <FormsStyles/>
    <style jsx global>
      {navbarScss}
    </style>
  </>
);
