import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();
const getLocalData = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const AppProvider = ({ children }) => {
    const [page, setPage] = useState(0)
    const [query, setQuery] = useState('web development')
    const [nbPages, setNbPages] = useState(0)
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [theme, setTheme] = useState(getLocalData())

  

    const fetchResults = async () => {
        setLoading(true)
        try {
        const res = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}&&page=${page}`)
        const data = await res.json()
            setResults(data.hits)
          setNbPages(data.nbPages)
          setPage(data.page);

            setLoading(false)
        }
        catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
      const toggleTheme = (e) => {
          if (theme === "light-theme") {
            setTheme("dark-theme");

            e.target.classList.add("slide");
          } else {
            setTheme("light-theme");
            e.target.classList.remove("slide");
          }
  };
  const handleRemoveResult = (index) => {
    let newResults = [...results]
    newResults = newResults.filter((_, i) => i !== index)
    setResults(newResults)
  }
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };
  const handlePageChange = (i) => {
    setPage((oldPage) => {
      let newPage = Number(oldPage) + i;
      if(newPage > nbPages - 1) {
        newPage =  0
      }
      if(newPage < 0) {
        newPage = nbPages - 1
      }
      return newPage
    });
  }
  useEffect(() => {
     fetchResults()
    }, [page, query])
      useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem("theme", theme);
      }, [theme]);

    return (
      <AppContext.Provider
        value={{
          results,
          loading,
          handleSearch,
          nbPages,
          toggleTheme,
          query,
          handleRemoveResult,
          handlePageChange,
          page
        }}
      >
        {children}
      </AppContext.Provider>
    );
    }
    const useGlobalContext = () => {
        return useContext(AppContext);
    }

export { useGlobalContext, AppProvider };