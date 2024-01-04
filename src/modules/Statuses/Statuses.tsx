import "./Statuses.css";
export const Statuses = () => {
  return (
    <div className="statuses">
      {listStatus.map((status) => (
        <div key={status.id} className="statuses__item">
          <div className="statuses__item--circle"></div>
          {status.name}
        </div>
      ))}
    </div>
  );
};

const listStatus: { id: string; name: string }[] = [
  { id: "1", name: "Evaluation" },
  { id: "2", name: "Evaluation today" },
  { id: "3", name: "Documents" },
  { id: "4", name: "Work" },
  { id: "5", name: "Thinking" },
];
