import { IconBell } from "../Icon/IconBell";
import { IconQuestion } from "../Icon/IconQuestion";
import { SearchField } from "../searchField/searchField";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header--userName">UserName</div>
      <SearchField />
      <div className="account">
        <div className="account__tools">
          <IconQuestion width="26" height="26" />
          <IconBell width="24" height="24" />
        </div>
        <div className="account--line"></div>
        <div className="account__options">
          <div className="account__options--foto">
            <img src="src\assets\fotka.jpg" alt="" />
          </div>
          <div className="account__data">
            <h2 className="account__data--FIO">Opleukhin Gleb</h2>
            <h3 className="account__data--position">Qa engineer </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
