import { rtkBaseApi } from "../../../shared/api/rtkBaseApi";
import { API_TAGS } from "../../../shared/api/tags";
import type { GetPublicQuestionsParams, PublicQuestionsResponse } from "./questionApi.types";

const BASE_URL = '/questions' as const;

export const questionApi = rtkBaseApi.injectEndpoints({
    endpoints: (build) => ({
        getPublicQuestions: build.query<PublicQuestionsResponse, GetPublicQuestionsParams | null>({
            query: (params = {}) => ({
                url: `${BASE_URL}/public-questions`,
                params,
            }),
            providesTags: [API_TAGS.Question]
        })
    }),
})

export const { useGetPublicQuestionsQuery } = questionApi