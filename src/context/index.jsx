import { createContext, useState } from "react";

//default context
const defaultContext = {
  stockPageData: [],
  setStockPageData: () => { },
  quotesPageData: [],
  setQuotesPageData: () => { },
};

const AppContext = createContext(defaultContext);

const AppContextProvider = AppContext.Provider;

const AppContextConsumer = AppContext.Consumer;

export const useAppContext = () => {
  const [stockPageData, setStockPageData] = useState([]);
  const [quotesPageData, setQuotesPageData] = useState([]);

  return {
    stockPageData,
    setStockPageData,
    quotesPageData,
    setQuotesPageData
  };
};

export { AppContext, AppContextProvider, AppContextConsumer };
