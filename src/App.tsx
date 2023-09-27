import "./App.css";
import { Main } from "./Components/Main/Main";
import { Header } from "./Header/Header";
import { Layout } from "./Layout/Layout";

export const App = () => {
  return (
    <>
      <Layout Header={<Header />} Main={<Main />} />
    </>
  );
};
