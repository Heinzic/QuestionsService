import type { NestedUserReference } from "../user"

export interface NestedSpecialization {
    id: number
    title: string
    slug?: string
    description: string
    imageSrc?: string
    createdById: string
    updatedById: string
    createdBy: NestedUserReference
}