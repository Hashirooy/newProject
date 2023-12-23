import "./layout.css";

type LayoutProps = {
  Header: React.ReactNode;
  Page: React.ReactNode;
  Sidebar: React.ReactNode;
};

export const Layout = ({ Header, Page, Sidebar }: LayoutProps) => {
  return (
    <div className="layout">
      <div className="layout__sidebar">{Sidebar}</div>
      <div className="layout__main">
        <div className="layout__main-header">{Header}</div>
        <div className="layout__main-content">{Page}</div>
      </div>
    </div>
  );
};
