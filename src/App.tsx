import "./App.css";
import { Header } from "./modules/header/header";
import { Layout } from "./modules/layout/layout";
import { Page } from "./modules/page/page";
//import { Main } from "./Components/Main/Main";
//import { Header } from "./Header/Header";
//import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <>
      <Layout Header={<Header />} Page={<Page />} />
    </>
  );
};
