import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_TAGS } from './tags';

const BASE_API_URL = 'https://api.yeatwork.ru/';
const REDUCER_PATH = 'api';

export const rtkBaseApi = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery({ 
    baseUrl: BASE_API_URL,
  }),
  endpoints: () => ({}),
  tagTypes: Object.values(API_TAGS)
});