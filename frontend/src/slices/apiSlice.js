import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

import { logout } from "./authSlice";

// Here, it is important to handle with JWT and Cookie expires
// Utilize base query to intercept any 401 responses and log user out

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

async function baseQueryWithAuth(args, api, extra) {
  const result = await baseQuery(args, api, extra);
  // dispatch the logout action on 401
  if (result.error && result.error.status === 401) {
    api.dispatch(logout());
  }
  return result;
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Product", "Order", "User"],
  endpoints: (builder) => ({}),
});
