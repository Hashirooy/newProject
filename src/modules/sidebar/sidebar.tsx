import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src="src\assets\icon.svg" alt="My Happy SVG"></img>
      </div>
      <div className="sidebar__options">
        <div className="sidebar__options-blog"></div>
        <div className="sidebar__options-list"></div>
        <div className="sidebar__options-graph"></div>
        <div className="sidebar__options-map"></div>
        <div className="sidebar__options-calendar"></div>
        <div className="sidebar__options-members"></div>
      </div>
    </div>
  );
};
