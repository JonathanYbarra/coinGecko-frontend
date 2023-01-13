import { baseApi } from "../../baseApi";
import { mainCryptoCoins, vs_currency } from "./coins";
import { CoinsMarket } from "./CoinsMarket.types";

export const coinsMarket = baseApi
  .enhanceEndpoints({ addTagTypes: ["CoinsMarket", "AllCoins"] })
  .injectEndpoints({

    endpoints: (builder) => ({
      getCoinsMarketById: builder.query<CoinsMarket[], void>({
        query: () =>
          `/coins/markets?${vs_currency}${mainCryptoCoins}`,
        providesTags: (result) =>
          result
            ? [
              ...result.map(({ id }) => ({
                type: "CoinsMarket" as const,
                id,
              })),
              { type: "CoinsMarket", id: "LIST" },
            ]
            : [{ type: "CoinsMarket", id: "LIST" }],
      }),

      getCoinsMarket: builder.query<CoinsMarket[], void>({
        query: () =>
          `/coins/markets?${vs_currency}`,
        providesTags: (result) =>
          result
            ? [
              ...result.map(({ id }) => ({
                type: "AllCoins" as const,
                id,
              })),
              { type: "AllCoins", id: "LIST" },
            ]
            : [{ type: "AllCoins", id: "LIST" }],
      }),

      marketChart: builder.query<CoinsMarket[], void>({
        query: () => `/coins/bitcoin/market_chart?vs_currency=usd&days=7`,
      }),
    }),
  });

export const { useGetCoinsMarketByIdQuery, useGetCoinsMarketQuery, useMarketChartQuery } = coinsMarket;
