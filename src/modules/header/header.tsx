import { SearchField } from "../searchField/searchField";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="header--userName">UserName</div>
      <SearchField />
      <div className="account">
        <div className="account--tools">
          <img src="src\assets\question.svg" alt="" />
          <img src="src\assets\bell.svg" alt="" />
        </div>
        <div className="account--line"></div>
        <div className="account--options">
          <div className="account--foto">
            <img src="src\assets\fotka.jpg" alt="" />
          </div>
          <div className="account--data">
            <h2>LastNAme FirsName</h2>
            <h3>position</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
