import React from "react";
import Buttons from "../Buttons/Buttons";
import SearchForm from "../SearchForm/SearchForm";
import Results from "../Results/Results";
import Loading from "../Loading/Loading";
import { useGlobalContext } from "../Context/Context";

const App = () => {
  const { loading, toggleTheme } = useGlobalContext();
  return (
    <>
      <main className="container pt-5 pb-3">
        <h1>Search Hacker News</h1>

        <button className="switch-btn" onClick={toggleTheme}>
          <span className="switch"></span>
        </button>
        <SearchForm />
        <Buttons />
        {loading ? <Loading /> : <Results />}
      </main>
    </>
  );
};
export default App;
