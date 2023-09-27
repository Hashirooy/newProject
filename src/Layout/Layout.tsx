import "./Layout.css";

type LayoutProps = {
  Header: React.ReactNode;
  Main: React.ReactNode;
};

export const Layout = ({ Header, Main }: LayoutProps) => {
  return (
    <>
      <div className="header_layout">{Header}</div>
      <div className="header_body">{Main}</div>
      <div className="header_footer">footer</div>
    </>
  );
};
