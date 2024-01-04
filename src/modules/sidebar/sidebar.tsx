import { IconLogo } from "../Icon/IconLogo";
import { Navigation } from "../navigation/Navigation";
import "./sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <IconLogo />
      </div>
      <div className="sidebar__Navigation">
        <Navigation />
      </div>
    </div>
  );
};
