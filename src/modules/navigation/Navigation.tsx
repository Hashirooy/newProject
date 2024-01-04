import "./Navigation.css";

export const Navigation = () => {
  return (
    <div className="navigation">
      {navigationList.map((item) => (
        <div key={item.id} className="navigation__item">
          <img className="navigation__item--icon" src={item.path} />
        </div>
      ))}
    </div>
  );
};

const navigationList: { id: string; name: string; path: string }[] = [
  { id: "1", name: "tabel", path: "src/assets/table.svg" },
  { id: "2", name: "list", path: "src/assets/list.svg" },
  { id: "3", name: "map", path: "src/assets/map.svg" },
  { id: "4", name: "calendar", path: "src/assets/calendar.svg" },
  { id: "5", name: "people", path: "src/assets/people.svg" },
];
