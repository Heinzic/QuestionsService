import type { NestedSpecialization } from "../model"

export interface SpecializationsResponse {
    data: NestedSpecialization[]
    page: number
    limit: number
    total: number
}

export interface SpecializationsRequest {
    page?: number
    limit?: number
    authorId?: string
    title?: string
}