import { useAmp } from "next/amp";
import brandScss from "./brand.scss";
import { LabelsStyles } from "../../ui-styles/styles";
export default () => (
  <>
    <div className="app-brand">
      <a className="app-logo" href="index.html">
        {useAmp() ? (
          <amp-img alt="Spectre.css CSS Framework" src="spectre-logo.svg" height="32" width="32" />
        ) : (
          <img alt="Spectre.css CSS Framework" src="spectre-logo.svg" />
        )}
        <h2>SPECTRE</h2>
        <small className="label label-secondary text-bold">DOCS</small>
      </a>
    </div>
    <LabelsStyles />
    <style jsx global>
      {brandScss}
    </style>
  </>
);
