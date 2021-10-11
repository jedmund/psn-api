import fetch from "isomorphic-unfetch";

import type { AuthorizationPayload } from "@/models";

export const call = async <T>(
  config: {
    url: string;
    method?: "GET" | "POST";
  },
  authorization: AuthorizationPayload
) => {
  const response = await fetch(config.url, {
    method: config?.method ?? "GET",
    headers: { Authorization: `Bearer ${authorization.accessToken}` }
  });

  return (await response.json()) as T;
};