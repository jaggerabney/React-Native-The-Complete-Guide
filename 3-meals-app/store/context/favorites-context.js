import { createContext } from "react";

export const FavoritesContext = createContext({
  ids: [],
  add: (id) => {},
  remove: (id) => {},
});

function FavoritesContextProvider({ children }) {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;
