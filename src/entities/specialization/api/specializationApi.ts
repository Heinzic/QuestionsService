import type { SpecializationsRequest, SpecializationsResponse } from ".";
import { rtkBaseApi } from "../../../shared/api/rtkBaseApi";
import { API_TAGS } from "../../../shared/api/tags";

const BASE_URL = 'specializations/'

export const specializationApi = rtkBaseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllSpecializations: build.query<SpecializationsResponse, SpecializationsRequest>({
            query: (params = {}) => ({ url: BASE_URL, params }), providesTags: [API_TAGS.Specializations]
        })
    })
})

export const { useGetAllSpecializationsQuery, useLazyGetAllSpecializationsQuery } = specializationApi