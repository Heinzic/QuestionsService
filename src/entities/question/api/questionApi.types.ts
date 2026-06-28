import type { Question } from "../.."

export interface PublicQuestionsResponse {
    total: number
    page: number
    limit: number
    data: Question[]
}

export interface GetPublicQuestionsParams {
    page?: number;
    limit?: number;
    title?: string
    titleOrDescription?: string
    skills?: string[]
    skillFilterMode?: string
    topics?: string[]
    complexity?: number[];
    collection?: number
    rate?: number[]
    keywords?: string[]
    specializationId?: number
    specializationSlug?: string
    createdAtFrom?: Date
    createdAtTo?: Date
    orderBy?: 'createdAt' | 'title' | 'rate' | 'complexity' | 'createdById';
    order?: 'ACS' | 'DESC';
    random?: boolean
  }