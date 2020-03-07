import { ButtonsStyles } from "../ui-styles/styles";
export const config = { amp: "hybrid" };
export default () => (
  <div>
    <button className="btn">default button</button>
    <button className="btn btn-primary">primary button</button>
    <button className="btn btn-link">link button</button>
    <button className="btn btn-success">success button</button>
    <button className="btn btn-error">error button</button>
    <button className="btn btn-lg">large button</button>
    <button className="btn btn-sm">small button</button>

    <button className="btn btn-block">block button</button>

    <button className="btn btn-primary btn-lg">
      <i className="icon icon-arrow-left"></i> large
    </button>
    <button className="btn btn-primary">
      <i className="icon icon-arrow-left"></i> normal
    </button>
    <button className="btn btn-primary btn-sm">
      <i className="icon icon-arrow-left"></i> small
    </button>
    <button className="btn btn-action">
      <i className="icon icon-arrow-left"></i>
    </button>
    <button className="btn btn-action s-circle">
      <i className="icon icon-arrow-left"></i>
    </button>
    <button className="btn disabled" tabIndex="-1">
      disabled button
    </button>
    <button className="btn" disabled tabIndex="-1">
      disabled button
    </button>
    <button className="btn loading">button</button>
    <button className="btn btn-primary loading">primary button</button>
    <div className="btn-group btn-group-block">
      <button className="btn">first button</button>
      <button className="btn">second button</button>
      <button className="btn">third button</button>
    </div>
    <ButtonsStyles />
  </div>
);
