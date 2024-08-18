import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const GET_LATEST_PRICE_KEY = ["GET_LATEST_PRICE"];

const fetchLatestPrice = async (symbolOne: string, symbolTwo: string) => {
  const response = await fetch(
    `https://api.binance.com/api/v3/ticker/price?symbol=${symbolOne}${symbolTwo}`
  );
  if (!response.ok) {
    throw new Error(
      `Failed to fetch latest price for: ${symbolOne + symbolTwo}`
    );
  }
  return response.json();
};

interface UseLatestPriceResult {
  isLoading: boolean;
  isError: boolean;
  price: any;
  refetch: () => void;
  fetchLatestPrice: (symbolOne: string, symbolTwo: string) => Promise<any>;
}
/**
 * @dev Fetches latest price data - best used for details component, since context will handle the rest.
 * @param symbolOne tickerSymbol for the first asset
 * @param symbolTwo tickerSymbol for the second asset
 * @returns latest price data
 */
export function useLatestPrice(
  symbolOne: string,
  symbolTwo: string
): UseLatestPriceResult {
  const { data, isLoading, isError, refetch }: UseQueryResult<any> = useQuery({
    queryKey: [GET_LATEST_PRICE_KEY, symbolOne, symbolTwo],
    queryFn: () => fetchLatestPrice(symbolOne, symbolTwo),
  });

  const price = data ? data : [];

  const fetchLatestPriceWrapper = (symbolOne: string, symbolTwo: string) => {
    return fetchLatestPrice(symbolOne, symbolTwo);
  };

  return {
    isLoading,
    isError,
    price,
    refetch,
    fetchLatestPrice: fetchLatestPriceWrapper,
  };
}
