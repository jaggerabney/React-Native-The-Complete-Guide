import { useState, createContext } from "react";

export const FavoritesContext = createContext({
  ids: [],
  add: (id) => {},
  remove: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [ids, setIds] = useState([]);

  function add(id) {
    setIds((prevIds) => [...prevIds, id]);
  }

  function remove(id) {
    setIds((prevIds) => prevIds.filter((item) => item.id === id));
  }

  return (
    <FavoritesContext.Provider value={{ ids, add, remove }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
