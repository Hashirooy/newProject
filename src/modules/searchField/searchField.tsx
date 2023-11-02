import { useState } from "react";
import "./searchField.css";

export const SearchField = () => {
  const [searchValur, setSearchValue] = useState("Search Field");
  const onChangeSeach = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };
  return (
    <div className="searchField">
      <input
        className="searchField"
        value={searchValur}
        onChange={onChangeSeach}
      ></input>
    </div>
  );
};
