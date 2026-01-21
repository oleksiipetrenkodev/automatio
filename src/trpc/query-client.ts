import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from "@tanstack/react-query";
/**
 * Creates a preconfigured TanStack QueryClient for the application.
 *
 * Configures queries with a 30-second staleTime and a dehydrate policy that
 * preserves queries when their default dehydration criteria fail but the
 * query's state is "pending". Placeholders for custom (de)serialization are
 * present but commented out.
 *
 * @returns A configured QueryClient instance
 */
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: {
        // serializeData: superjson.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
      },
      hydrate: {
        // deserializeData: superjson.deserialize,
      },
    },
  });
}