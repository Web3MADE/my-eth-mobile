// PriceContext.tsx
import { useQuery } from "@tanstack/react-query";
import React, { createContext, ReactNode, useContext } from "react";
// PriceContextProps for the context itself, this is the data that is shared across the app
interface PriceContextProps {
  prices: any[];
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
}
// PriceContext is the context itself, it is created with createContext and the initial value is undefined
const PriceContext = createContext<PriceContextProps>({
  prices: [],
  isLoading: false,
  isError: false,
  refetch: () => {},
});
// fetchLatestPrices is an async function that fetches the latest prices for the given symbols
const fetchLatestPrices = async (
  symbols: { symbolOne: string; symbolTwo: string }[]
) => {
  const requests = symbols.map(({ symbolOne, symbolTwo }) =>
    fetch(
      `https://api.binance.com/api/v3/ticker/price?symbol=${symbolOne}${symbolTwo}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(
          `Failed to fetch latest price for: ${symbolOne + symbolTwo}`
        );
      }
      return response.json();
    })
  );

  return Promise.all(requests);
};
// PriceProider is the wrapper that provides context to the children
interface PriceProviderProps {
  symbols: { symbolOne: string; symbolTwo: string }[];
  children: ReactNode;
}

export const PriceProvider = ({
  symbols,
  children,
}: PriceProviderProps): JSX.Element => {
  const {
    data: prices = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["GET_LATEST_PRICES", symbols],
    queryFn: () => fetchLatestPrices(symbols),
  });

  return (
    <PriceContext.Provider value={{ prices, isLoading, isError, refetch }}>
      {children}
    </PriceContext.Provider>
  );
};

export const usePrices = () => {
  const context = useContext(PriceContext);
  if (!context) {
    throw new Error("usePrices must be used within a PriceProvider");
  }
  return context;
};
