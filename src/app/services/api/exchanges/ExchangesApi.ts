import { baseApi } from "../../baseApi";
import { Exchanges } from "./Exchanges.types";

export const exchanges = baseApi
    .enhanceEndpoints({ addTagTypes: ["Exchanges"] })
    .injectEndpoints({
        endpoints: (builder) => ({
            getExchanges: builder.query<Exchanges, void>({
                query: () =>
                    "exchanges",
                providesTags: (result) =>
                    result
                        ? [
                            ...result.map(({ id }) => ({
                                type: "Exchanges" as const,
                                id,
                            })),
                            { type: "Exchanges", id: "LIST" },
                        ]
                        : [{ type: "Exchanges", id: "LIST" }],
            }),
        }),
    });

export const { useGetExchangesQuery } = exchanges;
