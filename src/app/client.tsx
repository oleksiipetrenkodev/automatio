"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
export const Client = () => {
  const trpc = useTRPC();
  const { data: users } = useSuspenseQuery(trpc.getUsers.queryOptions());
  return (
    <div>
      <h1>Hello from the Client Component!</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
};
