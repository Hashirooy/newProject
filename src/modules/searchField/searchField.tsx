import { useState } from "react";
import "./searchField.css";

export const SearchField = () => {
  const [searchValur, setSearchValue] = useState("");
  const onChangeSeach = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };
  return (
    <div className="search">
      <input
        className="searchField"
        value={searchValur}
        onChange={onChangeSeach}
        placeholder="Search Field"
      ></input>
      <div className="searchField--icon">
        <img src="src\assets\search.svg" alt="" />
      </div>
    </div>
  );
};
