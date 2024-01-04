import "./Tags.css";

export const Tags = () => {
  return (
    <div className="tags">
      {tagList.map((tag) => (
        <div key={tag.id} className="tags__item">
          {tag.tagnName}
        </div>
      ))}
    </div>
  );
};

const tagList: { id: string; tagnName: string }[] = [
  { id: "1", tagnName: "In progress" },
  { id: "2", tagnName: "Completed" },
  { id: "3", tagnName: "Archived" },
];
