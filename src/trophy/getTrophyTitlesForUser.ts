import urlcat from "urlcat";

import type { AuthorizationPayload, UserTrophyTitlesResponse } from "@/models";

import { call } from "../call";
import { baseUrl } from "./baseUrl";

interface GetTrophyTitlesForUserOptions {
  /** Limit the number of titles returned. */
  limit: number;

  /** Returns title data from this result onwards. */
  offset: number;
}

/**
 * Requests to this URL will retrieve a list of the titles associated with an account,
 * and a summary of trophies earned from them.
 *
 * The numeric `accountId` can be that of any PSN account for which the authenticating
 * account has permissions to view the trophy list. When querying the titles
 * associated with the authenticating account, the numeric `accountId` can be
 * substituted with `"me"`.
 *
 * Included in the information returned is the titles' unique `npCommunicationId`.
 * This is required to make use of subsequent URLs for requesting more specific
 * detail about a titles trophies.
 *
 * The results are presented in order of the `lastUpdatedDateTime` for the title,
 * so the first result will be the title for which a trophy was recently earned
 * (or synced for the first time in the case of a game with 0% progress).
 *
 * @param authorization An object containing your access token, typically retrieved with `getAuthenticationToken()`.
 * @param accountId The account whose trophy list is being accessed. Use `"me"` for the authenticating account.
 * @param options.limit Limit the number of titles returned.
 * @param options.offset Returns title data from this result onwards.
 */
export const getTrophyTitlesForUser = async (
  authorization: AuthorizationPayload,
  accountId: string,
  options?: Partial<GetTrophyTitlesForUserOptions>
) => {
  const url = buildRequestUrl(accountId, options);

  return await call<UserTrophyTitlesResponse>({ url }, authorization);
};

const buildRequestUrl = (
  accountId: string,
  options?: Partial<GetTrophyTitlesForUserOptions>
) => {
  return urlcat(baseUrl, "/v1/users/:accountId/trophyTitles", {
    accountId,
    ...options
  });
};